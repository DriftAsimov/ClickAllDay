var time = 0;
var d = 50;
var running = false;

let music = document.getElementById('bgm');

let box = document.getElementById('mov');
var dur = document.getElementById('time')

let slider = document.getElementById('slider');

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
    }

    if (slider.value < 5)
    {
        slider.innerHTML = "input[type=range]::-webkit-slider-thumb {width:50%;}";
    }
}, 300
);

box.addEventListener('keyup', event =>
{
    if (event.key === 'x')
    {
        pong();
    }
});

function pong()
{    

    music.volume = slider.value / 100;

    duration = Math.round(music.currentTime);
    if (duration < 10)
    {
        duration = '0' + duration;
    }
    if (duration > 59)
    {
        duration = duration % 60;
    }
    minutes = Math.floor(duration / 60);
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

    if (running == true)
    {
        music.play();
    }
}