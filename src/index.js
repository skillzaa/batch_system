import AgfObject from "./afgobject.js";
import Batch from "./batch.js";
console.log("modules loaded...");

let batch = new Batch(batch_completed);

let afg_one  = new AgfObject("afg_one");
afg_one.target_data = 20;
let afg_two  = new AgfObject("afg_two");
afg_two.target_data = 30;
let afg_three  = new AgfObject("afg_three");
afg_three.target_data = 40;

batch.push(afg_one);
batch.push(afg_two);
batch.push(afg_three);

let interval = setInterval(()=>{
batch.check_completion();    
batch.run();    
},200);

function batch_completed(){
    clearInterval(interval);
    console.log("batch completed");
}



