import AniAbs from "../animations/AniAbs.js";
export default class Batch {
    constructor(init_data) {
        //--this for global use
        this.renderer = init_data.renderer;
        this.stage = init_data.stage;
        this.comp = init_data.comp;
        //--we can push them later or give it as argument
        this.animations = [];
        //--every sequence has to start at a specific frame and can not start before that-- this is the start time of -- set it once batch is created --MUST
        this.start_frame = 0;
        //-- this is the stop time it is not used at the moment (i.e we let a seq run unless consumed) but if there is a need we can implement some code where a seq can not run after some frame -- it is like run from frame 5 onwards (approx upto 15) but definitely  not after 30 frame. we may also have to add remove_after_stop_frame. we can just consume it if the frame.frame_cur is over this stop_frame.   
        this.stop_frame = 0;
    }
    //-- Step 01:: create a brand new animation Base object add stage,renderer and comp into it
    //-- Step 02:: add this animation obj to the animations array and then send it back so that user can add into it.
    add_animation(ani_data = {}) {
        ani_data.stage = this.stage;
        ani_data.renderer = this.renderer;
        ani_data.comp = this.comp;
        let animation = new AniAbs(ani_data);
        this.animations.push(animation);
        return animation;
    }
    update() {
        this.animations.forEach(animation => {
            let u = animation.animate();
            //this is where mut happen 
            this.comp[animation.comp_target] = u;
        });
    } //--update ends
}
