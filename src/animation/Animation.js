export default class Animation{
constructor(){
//-- this is for animation function later we just over ride the animation fn and add data to this.    
this.animation_data = {};
//---THIS BELONG TO THIS OBJECT
this.agf_type = "animation_base";
//=======================================    
//=======================================    
//--the name is not being used ????   
this.name = "animation_object";
//---when will i need this??
this.id = "5tc&za@G!.,~";
//--- if this is false the batch CAN complete even if this is not completed yet (default=true)
this.necessary = true;
//once this is true the agf is exhausted
this.completed = false;
//--if this was rust component_target should have been a enum.=====MUST SET ====
this.component_target = "x";
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
