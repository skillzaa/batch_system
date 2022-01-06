import Component from "../components/Component.js";
import IntInc from "../animations/IntInc.js";
import Batch from "../batch/Batch.js";
import IntDec from "../animations/IntDec.js";
import Wiz from "../wiz/Wiz.js";

//every such fn shd have get_comp fn
export default function get_comp(){

let c = new Component();
c.name = "first premade comp";

    let batch_down = new Batch();
    batch_down.start_frame = 100;
    batch_down.comp = c.comp;

    let x_down  = new IntInc(0, 300, 1, "x");
    let y_down  = new IntInc(0, 300, 1, "y");
    batch_down.animations.push(x_down);
    batch_down.animations.push(y_down);
    
    let batch_up = new Batch();
    batch_up.start_frame = 600;
    batch_up.comp = c.comp;
    let x_up  = new IntDec(300, 0, 1, "x");
    let y_up  = new IntDec(300, 0, 1, "y");
    batch_up.animations.push(x_up);
    batch_up.animations.push(y_up);
    
//----------------------------------
c.batches.push(batch_down);
c.batches.push(batch_up);
//-------------------
return c;
//-------------------
}//get_comp