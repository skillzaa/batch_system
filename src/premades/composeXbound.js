import GotoX from "../animations/GotoXInc.js";
import Component from "../components/Component.js";

//every such fn shd have get_comp fn
export default function get_comp(wiz){
let component = new Component(wiz);

let batch = component.new_batch(wiz);

let ani01  = {begin : 0,final :5000,increment : 5,type : "GotoXInc"};
batch.add_animation(ani01);
component.add_batch(batch);

//-------------------
return component;
//-------------------
}//get_comp

//---dont use add_animation its too complex may be
//---i have been able to use add_animation since now the batch just adds glbl data to animation and push it. Batch does not try to build animation - just use it
