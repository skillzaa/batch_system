import Component from "../components/Component.js";
import IntInc from "../animations/IntInc.js";
//every such fn shd have get_comp fn
export default function get_comp(wiz){
let component = new Component(wiz);
//-------------------/
let batch = component.new_batch(wiz);
    batch.start_frame = 0;
    // batch.name = String(final);
    let ani_data  = {begin : 0,final: 800,increment : 1 , comp_target : "y"};
    let animation = batch.add_animation(ani_data);
    animation.animate = IntInc;
    component.add_batch(batch);
    //-------------------
    
//-------------------
return component;
//-------------------
}//get_comp

//---dont use add_animation its too complex may be
//---i have been able to use add_animation since now the batch just adds glbl data to animation and push it. Batch does not try to build animation - just use it
