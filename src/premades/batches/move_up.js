import IntDec from "../../animations/IntDec.js";
import BatchBase from "../../batch/BatchBase.js";

export default function move_up(comp){
let animations = [];
let left  = new IntDec(300, 0, 1, "x");
animations.push(left);

 let up = new IntDec(300, 0, 1, "y");
 animations.push(up);


let b = new BatchBase(animations);
b.comp = comp; /// importanto
b.start_frame = 510; //it shd be 310 but lets pause it for a while

return b;
}