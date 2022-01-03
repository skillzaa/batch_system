import {initial_data } from "../../data/initial_data.js";
import AgfObject from "../../agf_factory/agfobject.js";
import translate_agf_data from "./translate_agf_data.js";
export default function get_class_agfs(class_name){
let agfs = [];    
initial_data.agfs.forEach((agf_data)=>{
    //=== Translation Plug
    if (class_name == agf_data.component_name){
    let translated = translate_agf_data(agf_data);
    let a = new AgfObject(translated);
    agfs.push(a);
    }
});
return agfs;
}
    