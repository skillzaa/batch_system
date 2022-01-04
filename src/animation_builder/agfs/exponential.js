import AnimationBase from "../../animation/AnimationBase.js";

export default function exponential () {
 let resp= {}; 
resp.animation_data = {}
     
resp.animate = (oldval = 0)=>{
    return parseInt(oldval * oldval);    
};
//----------------------------------------------
let a = new AnimationBase();
a.animation_data = resp.animation_data;
a.id = "exponential_animation";
a.name = "exponential_animation";
a.agf_type = "exponential";
//--very important
a.__proto__.animate = resp.animate;
return a;
}
