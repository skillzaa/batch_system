import Framework from "./framework/framework.js";

let framework = new Framework();
framework.match_agfs_to_comps();
console.log(framework);

let i = setInterval(()=>{
    if (framework.running_batch <= framework.batches.length){
    // update the batch
    framework.batches[framework.running_batch].run();       
    framework.drawengine.draw_app();   
    }
    //    console.clear();
   //-------------------------------------
//    console.clear();
   framework.batches.forEach( batch => {
    batch.agfs.forEach(agf =>{
        console.dir(agf);
    });

   });
   //-------------------------------------
},150);
