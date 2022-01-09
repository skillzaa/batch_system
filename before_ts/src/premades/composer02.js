import IntInc from "../animations/IntInc.js";
import IntDec from "../animations/IntDec.js";
import Component from "../components/Component.js";

//every such fn shd have get_comp fn
export default function get_comp(wiz){
let component = new Component(wiz);

let batch = component.new_batch();
let ani01  = new IntInc(0, 100, 1, "x");
let ani02  = new IntInc(0, 100, 1, "y");
batch.add_animation(ani01);
batch.add_animation(ani02);
component.add_batch(batch);

let batch02 = component.new_batch();
batch02.start_frame = 100;
let ani03  = new IntInc(100, 400, 32, "width");
let ani04  = new IntInc(25, 100, 8, "height");
batch02.add_animation(ani03);
batch02.add_animation(ani04);
component.add_batch(batch02);

//-------------------
return component;
//-------------------
}//get_comp

//---dont use add_animation its too complex may be
//---i have been able to use add_animation since now the batch just adds glbl data to animation and push it. Batch does not try to build animation - just use it
