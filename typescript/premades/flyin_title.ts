import Component from "../components/Component.js";
import IntInc from "../animations/IntInc.js";
import gotox from "../pre_translate/gotox.js";
import Wiz from "../wiz/Wiz.js";

//every such fn shd have get_comp fn
export default function flyin_title(wiz:Wiz,init_data={}){
let title_text = init_data.title_text || "Your Text";  

    let component = wiz.add_component({title_text : title_text});
    // component.
    component.comp.y = 20;
    component.comp.width = 500;
    component.comp.height = 120;
    // component.comp.;
    let batch = component.add_batch();
        batch.start_frame = 0;
        // --ani one
        let ani_one  = {begin : 0,final: 50,increment : 4, comp_target : "x"};
        let ani = batch.add_animation(ani_one);
        ///====== Uffffffffffffffff-------
        gotox(ani,"middle",true);
        ani.animate = IntInc;
        //===============================
        wiz.components.push(batch);

        //===============================
return wiz;
}//get_comp

