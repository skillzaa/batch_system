import int_inc_dec from "../animations/int_inc_dec.js";
import BatchBase from "../../batch/BatchBase.js";
// import ff from "../../animation/AnimationBase.js"

export default function walk_rt_down(){
let animations = [];
let rt  = int_inc_dec({},
    {
        begin_data: 0,
        final_data: 80,
        increment: 1
    });
    
animations.push(rt);
let rt  = int_inc_dec({},
    {
        begin_data: 0,
        final_data: 80,
        increment: 1
    });
animations.push(rt);

let b = new BatchBase(a);
return b;
}