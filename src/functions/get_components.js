import {initial_data } from "../wiz_builder/data/initial_data.js";
import rectangle from "./components/rectangle.js";
export default function get_components(){
let components = [];
initial_data.components.forEach((component)=>{
    //------------------------------
    let r = {};
    r.name = component.name;
    r.comp = rectangle(component);
    components.push(r);
    //------------------------------
}); 
return components;
}