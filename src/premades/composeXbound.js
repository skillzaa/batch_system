import Component from "../components/Component.js";
import IntInc from "../animations/IntInc.js";
//every such fn shd have get_comp fn
export default function get_comp(wiz) {
    let component = new Component(wiz);
    //-------------------/
    let batch = component.new_batch(wiz);
    batch.start_frame = 0;
    // --ani one
    let ani_one = { begin: 0, final: 800, increment: 100, comp_target: "width" };
    let animation_one = batch.add_animation(ani_one);
    animation_one.animate = IntInc;
    //-------------------
    // --ani two
    let ani_two = { begin: 0, final: 800, increment: 100, comp_target: "height" };
    let animation_two = batch.add_animation(ani_two);
    animation_two.animate = IntInc;
    //-------------------
    //-------------------
    component.add_batch(batch);
    return component;
    //-------------------
} //get_comp
//---dont use add_animation its too complex may be
//---i have been able to use add_animation since now the batch just adds glbl data to animation and push it. Batch does not try to build animation - just use it
