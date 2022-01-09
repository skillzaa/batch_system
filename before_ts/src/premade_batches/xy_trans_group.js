import Component from "../components/Component.js";
import IntInc from "../animations/IntInc.js";
import gotox from "../pre_translate/gotox.js";
import Wiz from "../wiz/Wiz.js";

//every such fn shd have get_comp fn
export default function get_wiz(){
    let wiz = new Wiz();
let y = 0;    
for (let i = 0; i < 7 ; i++) {
   
    
    let component = new Component(wiz);
    component.comp.y = y;

    let batch = component.new_batch(wiz);
        batch.start_frame = 0;
        // --ani one
        let ani_one  = {begin : 0,final: 50,increment : 5, comp_target : "x"};
        let ani = batch.add_animation(ani_one);
        ///====== Uffffffffffffffff-------
        gotox(ani,"middle",true);
        ani.animate = IntInc;
        component.add_batch(batch);
        //===============================
        wiz.components.push(batch);
        y += 75;      
}
//===============================
//===============================
//===============================
//===============================
return wiz;
}//get_comp

