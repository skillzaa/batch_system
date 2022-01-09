import Xbounded from "../animations/Xbounded.js";
import Component from "../components/Component.js";
//every such fn shd have get_comp fn
export default function get_comp(wiz) {
    let component = new Component(wiz);
    let batch = component.new_batch();
    let ani01 = new Xbounded(0, 10);
    batch.add_animation(ani01);
    component.add_batch(batch);
    //-------------------
} //get_comp
