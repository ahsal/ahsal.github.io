const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');    
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    
const wave = {
    y : canvas.height / 2,
    lenth: 0.01,
    amplitude: 100,
    frequency: 0.01
}
     let increment = wave.frequency
    let j;
    function clear(){ c.clearRect(0, 0, innerWidth, innerHeight);}

    function draw_cos() {
        c.beginPath();
   
        c.moveTo(0, canvas.height / 2);
        for (let i = 0; i < canvas.width; i++) {
           c.lineTo(i, wave.y + Math.sin(i * wave.lenth + increment) * wave.amplitude * Math.sin(increment));
        }
        
        c.strokeStyle = 'RED';
        c.stroke(); 
       
    
    }
    function draw_sin() {
     c.beginPath();

    c.moveTo(0, canvas.height / 2);
    for (let i = 0; i < canvas.width; i++) {
        c.lineTo(i, wave.y + Math.cos(i * wave.lenth + increment) * wave.amplitude * Math.cos(increment));
    }
     c.strokeStyle = "blue";
    c.stroke(); 
    
    // increment += wave.frequency;
}
    function anime() {
        requestAnimationFrame(anime);
        increment += wave.frequency;
    clear();
    draw_sin();
    draw_cos();
    
        j += 1;
    console.log(j);
    }
   anime();






    


