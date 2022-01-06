import Component from "../components/Component.js";
import Batch from "../batch/Batch.js";
import IntInc from "../animations/IntInc.js";
import Wiz from "../wiz/Wiz.js";

export default class Builder {
constructor(wiz){
this.wiz = wiz;    
this.component = new Component();
    
}
add_batch(start_frame,animation)
{
//------------Animation
animation.glbl.stage = this.wiz.app.stage;    
animation.glbl.renderer = this.wiz.app.renderer; 
animation.glbl.comp = this.component.comp; //same mistake 
// console.log("renderer-width",this.wiz.app.renderer.width);
// console.log("renderer-height",this.wiz.app.renderer.height);

//------------Creating Batch    
let batch = new Batch();
batch.start_frame = start_frame;
batch.comp = this.component.comp; //samemistake again
batch.animations.push(animation);
this.component.batches.push(batch);
return this.component;
}

}//builder