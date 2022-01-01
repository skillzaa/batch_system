
import { view_state } from "./app_jsons/view_state.js";
import DrawEngine from "./drawengine/drawengine.js";


let drawengine = new DrawEngine();

let rect = drawengine.rectangle(view_state.rect);
let rect_two = drawengine.rectangle(view_state.rect_two);
console.log("rect",rect);

import get_first_demo_batch from "./preset_batches/first_demo_batch.js";
import get_second_demo_batch from "./preset_batches/second_demo_batch.js";

let batch = get_first_demo_batch(batch_completed);
let batch_two = get_second_demo_batch(batch_completed);
let running_batch = 0;
let batches = [];
batches.push(batch);
batches.push(batch_two);

let drawloop = setInterval(()=>{
    
    batches[running_batch].run();
     rect.x = view_state.rect.x;
     rect.y = view_state.rect.y;
   drawengine.draw_app();   
    // batch.check_completion();    
},200);
 

function batch_completed(){
    // view_state.batch_one_status = "completed";
    running_batch += 1;
    if (running_batch >= batches.length){
        clearInterval(drawloop);
}
    // console.clear();
    // console.log("batch completed");
}