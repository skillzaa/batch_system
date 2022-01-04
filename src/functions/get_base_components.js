import {initial_data } from "../wiz_builder/data/initial_data.js";

import BaseComp from "../objects/BaseComp.js";

export default function get_base_components(){
let components = [];
initial_data.components.forEach((component)=>{
    //------------------------------
    let r = new BaseComp(component);
    components.push(r);
    //------------------------------
}); 
return components;
}