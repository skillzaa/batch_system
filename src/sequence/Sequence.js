import Consumable from "../consumable/Consumable.js";


export default class Sequence extends Consumable {
constructor(){
super(); 
//--every sequence has to start at a specific frame and can not start before that-- this is the start time of 
this.start_frame = 0;
//-- this is the stop time it is not used at the moment (i.e we let a seq run unless consumed) but if there is a need we can implement some code where a seq can not run after some frame -- it is like run from frame 5 onwards (approx upto 15) but definitely  not after 30 frame. we may also have to add remove_after_stop_frame. we can just consume it if the frame.frame_cur is over this stop_frame.   
this.stop_frame = 0;    
this.running_batch = 0; 
this.batches = [];

}
update(){
    this.batches[this.running_batch].update();
}
// update_batch_number(){    
// if (this.all_comp_batch_done() == true){
// this.batch_number += 1;    
// console.log("wiz increased interanl batch_number");
// }else {
// this.frame_counter++;
// return false;
// }    
// }


}