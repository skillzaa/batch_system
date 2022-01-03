
export const initial_data = {
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
agfs : [
    {
        name:"move_rect_one_x",
        batch_number:1,
        begin_data:0,
        final_data:80,
        increment:1,
        necessary: true,
        component_target:"x",
        component_name: "rect_one"
    },
    {
        name:"rect_one_width",
        batch_number:1,
        begin_data:100,
        final_data:100,
        increment:1,
        necessary : true,
        component_target:"height",
        component_name : "rect_one"
    },
    {
        name:"move_rect_two_x",
        batch_number:1,
        begin_data:0,
        final_data:80,
        increment:1,
        necessary : true,
        component_target:"x",
        component_name : "rect_two"
    },    
    {
        name:"test_01",
        batch_number:2,
        begin_data:20,
        final_data:50,
        increment:1,
        necessary : true,
        component_target:"y",
        component_name : "rect_two"
    }    
]

}