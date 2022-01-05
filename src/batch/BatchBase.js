import Consumable from "../consumable/Consumable.js";

export default class BatchBase extends Consumable {
constructor(animations={}){
super(); 
this.animations = animations;
this.comp = "";
}

check_if_consumed(){
let tf = this.check_if_all_animations_consumed();
if (tf == true){
    //---mark your self consumed--!!!!!!
    this.consume();
}
}
//--each animation can check its self but batch has to check the entire batch and then can itsself be consumed
check_if_all_animations_consumed(){
let tf = true; 
for (let index = 0; index < this.animations.length; index++) {
if (this.animations[index].completed == false){
        return false;
    }   
}   
return tf;        
}
//component is wiz component class and comp is pixi componenet inside it
update(){
    this.animations.forEach(animation =>{
        // thie is not required :agf.batch_number == batch_number &&
        if (animation.completed == false){
            //agf run just return tha value
            let u = animation.animate();
            //this is where mut happen 
            this.comp[animation.component_target] = u;
        }
    });
//---------------------   
this.check_if_consumed(); 
//---------------------    
}//--update ends
        
}
