import {premade_first} from "../premade/premade_comp.js";
import rectangle from "../components/rectangle.js";
import BaseComp from "./basecomp/BaseComp.js";

export default function componentFactory(){
    let comp_data = premade_first.comp;
    let comp = rectangle(comp_data);
    let b = new BaseComp("jj");
    b.comp = comp;
    return b;
}