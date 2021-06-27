var time = 0;
var d = 50;
var running = false;

let music = document.getElementById('bgm');

let box = document.getElementById('mov');
var dur = document.getElementById('time')

let slider = document.getElementById('slider');
let controls = document.getElementById('head');
let upload = document.getElementById('uploaded');
let upload_div = document.getElementById('music-upload');
let upload_btn = document.getElementById('btn');

window.CSS.registerProperty
({
    name: '--angle',
    syntax: '<angle>',
    initialValue: '0deg',
    inherits: false,
})

setInterval(function()
{  
    if (running == false)
    {
        music.pause();
        setTimeout(function(){controls.style.visibility = "visible";},1500);
    }
}, 300
);

function file(event)
{
    var audio_src = URL.createObjectURL(event.target.files[0]);
    music.setAttribute('src', audio_src);
    
    upload_div.style.boxShadow = '0 0 15px #7574a7';
    upload_btn.innerHTML = event.target.files[0].name.split(".")[0];
    time = 0;
}

function oops()
{
    upload_div.style.boxShadow = '0 0 13px #EB1D55';
}

function bgm()
{
    if (running == true)
    {
        music.play();
    }
}

box.addEventListener('keyup', event =>
{
    if (event.key === 'x')
    {
        pong();
    }
});

function pong()
{    
    controls.style.visibility = "hidden";

    music.volume = slider.value / 100;

    duration = ~~music.currentTime % 60;
    minutes = ~~((music.currentTime % 3600) / 60);
    if (duration < 10)
    {
        duration = '0' + duration;
    }
    dur.innerHTML = `${minutes}:${duration}`;
    
    running = true;
    setTimeout(function(){running = false;},100);
    time += 1;
    d -= 0.2;
    document.getElementById('clicks').innerHTML = time;
    let bt = document.getElementById('mov');

    if (d >= 2)
    {
        bt.style.animationDuration = `${d}s`;
    }

    if (time % 5 === 0)
    {
        box.style.boxShadow = '0 10px 200px #2B2A75';
        setTimeout(function(){box.style.boxShadow = "";},200);
    }

    bgm();
}
