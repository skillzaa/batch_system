
export const view_state = {
components : [
    {
        name:"rect_one",
        x:20,
        y:20,
        width:500,
        height:75,
        color:0xAA33BB
    },
    {
        name:"rect_two",
        x:0,
        y:0,
        width:300,
        height:50,
        color:0xff0000
    }
],
batches : [
    {
        name : "first_batch",
        items_data : [
                {
                    name:"move_rect_one_x",
                    begin_data:0,
                    final_data:500,
                    increment:10,
                    necessary : true,
                    component_target:"x",
                    component_name : "rect_one"
                },
                {
                    name:"move_rect_two_y",
                    begin_data:0,
                    final_data:500,
                    increment:10,
                    necessary : true,
                    component_target:"y",
                    component_name : "rect_two"
                }
        ]
    },
    {
        name : "second_batch",
        items_data : [
                {
                    name:"move_rect_one_y",
                    begin_data:0,
                    final_data:500,
                    increment:1,
                    necessary : true,
                    component_target:"y",
                    component_name : "rect_one"
                }
        ]}
]

}