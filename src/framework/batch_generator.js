import AgfObject from "./afgobject.js";
import Batch from "./batch.js";
import { view_state } from "../app_jsons/view_state.js";
export default function generate_batches(batch_completed){
    let batches = [];
    let batches_data = view_state.batches;

    batches_data.forEach((batch)=>{
        //------------------------------
        let items_data = batch.items_data;
        let b = generate_batch(batch_completed,items_data);
        batches.push(b);
        //------------------------------
    });
return batches;    
} 




function generate_batch(batch_completed,items_data){
    let batch = new Batch(batch_completed);

    items_data.forEach((item)=>{
    let afg  = new AgfObject(item);
    // afg.target_data = item.target_data;
    // afg.pointer_target = item.pointer_target;
    // afg.pointer = item.pointer; 
        
    batch.push(afg);
    });
    
    
    return batch;
}





 