import Component from "../../components/Component.js";
import IntInc from "../../animations/IntInc.js";
import gotox from "../../pre_translate/gotox.js";
import gotoy from "../../pre_translate/gotoy.js";
import Wiz from "../../wiz/Wiz.js";

//every such fn shd have get_comp fn
export default function flyin_bullet_point(wiz,init_data = {}) {
//=================API======
let title_text = init_data.title_text || "Your Text";    
let width = init_data.width || 500;
let height = init_data.height || 120;
let begin = init_data.begin || 0;
let final = init_data.final || 50;
let increment = init_data.increment || 4;
let align = init_data.align || "middle";

//==========================

let component = wiz.add_component({title_text : title_text});
// component.
component.comp.y = component.xy2screen.y(init_data.y);
component.comp.width = width;
component.comp.height = height;
// component.comp.;
    let batch = component.add_batch();
        batch.start_frame = 0;
        // --ani one
        let ani_one  = {begin: begin, final: final,increment : increment, comp_target : "x"};
        let ani = batch.add_animation(ani_one);
        ///====== Uffffffffffffffff-------
        gotox(ani, align ,true);
        ani.animate = IntInc;
        //===============================
        wiz.components.push(batch);

        //===============================
return wiz;
}//get_comp

