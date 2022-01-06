import Wiz from "../wiz/Wiz.js";
import Component from "../components/Component.js";
import Batch from "../batch/Batch.js";
import IntInc from "../animations/IntInc.js";


export default class Builder {
constructor(){
this.wiz = new Wiz();
this.component = new Component();
this.batch = new Batch();
this.animation = new IntInc();
// let c = first_component();
// wiz.components.push(c);
    
}

get_wiz(){
    return this.wiz;
}

get_batch(){
    return this.batch;
}
get_component(){
    return this.component;
}
get_animation(){
this.animation.stage = this.wiz.app.stage; 
console.log("width",this.animation.stage.width);   
console.log("height",this.animation.stage.height);   
return this.animation;
}
// let animations = [];
// let right  = new IntInc(0, 300, 1, "x");
// animations.push(right);

// let down  = new IntInc(0, 300, 1, "y");
// animations.push(down);

// let b = new Batch(animations);
// b.comp = comp; /// importanto
// //====this is main game
// b.start_frame = 100;

// return b;



}//builder