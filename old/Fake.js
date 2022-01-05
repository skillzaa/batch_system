import AnimationAbstract from "./AnimationAbstract.js";
export default class Fake extends AnimationAbstract{
constructor(){
    super();
    this.agf_type = "fake";
    this.id = "5rdeswa";
    this.name = "fake";
    //--same as parent--no need for this unless required
    // this.necessary = true;
    // this.completed = false;
    // this.component_target = "x";
}    
animate(oldval = 0){
    if (oldval == 100){this.completed = true;} 
    return oldval;
}    

}
