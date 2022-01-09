import IntInc from "../../animations/IntInc.js";
import gotox from "../../pre_translate/gotox.js";
//every such fn shd have get_comp fn
export default function flyin_bullet_point(wiz, init_data = {}) {
    // component.
    let component = wiz.add_component();
    let y = init_data.y || 20;
    component.comp.y = component.xy2screen.y(y);
    component.comp.width = init_data.width || 500;
    component.comp.height = init_data.height || 120;
    component.title_text = init_data.title_text || "Your Text";
    //=================API======
    let start_frame = init_data.start_frame || 0;
    let begin = init_data.begin || 0;
    let final = init_data.final || 50;
    let increment = init_data.increment || 4;
    let align = init_data.align || "middle";
    //==========================
    // component.comp.;
    let batch = component.add_batch();
    batch.start_frame = start_frame;
    // --ani one
    let ani_one = { begin: begin, final: final, increment: increment, comp_target: "x" };
    let ani = batch.add_animation(ani_one);
    // ani.
    ///====== Uffffffffffffffff-------
    gotox(ani, align, true);
    ani.animate = IntInc;
    //===============================
    wiz.components.push(component);
    //--nothing to return just add batch
} //get_comp
