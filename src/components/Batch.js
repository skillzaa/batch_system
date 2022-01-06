//This class will only be use by component via create_batch
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
add_animation(animation){
//---------------Animation-
//--Just get the animation add glbl data to it and dont bother about what it has inside. Just use it dont manage it.
animation.glbl.stage = this.wiz.app.stage;    
animation.glbl.renderer = this.wiz.app.renderer; 
//same old mistake-- component.comp
animation.glbl.comp = this.comp; 
this.animations.push(animation); 
// console.log("renderer-width",this.wiz.app.renderer.width);
// console.log("renderer-height",this.wiz.app.renderer.height);

}
update(){
    this.animations.forEach(animation =>{
            let u = animation.animate();
            //this is where mut happen 
            this.comp[animation.component_target] = u;
    });
}//--update ends
}
