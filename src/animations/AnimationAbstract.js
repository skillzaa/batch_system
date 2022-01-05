import Consumable from "../consumable/Consumable.js";

export default class AnimationAbstract extends Consumable {
constructor(){
super();     
//---THIS BELONG TO THIS OBJECT
this.agf_type = "animation_abstract";
//=======================================    
//=======================================    
//--the name is not being used ????   
this.name = "abstract_class";
//---when will i need this??
this.id = "5tc&za@G!.,~";
//--- if this is false the batch CAN complete even if this is not completed yet (default=true)
this.necessary = true;
//once this is true the agf is exhausted
this.completed = false;
//--if this was rust component_target should have been a enum.=====MUST SET ====
this.component_target = "x";
// this.comp_pointer = "";
}

}
