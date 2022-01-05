import Animation from "./Animation.js";

export default function exponential () {
    let a = new Animation();
    a.id = "exponential_animation";
    a.name = "exponential_animation";
    a.agf_type = "exponential";
    
//----------------------------------------------
let animate = (oldval = 0)=>{
    return parseInt(oldval * oldval);    
};
a.__proto__.animate = animate;
//////////////////////////////////////
//--very important
return a;
}
