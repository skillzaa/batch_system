import CompBase from "../../components/CompBase.js";
import first from "../sequences/first.js";
export default function first_component(){

    let c = new CompBase();
    let seq = first(c.comp); //give the pixi comp
    c.name = "first premade comp";
    c.sequences.push(seq);
    return c;

}