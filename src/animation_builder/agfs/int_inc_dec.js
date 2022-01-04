import AnimationBase from "../../animation/AnimationBase.js";

export default function int_inc_dec (begin_data=0,final_data=100,increment=1) {
 let resp= {}; 
resp.animation_data = {
    increment: increment,
    begin_data: begin_data,
    final_data: final_data,
    current_data: begin_data
};   
resp.animate = (oldval= 0)=>{
    if (this.animation_data.current_data < this.animation_data.final_data){
        this.animation_data.current_data += this.animation_data.increment;
       return this.animation_data.current_data;
    }else {
        //-no call back just use flag
        this.completed = true;
        return oldval;
    }
};
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
let a = new AnimationBase();
a.animation_data = resp.animation_data;
a.id = "int_inc_dec";
a.name = "int_inc_dec";
a.agf_type = "int_inc_dec";
//--very important
a.__proto__.animate = resp.animate;
return a;
}
