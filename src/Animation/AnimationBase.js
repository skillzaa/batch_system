
export default class Animation{
constructor(basic_data=default_basic_data){
//-- this is for animation function later we just over ride the animation fn and add data to this.    
this.animation_data = {};
//=======================================    
//=======================================    
//--the name is not being used ????   
this.name = basic_data.name; 
//---when will i need this
this.id = basic_data.id; 
//--- if this is false the batch can complete even if this is not completed yet
this.necessary = basic_data.necessary;
//once this is true the agf is exhausted
this.completed = basic_data.completed;
//--if this was rust component_target should have been a enum.
this.component_target = basic_data.component_target;
}
// this is the simplest animate fn we need to fill more later
//---functions of this function
/**
 * alwasy return a number even when exhausted it just repeat one number when exhausted..??? or should it use exhaust 
 */
animate(oldval = 0){
if (oldval == 100){this.completed = true;} 
return oldval;
}
}
//===========class ends
export const default_basic_data = {
    name: "animation_object",
    id: "5tc&za@G!.,~",
    necessary: true,
    completed: false,
    component_target: "x"
};