import IntInc from "../engine/animations/IntInc.js";
import gotox from "../pre_translate/gotox.js";
//every such fn shd have get_comp fn
export default function flyin_bullet_point(wiz, init_data = {}) {
    // component.
    let component = wiz.add_component();
    let y = init_data.y || 20;
    component.comp.y = component.xy2screen.y(y);
    component.comp.width = init_data.width || 500;
    component.comp.height = init_data.height || 120;
    component.comp.title_text = init_data.title_text || "Your Text";
    // component.comp.children[1]._texttitle_text  = init_data.title_text || "Your Text";    
    // component.comp.;
    let batch = component.add_batch();
    batch.start_frame = init_data.start_frame || 0;
    // --ani one
    let ani = batch.add_animation();
    ani.begin = init_data.begin || 0;
    ani.final = init_data.final || 50;
    ///====== Uffffffffffffffff-------
    let align = init_data.align || "middle";
    gotox(ani, align, true);
    ani.animate = IntInc;
    //===============================
    // wiz.add
    //--nothing to return just add batch
} //get_comp
