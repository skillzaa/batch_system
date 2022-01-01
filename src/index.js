import Framework from "./framework/framework.js";

let framework = new Framework();
// framework.generate_batches();
console.log(framework);

let i = setInterval(()=>{
    if (framework.running_batch <= framework.batches.length){
    // update the batch
    framework.batches[framework.running_batch].run();
    // update the components
    update_components(framework.batches[framework.running_batch],framework.drawengine.components);;    
    framework.drawengine.draw_app();   

    }
    
},150);

function update_components(batch,components){
    components.forEach(comp => {
        let agfs = batch.agfs;
        agfs.forEach( agf =>{
            if (comp.name == agf.component_name){
                // comp[agf.component_target] = agf.current_data;
                comp.x = agf.current_data;
            }
        });
    });
}