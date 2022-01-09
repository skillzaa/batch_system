import Component from "../components/Component.js";
import IntInc from "../animations/IntInc.js";
import gotox from "../pre_translate/gotox.js";
//every such fn shd have get_comp fn
export default function get_comp(wiz){
let component = new Component(wiz);
//-------------------/
let batch = component.new_batch(wiz);
    batch.start_frame = 0;
    // --ani one
    let ani_one  = {begin : 0,final: 100,increment : 10, comp_target : "x"};
    let ani = batch.add_animation(ani_one);
    ///====== Uffffffffffffffff-------
    gotox(ani,"left",true);
    //-------------------
    
    //-------------------
    ani.animate = IntInc;



    //-------------------
component.add_batch(batch);
return component;
}//get_comp

