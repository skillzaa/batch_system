import Component from "../../components/Component.js";
import move_down from "../batches/move_down.js";
import move_up from "../batches/move_up.js";

export default function first_component(){

    let c = new Component();
    let md = move_down(c.comp); //give the pixi comp
    let mu = move_up(c.comp); //give the pixi comp
    c.name = "first premade comp";
    c.batches.push(md);
    c.batches.push(mu);
    return c;

}