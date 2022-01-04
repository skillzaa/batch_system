import {demo_batch} from "./demo_batch.js";
import BatchBase from "../../batch/BatchBase.js";

export default function get_batch(batch_name){
switch (batch_name) {
    case "demo_batch":
     let b = new BatchBase(demo_batch.animations);
     return b;   
        break;

    default:
        break;
}



}