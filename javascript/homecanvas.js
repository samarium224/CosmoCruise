var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = 280;
var c = canvas.getContext('2d');

const wave = {
    y: canvas.height/2,
    length: 0.01,
    amplitude: 25,
    frequency: 0.01
}

const backgroundcolor = {
    r: 0,
    g: 0,
    b: 0,
    a: 0.01
}

const strokeColor = {
    h: 200,
    s: 50,
    l: 72,
}


let incriment = wave.frequency;
function animate(){
    requestAnimationFrame(animate)
    // c.clearRect(0,0,canvas.width,canvas.height);
    c.fillStyle = `rgba(${backgroundcolor.r},${backgroundcolor.g},${backgroundcolor.b},${backgroundcolor.a})`;
    c.fillRect(0,0,window.innerWidth, window.innerHeight);

    c.beginPath();
    c.moveTo(0, canvas.height/2)

    for (let i = 0; i < canvas.width; i++) {
        // c.lineTo(i, (wave.y + Math.sin(i* wave.length + incriment) * Math.sin(wave.amplitude + incriment)*200)) + Math.cos(wave.amplitude + incriment)*200;
        c.lineTo(i, (wave.y + Math.sin(i* wave.length + incriment) * Math.sin(i*wave.amplitude+incriment)*100));
    }
    c.stroke();
    c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(incriment))}, ${strokeColor.s}% , ${strokeColor.l}%)`;
    incriment += wave.frequency;

}

animate();
