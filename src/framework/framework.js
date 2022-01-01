
import DrawEngine from "../drawengine/drawengine.js";
import generate_batches from "./batch_generator.js";

export default class Framework {
constructor(){
this.drawengine = new DrawEngine();
this.drawengine.generate_conponents();

this.batches;

this.running_batch = 0;
//this.gameloop = gameloop;
}
generate_batches(batch_completed){
    this.batches = generate_batches(this.batch_completed); 
}

batch_completed(){
    this.running_batch += 1;
    if (this.running_batch >= this.batches.length){
        // clearInterval(drawloop);
}
}
}
