import AnimationBase from "../../animation/AnimationBasexx.js";
//begin_data=0,final_data=100,increment=1
export default function int_inc_dec (basic_data,animation_data) {
 let resp= {}; 
resp.animation_data = {};
try{
resp.animation_data.increment = 
animation_data.increment;
resp.animation_data.begin_data = 
  animation_data.begin_data;
resp.animation_data.final_data =
   animation_data.final_data;
resp.animation_data.current_data =
 animation_data.begin_data;   
} catch (e){
    console.error(e);
}
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
