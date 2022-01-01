import Framework from "./framework/framework.js";

let framework = new Framework();
framework.generate_batches();
console.log(framework);

let i = setInterval(()=>{
    // this.batches[this.running_batch].run();
    let tf = framework.batches[framework.running_batch].run();
    if (tf==true){framework.running_batch+=1;}
    framework.drawengine.draw_app();   
    // batch.check_completion();    

},100);