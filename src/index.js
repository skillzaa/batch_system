import {view_state} from "./app_jsons/view_state.js";
console.log("modules loaded...");
// just keep them here for now
import AgfObject from "./afgobject.js";
import Batch from "./batch.js";
//...
import get_first_demo_batch from "./preset_batches/first_demo_batch.js";
import get_second_demo_batch from "./preset_batches/second_demo_batch.js";

let batch = get_first_demo_batch(batch_completed);
let batch_two = get_second_demo_batch(batch_completed);

let drawloop = setInterval(()=>{
    batch.run(); 
    batch_two.run(); 
    draw_app();   
    // batch.check_completion();    
},200);

function draw_app(){
        console.clear();
        console.dir(JSON.stringify(view_state));
 }
 

function batch_completed(){
    view_state.batch_one_status = "completed";
   // clearInterval(drawloop);
//    console.clear();
//    console.log("batch completed");
}