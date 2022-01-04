import Wiz from "../../wiz/Wiz.js";
import first_component from "../components/first_component.js"

export default function first_wiz(){

let wiz = new Wiz();
let c = first_component();
wiz.components.push(c);
return wiz;

}