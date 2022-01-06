import IntInc from "../animations/IntInc.js";
import IntDec from "../animations/IntDec.js";
import Batch from "../components/Batch.js";
import Component from "../components/Component.js";

//every such fn shd have get_comp fn
export default function get_comp(wiz){
let component = new Component(wiz);
let batch = component.new_batch();
//---dont use add_animation its too complex may be
let ani  = new IntInc(0, 400, 1, "x");

batch.add_animation(ani);

component.add_batch(batch);

//-------------------
return component;
//-------------------
}//get_comp