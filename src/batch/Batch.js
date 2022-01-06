
export default class Batch {
constructor(start_frame=0){
//--we can push them later or give it as argument
this.animations = [];
this.comp = "";
//--every sequence has to start at a specific frame and can not start before that-- this is the start time of 
this.start_frame = start_frame;
//-- this is the stop time it is not used at the moment (i.e we let a seq run unless consumed) but if there is a need we can implement some code where a seq can not run after some frame -- it is like run from frame 5 onwards (approx upto 15) but definitely  not after 30 frame. we may also have to add remove_after_stop_frame. we can just consume it if the frame.frame_cur is over this stop_frame.   
this.stop_frame = 0;    

}
update(){
    this.animations.forEach(animation =>{
            let u = animation.animate();
            //this is where mut happen 
            this.comp[animation.component_target] = u;
        // }
    });
}//--update ends        
}
