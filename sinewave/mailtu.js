var gui = new dat.gui.GUI();
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


const wave = {
    lenth: 0.01,
    amplitude: 100,
    frequency: 0.01
}

const strokeColor = {
    h: 200,
    s: 50,
    l: 50
}
const bgColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 0.01
}

const waveFolder = gui.addFolder('wave');
waveFolder.add(wave, 'lenth', -0.01, 0.01);
waveFolder.add(wave, 'amplitude', -300, 300);
waveFolder.add(wave, 'frequency', -0.01, 1);
waveFolder.open();

const strokeFolder = gui.addFolder('stroke');
strokeFolder.add(strokeColor, 'h', 0, 255);
strokeFolder.add(strokeColor, 's', 0, 100);
strokeFolder.add(strokeColor, 'l', 0, 100);
strokeFolder.open();

const bgFolder = gui.addFolder('bg');
bgFolder.add(bgColor, 'r', 0, 255);
bgFolder.add(bgColor, 'g', 0, 255);
bgFolder.add(bgColor, 'b', 0, 255);
bgFolder.add(bgColor, 'a', 0, 1);
bgFolder.open();

let increment = wave.frequency;

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
    c.fillRect(0, 0, innerWidth, innerHeight)
    c.beginPath();
    for (let i = 0; i < 1; i++) {
        c.moveTo(0, canvas.height / i);
        for (let j = 0; j < canvas.width; j++) {
            c.lineTo(j, (canvas.height / i)+ Math.sin(j * wave.lenth + increment) * wave.amplitude * Math.sin(increment));
            c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${strokeColor.s}%, ${strokeColor.l}%)`
            c.stroke(); 
        }
    }

    increment += wave.frequency;
    
    
    console.log(increment);
    
    
}
animate();


















































// var gui = new dat.gui.GUI();
// const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;
// let n = 3;

// const wave = {
//     y: canvas.height / 2,
//     lenth: 0.01,
//     amplitude: 100,
//     frequency: 0.01
// }

// const strokeColor = {
//     h: 200,
//     s: 50,
//     l: 50
// }
// const bgColor = {
//     r: 0,
//     g: 0,
//     b: 0,
//     a: 0.01
// }
// const waveFolder = gui.addFolder('wave');
// waveFolder.add(wave, 'y', 0, canvas.height);
// waveFolder.add(wave, 'lenth', -0.01, 0.01);
// waveFolder.add(wave, 'amplitude', -300, 300);
// waveFolder.add(wave, 'frequency', -0.01, 1);
// waveFolder.open();

// const strokeFolder = gui.addFolder('stroke');
// strokeFolder.add(strokeColor, 'h', 0, 255);
// strokeFolder.add(strokeColor, 's', 0, 100);
// strokeFolder.add(strokeColor, 'l', 0, 100);
// strokeFolder.open();

// const bgFolder = gui.addFolder('bg');
// bgFolder.add(bgColor, 'r', 0, 255);
// bgFolder.add(bgColor, 'g', 0, 255);
// bgFolder.add(bgColor, 'b', 0, 255);
// bgFolder.add(bgColor, 'a', 0, 1);
// bgFolder.open();
// let increment = wave.frequency;

// function Wave(y) {
//     this.y = y;
//     this.draw = function () {
//         c.beginPath();
//         c.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
//         c.fillRect(0, 0, innerWidth, innerHeight);
//         c.moveTo(0, this.y);
//         for (let i = 0; i < canvas.width; i++) {
//             c.lineTo(i, wave.y + Math.sin(i * wave.lenth + increment) * wave.amplitude * Math.sin(increment));
//         }
//         c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${strokeColor.s}%, ${strokeColor.l}%)`
//         c.stroke();    
//         increment += wave.frequency;
//     }
// }

// let waveArray;
//     function init() {
//         waveArray = [];
//         for (var i = 0; i < n; i++) {
//             var y = canvas.height / i;
//             waveArray.push(new Wave(y));
//         }
//     }
//     init()
// 	function an() {
// 	requestAnimationFrame(an)
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     	 for (let i = 0; i < waveArray.length; i++) {
//              waveArray[i].draw();
             
//          }
// 	}
// 	an()
// init()
// console.log(waveArray.length);  
// console.log(wave.y + Math.sin(i * wave.lenth + increment) * wave.amplitude * Math.sin(increment));  