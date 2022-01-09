import AniAbs from "./animations/AniAbs.js";
export default class Batch {
    constructor(init_data) {
        //--this for global use
        this.renderer = init_data.renderer;
        // this.stage = init_data.stage;
        this.comp = init_data.comp;
        //--we can push them later or give it as argument
        this.animations = [];
        this.start_frame = 0;
        this.stop_frame = 0;
    }
    //-- Step 01:: create a brand new animation Base object add stage,renderer and comp into it
    //-- Step 02:: add this animation obj to the animations array and then send it back so that user can add into it.
    add_animation() {
        let ani_data = {};
        // ani_data.stage = this.stage;    
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
