import DrawEngine from "../drawengine/drawengine.js";
import generate_batches from "./batch_generator.js";
//--the only place where it is used
import {view_state} from "../app_jsons/view_state.js"

export default class Framework {
constructor(){
this.view_state = view_state; // now we dont use the file view_state rather this one in memory.    
this.drawengine = new DrawEngine(this.view_state);
this.drawengine.generate_conponents();

this.batches = generate_batches(this.view_state,this.batch_completed);;

this.running_batch = 0;
//this.gameloop = gameloop;
}
// generate_batches(batch_completed){
//     this.batches = generate_batches(this.batch_completed); 
// }

batch_completed(){
    this.running_batch += 1;
    if (this.running_batch >= this.batches.length){
        // clearInterval(drawloop);
}
}
}
