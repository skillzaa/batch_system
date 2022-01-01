import DrawEngine from "../drawengine/drawengine.js";
import generate_batches from "./batch_generator.js";
//--the only place where it is used
import {view_state} from "../app_jsons/view_state.js"

export default class Framework {
constructor(callback){
this.batch_completed_callback = callback;    
this.view_state = view_state; // now we dont use the file view_state rather this one in memory.    
this.drawengine = new DrawEngine();
this.drawengine.generate_components();

this.batches = generate_batches(this.view_state,this.drawengine.components,this.batch_completed_callback);
//this.match_agfs_to_comps();
this.running_batch = 0;
//this.gameloop = gameloop;
}
match_agfs_to_comps(){
this.drawengine.components.forEach(component => {
    this.batches.forEach(batch =>{
        batch.agfs.forEach(agf =>{
            if (agf.component_name == component.name){
                agf.comp_pointer = component.comp;
            }
        });
    });
});
}

}
