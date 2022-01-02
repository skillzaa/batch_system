import {initial_data } from "../data/initial_data.js";
import AgfObject from "./agfobject.js";
export default function get_agfs(){
let agfs = [];    
initial_data.agfs.forEach((agf_data)=>{
    let a = new AgfObject(agf_data);
    agfs.push(a);
});
return agfs;
}
    