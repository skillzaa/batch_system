import IntInc from "../../animations/IntInc.js";
import Batch from "../../batch/Batch.js";

export default function move_down(comp){
let animations = [];
let right  = new IntInc(0, 300, 1, "x");
animations.push(right);

let down  = new IntInc(0, 300, 1, "y");
animations.push(down);

let b = new Batch(animations);
b.comp = comp; /// importanto
//====this is main game
b.start_frame = 100;

return b;
}