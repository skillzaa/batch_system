import IntInc from "../../animations/IntInc.js";
import BatchBase from "../../batch/BatchBase.js";

export default function walk_l(comp){
let animations = [];
let rt  = new IntInc();
        rt.component_target = "x";
        rt.begin_data = 300;
        rt.final_data = 800;
        rt.increment = 1;    
animations.push(rt);

let down  = new IntInc();
        down.component_target = "width";
        down.begin_data = 25;
        down.final_data = 100;
        down.increment = 1;    
animations.push(down);


let b = new BatchBase(animations);
b.comp = comp; /// importanto
return b;
}