
export default class BatchBase {
constructor(animations={}){
//--we can bush them later or give it as argument
this.animations = animations;
this.comp = "";
//--every sequence has to start at a specific frame and can not start before that-- this is the start time of 
this.start_frame = 0;
//-- this is the stop time it is not used at the moment (i.e we let a seq run unless consumed) but if there is a need we can implement some code where a seq can not run after some frame -- it is like run from frame 5 onwards (approx upto 15) but definitely  not after 30 frame. we may also have to add remove_after_stop_frame. we can just consume it if the frame.frame_cur is over this stop_frame.   
this.stop_frame = 0;    

}

// check_if_consumed(){
// let tf = this.check_if_all_animations_consumed();
// if (tf == true){
//     //---mark your self consumed--!!!!!!
//     this.consume();
// }
// }
//--each animation can check its self but batch has to check the entire batch and then can itsself be consumed
// check_if_all_animations_consumed(){
// let tf = true; 
// for (let index = 0; index < this.animations.length; index++) {
// if (this.animations[index].completed == false){
//         return false;
//     }   
// }   
// return tf;        
// }
//component is wiz component class and comp is pixi componenet inside it
update(){
    this.animations.forEach(animation =>{
        // thie is not required :agf.batch_number == batch_number &&
        //--no need for checking completed
        // if (animation.completed == false){
            //agf run just return tha value
            let u = animation.animate();
            //this is where mut happen 
            this.comp[animation.component_target] = u;
        // }
    });
//---------------------   
// this.check_if_consumed(); 
//---------------------    
}//--update ends
        
}
