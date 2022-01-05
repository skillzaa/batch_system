import IntInc from "../../animations/IntInc.js";
import BatchBase from "../../batch/BatchBase.js";

export default function walk_l(comp){
let animations = [];
let rt  = new IntInc();
        rt.component_target = "x";
        rt.begin_data = 0;
        rt.final_data = 300;
        rt.increment = 1;    
animations.push(rt);

let down  = new IntInc();
        down.component_target = "y";
        down.begin_data = 0;
        down.final_data = 300;
        down.increment = 1;    
animations.push(down);

let b = new BatchBase(animations);
b.comp = comp; /// importanto
return b;
}