
export default class BatchBase{
constructor(animations={}){
this.animations = animations;
}
is_completed(){
let tf = true; 
for (let index = 0; index < this.agfs.length; index++) {
    const animation = this.animations[index];
    if (animation.completed == false){
        return false;
    }   
}   
return tf;        
}
//component is wiz component class and comp is pixi componenet inside it
update(comp){
    this.animations.forEach(animation =>{
        // thie is not required :agf.batch_number == batch_number &&
        if (animation.completed == false){
            //agf run just return tha value
            let u = animation.animate();
            //this is where mut happen 
            comp[animation.component_target] = u;
        }
    });
}
        
}
