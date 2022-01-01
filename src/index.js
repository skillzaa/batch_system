import Framework from "./framework/framework.js";

let framework = new Framework(batch_completed_callback);
framework.match_agfs_to_comps();
console.log(framework);
let current_batch = 0;

let i = setInterval(()=>{
    if (current_batch <= framework.batches.length){
    // update the batch
    framework.batches[current_batch].run();       
   // framework.drawengine.draw_app();   
    }else {
        clearInterval(i);
    }
    
// console.clear();
   let current_agfs = framework.batches[current_batch].agfs;  
   current_agfs.forEach( agf => {
        console.log(agf);
    });

   //-------------------------------------
},100);

function batch_completed_callback(){
    console.log("batch_completed");
    if (current_batch <= framework.batches.length){
        current_batch += 1;
    }else {
        clearInterval(i);   
        console.log("interval cleared");
    }     
}
