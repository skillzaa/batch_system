import generate_batch from "../batch_generator.js";

let items_data = [
    {name:"afg_one",target_data:4,pointer_target:"aaa"},
    {name:"afg_two",target_data:8,pointer_target:"bbb"},
    {name:"afg_three",target_data:12,pointer_target:"ccc"}
    ];

export default function get_first_demo_batch(batch_completed){
    let batch = generate_batch(batch_completed,items_data);
    return batch;
}