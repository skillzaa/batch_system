import Consumable from "../consumable/Consumable.js";


export default class Sequence extends Consumable {
constructor(){
super(); 
//--every sequence has to start at a specific frame and can not start before that-- this is the start time of 
this.start_frame = 0;
//-- this is the stop time it is not used at the moment (i.e we let a seq run unless consumed) but if there is a need we can implement some code where a seq can not run after some frame -- it is like run from frame 5 onwards (approx upto 15) but definitely  not after 30 frame. we may also have to add remove_after_stop_frame. we can just consume it if the frame.frame_cur is over this stop_frame.   
this.stop_frame = 0;    
this.cur_batch = 0; 
this.batches = [];

}
update(){
    //---check self for consumption
    this.check_if_consumed
    this.update_batch_number();
    this.batches[this.cur_batch].update();
}
//--once again every batch has to be consumed for the parent to be consumed
//--- this is not being checked at comp level
check_if_consumed(){
let tf = check_if_all_batches_consumed();
if (tf == true){
    //---mark your self consumed--!!!!!!
    this.consume();
}
}
//--each animation can check its self but batch has to check the entire batch and then can itsself be consumed
check_if_all_batches_consumed(){
let tf = true; 
for (let index = 0; index < this.batches.length; index++) {
if (this.batches[index].isConsumed() == false){
        return false;
    }   
}   
return tf;        
}
update_batch_number(){    
let is_cur_batch_consumed = this.batches[this.cur_batch].isConsumed();
    if (is_cur_batch_consumed == true){
        this.cur_batch += 1;
    }
}


}