import IntDec from "../../animations/IntDec.js";
import Batch from "../../batch/Batch.js";

export default function move_up(comp){
let animations = [];
let left  = new IntDec(300, 0, 1, "x");
animations.push(left);

 let up = new IntDec(300, 0, 1, "y");
 animations.push(up);


let b = new Batch(animations);
b.comp = comp; /// importanto
b.start_frame = 600; //it shd be 400 but lets pause it for a while

return b;
}