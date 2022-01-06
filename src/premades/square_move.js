import Component from "../components/Component.js";
import IntInc from "../animations/IntInc.js";
import Batch from "../batch/Batch.js";
import IntDec from "../animations/IntDec.js";
import Wiz from "../wiz/Wiz.js";

//every such fn shd have get_comp fn
export default function get_comp(){

let c = new Component();
c.name = "first premade comp";
//===============================
let batch_left = new Batch();
batch_left.start_frame = 100;
batch_left.comp = c.comp;
let x_left  = new IntInc(0, 400, 1, "x");
batch_left.animations.push(x_left);
c.batches.push(batch_left);
//===============================
//===============================
let batch_down = new Batch();
batch_down.start_frame = 610;
batch_down.comp = c.comp;
let y_down  = new IntInc(0, 400, 1, "y");
batch_down.animations.push(y_down);
c.batches.push(batch_down);
//===============================
//===============================
let batch_right = new Batch();
batch_right.start_frame = 1020;
batch_right.comp = c.comp;
let x_right  = new IntDec(400, 0, 1, "x");
batch_right.animations.push(x_right);
c.batches.push(batch_right);
//===============================
//===============================
let batch_up = new Batch();
batch_up.start_frame = 1440;
batch_up.comp = c.comp;
let y_up  = new IntDec(400, 0, 1, "y");
batch_up.animations.push(y_up);
c.batches.push(batch_up);
//===============================





//-------------------
return c;
//-------------------
}//get_comp