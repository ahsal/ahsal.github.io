// var gui = new dat.gui.GUI();
// const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;
// let h = canvas.height;
// let w = canvas.width;

// const wave = {
//     y : canvas.height / 2,
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




// function animate() {
//     requestAnimationFrame(animate);
//     c.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
//     c.fillRect(0, 0, innerWidth, innerHeight) 
  

// for(let i = 1; i < 100; i++){

//     let d = canvas.height / 11;
//     c.beginPath();
//     c.moveTo(0, h-=d);
//     for (let i = 0; i < canvas.width; i++) {
//         c.lineTo(i, (h)+ Math.sin(i * wave.lenth + increment) * wave.amplitude * Math.sin(increment));
//         console.log(h + Math.sin(i * wave.lenth + increment) * wave.amplitude * Math.sin(increment));
//     }
//     c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${strokeColor.s}%, ${strokeColor.l}%)`
//     c.stroke();    

//     increment += wave.frequency;
// }
    
    
    
    
// }
// animate();




























// var gui = new dat.gui.GUI();
// const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// const wave = {
//     y : canvas.height / 2,
//     lenth: 0.01,
//     amplitude: 100,
// }

// gui.add(wave, 'y', 0, canvas.height)
// gui.add(wave, 'lenth', -0.01, 0.01)
// gui.add(wave, 'amplitude', -300, 300)


// function animate() {
//     requestAnimationFrame(animate)
//     console.log(5);
//     c.beginPath();

//     c.moveTo(0, canvas.height / 2);
//     for (let i = 0; i < canvas.width; i++) {
//         c.lineTo(i, wave.y + Math.sin(i * wave.lenth) * wave.amplitude);
//     }
    
//     c.stroke();    
    
// }
// animate();




// let increment = wave.frequency;
// function animate() {
//     requestAnimationFrame(animate)
//     console.log(5);
//     c.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
//     c.fillRect(0, 0, innerWidth, innerHeight) 
//     c.beginPath();

//     c.moveTo(0, canvas.height / 2);
//     for (let i = 0; i < canvas.width; i++) {
//         c.lineTo(i, wave.y + Math.sin(i * wave.lenth + increment) * wave.amplitude * Math.sin(increment));
//     }
//     c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${strokeColor.s}%, ${strokeColor.l}%)`
//     c.stroke();    
//     increment += wave.frequency;
    
    
//     console.log(increment);
    
    
// }
// animate();
