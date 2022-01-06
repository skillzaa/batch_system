import IntInc from "../animations/IntInc.js";
import IntDec from "../animations/IntDec.js";
import Builder from "../builder/Builder.js";

//every such fn shd have get_comp fn
export default function get_comp(wiz){
let builder = new Builder(wiz);
//===============================
let x_left  = new IntInc(0, 200, 1, "x");
builder.add_batch(100, x_left);
//===============================
let y_down  = new IntInc(0, 200, 1, "y");
builder.add_batch(619, y_down);
//===============================
let x_right  = new IntDec(400, 0, 1, "x");
builder.add_batch(1020, x_right);
//===============================
let y_up  = new IntDec(400, 0, 1, "y");
builder.add_batch(1440, y_up);
//===============================
//-------------------
return builder.component;
//-------------------
}//get_comp