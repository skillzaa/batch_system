import AgfObject from "./afgobject.js";
import Batch from "./batch.js";
import {view_state} from "./app_jsons/view_state.js";
console.log("modules loaded...");

let batch = new Batch(batch_completed);

let afg_one  = new AgfObject("afg_one");
afg_one.target_data = 4;
afg_one.pointer = view_state;
afg_one.pointer_target = "aaa";

let afg_two  = new AgfObject("afg_two");
afg_two.target_data = 8;
afg_two.pointer = view_state;
afg_two.pointer_target = "bbb";


let afg_three  = new AgfObject("afg_three");
afg_three.target_data = 12;
afg_three.pointer = view_state;
afg_three.pointer_target = "ccc";

batch.push(afg_one);
batch.push(afg_two);
batch.push(afg_three);

let interval = setInterval(()=>{
    batch.run(); 
    draw_app_json();   
    // batch.check_completion();    
},200);

function batch_completed(){
    clearInterval(interval);
    console.clear();
    console.log("batch completed");
}

function draw_app_json(){
   // console.clear();
  console.log("view_state",view_state);  
}

