import Framework from "./framework/framework.js";

let framework = new Framework();
// framework.generate_batches();
console.log(framework);

let i = setInterval(()=>{
    if (framework.running_batch <= framework.batches.length){
        framework.batches[framework.running_batch].run();

        framework.drawengine.draw_app();   

    }
    
},150);