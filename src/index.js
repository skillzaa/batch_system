import AgfObject from "./afgobject.js";
import Batch from "./batch.js";
console.log("modules loaded...");
let batch = new Batch();

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
    
    if (batch.completed == true){
        console.clear();
        // clearInterval(interval);
        ci();
        console.log("batch completed");
    }else {
        batch.run();
    }
},200);
function ci(){
    clearInterval(interval);
}



