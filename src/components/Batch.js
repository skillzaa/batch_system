//This class will only be use by component via create_batch
import AnimationGenerator from "../animations/AnimationGenerator.js";

export default class Batch {
constructor(wiz,comp){
this.wiz = wiz;    
this.comp = comp;
//--we can push them later or give it as argument
this.animations = [];
//--every sequence has to start at a specific frame and can not start before that-- this is the start time of -- set it once batch is created --MUST
this.start_frame = 0;
//-- this is the stop time it is not used at the moment (i.e we let a seq run unless consumed) but if there is a need we can implement some code where a seq can not run after some frame -- it is like run from frame 5 onwards (approx upto 15) but definitely  not after 30 frame. we may also have to add remove_after_stop_frame. we can just consume it if the frame.frame_cur is over this stop_frame.   
this.stop_frame = 0;    

}
add_animation(ani_data){
ani_data.stage = this.wiz.app.stage;    
ani_data.renderer = this.wiz.app.renderer; 
//same old mistake-- component.comp
ani_data.comp = this.comp;
//--Create the animation object and add glbl to it.
let ag = new AnimationGenerator(ani_data);
let animation = ag.select_animation(ani_data); 
this.animations.push(animation); 
}
update(){
    this.animations.forEach(animation =>{
            let u = animation.animate();
            //this is where mut happen 
            this.comp[animation.component_target] = u;
    });
}//--update ends
}
