import IntInc from "../animations/IntInc.js";
import IntDec from "../animations/IntDec.js";
import Xbounded from "../animations/Xbounded.js";
import Builder from "../builder/Builder.js";

//every such fn shd have get_comp fn
export default function get_comp(wiz){
let builder = new Builder(wiz);
//===============================
let x_left  = new Xbounded(0,20);
builder.add_batch(100, x_left);
//===============================
//-------------------
return builder.component;
//-------------------
}//get_comp