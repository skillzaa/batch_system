


export default class Group {
constructor(starting_frame){
this.starting_frame = starting_frame;   
this.running_batch = 0; 
this.batches = [];

}
update_batch_number(){    
if (this.all_comp_batch_done() == true){
this.batch_number += 1;    
console.log("wiz increased interanl batch_number");
}else {
this.frame_counter++;
return false;
}    
}


}