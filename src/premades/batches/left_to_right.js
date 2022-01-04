import int_inc_dec from "../animations/int_inc_dec.js";
import BatchBase from "../../batch/BatchBase.js";

export default function left_to_right(){
let a  = int_inc_dec({},
{
    begin_data: 0,
    final_data: 80,
    increment: 1
});
let b = new BatchBase(a);
return b;
}