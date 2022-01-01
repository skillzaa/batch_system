import AgfObject from "./afgobject.js";
import Batch from "./batch.js";

export default function generate_batch(batch_completed,items_data){
    let batch = new Batch(batch_completed);

    items_data.forEach(function(item){
    let afg  = new AgfObject(item.name);
    afg.target_data = item.target_data;
    afg.pointer_target = item.pointer_target;
    afg.pointer = item.pointer; 
        
    batch.push(afg);
    });
    
    
    return batch;
}





 