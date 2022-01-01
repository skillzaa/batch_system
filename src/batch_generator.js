import AgfObject from "./afgobject.js";
import Batch from "./batch.js";
import {view_state} from "./app_jsons/view_state.js";

export default function generate_batch(batch_completed,items_data){
    let batch = new Batch(batch_completed);

    items_data.forEach(function(item){
    let afg  = new AgfObject(item.name);
    afg.target_data = item.target_data;
    afg.pointer_target = item.pointer_target;
    afg.pointer = view_state; //permanent no need to change
        
    batch.push(afg);
    });
    
    
    return batch;
}





 