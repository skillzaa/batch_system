import generate_batch from "../batch_generator.js";

let items_data = [
    {name:"afg_one",target_data:15,pointer_target:"ddd"},
    {name:"afg_two",target_data:25,pointer_target:"eee"},
    {name:"afg_three",target_data:35,pointer_target:"fff"}
    ];

export default function get_second_demo_batch(batch_completed){
    let batch = generate_batch(batch_completed,items_data);
    return batch;
}