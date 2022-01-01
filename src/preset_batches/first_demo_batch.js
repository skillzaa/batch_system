import generate_batch from "../batch_generator.js";
import {view_state} from "../app_jsons/view_state.js";

let items_data = [
    {
        name:"rect 1",target_data:100,pointer_target:"x",
        pointer : view_state.rect
    }
    // {name:"afg_two",target_data:8,pointer_target:"bbb"},
    // {name:"afg_three",target_data:12,pointer_target:"ccc"}
    ];

export default function get_first_demo_batch(batch_completed){
    let batch = generate_batch(batch_completed,items_data);
    return batch;
}