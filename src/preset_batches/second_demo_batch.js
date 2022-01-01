import generate_batch from "../batch_generator.js";
import {view_state} from "../app_jsons/view_state.js";

let items_data = [
    {
        name:"rect y",target_data:100,pointer_target:"y",
        pointer : view_state.rect
    }
    ];

export default function get_second_demo_batch(batch_completed){
    let batch = generate_batch(batch_completed,items_data);
    return batch;
}