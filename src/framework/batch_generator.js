import AgfObject from "./agfobject.js";
import Batch from "./batch.js";


export default function generate_batches(view_state,batch_completed){
    let batches = [];
    let batches_data = view_state.batches;

    batches_data.forEach((batch)=>{
        //------------------------------
        let items_data = batch.items_data;
        let b = generate_batch(view_state,batch_completed,items_data);
        batches.push(b);
        //------------------------------
    });
return batches;    
} 




function generate_batch(view_state,batch_completed,items_data){
    let batch = new Batch(view_state,batch_completed);

    items_data.forEach((item)=>{
    let afg  = new AgfObject(item);
    // afg.target_data = item.target_data;
    // afg.pointer_target = item.pointer_target;
    // afg.pointer = item.pointer; 
        
    batch.push(afg);
    });
    
    
    return batch;
}





 