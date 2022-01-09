import IntInc from "../../engine/animations/IntInc.js";
import gotox from "../../pre_translate/gotox.js";
//every such fn shd have get_comp fn
export default function flyin_bullet_point(wiz, init_data = {}) {
    //=================API======
    let title_text = init_data.title_text || "Your Text";
    let start_frame = init_data.start_frame || 0;
    let width = init_data.width || 500;
    let height = init_data.height || 120;
    let begin = init_data.begin || 0;
    let final = init_data.final || 50;
    let increment = init_data.increment || 4;
    let align = init_data.align || "middle";
    let y = init_data.y || 20;
    //==========================
    let component = wiz.add_component({ title_text: title_text });
    // component.
    component.comp.y = component.xy2screen.y(init_data.y);
    // component.comp.y = 300;
    component.comp.width = width;
    component.comp.height = height;
    // component.comp.;
    let batch = component.add_batch();
    batch.start_frame = start_frame;
    // --ani one
    let ani_one = { begin: begin, final: final, increment: increment, comp_target: "x" };
    let ani = batch.add_animation(ani_one);
    ///====== Uffffffffffffffff-------
    gotox(ani, align, true);
    ani.animate = IntInc;
    //===============================
    wiz.components.push(component);
    //--nothing to return just add batch
} //get_comp
