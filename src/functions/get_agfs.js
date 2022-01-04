import {initial_data } from "../wiz_builder/data/initial_data.js";
import AgfObject from "./agfobject.js";
import translate_agf_data from "./translate_agf_data.js";
export default function get_agfs(){
let agfs = [];    
initial_data.agfs.forEach((agf_data)=>{
    //=== Translation Plug
    let translated = translate_agf_data(agf_data);
    let a = new AgfObject(translated);
    agfs.push(a);
});
return agfs;
}
    