import Batch from "../batch/BatchBase.js";
import rectangle from "../components/rectangle.js";

export default class BaseComp{
constructor(name){
// this.init_data = comp_init_data;
this.name = name;    
this.comp = rectangle({x:0,y:0,width:100,height:25,color: 0xffff00 });
this.sequences = [];
//--from inital_data
// this.agfs = get_class_agfs(this.name);
}
// update(batch_number){
// try {
// // batches start at 1 and arrays at zero 
// let b = this.batches[batch_number-1];    
// b.update(this.comp);      
// }catch (err) {
// console.log(err);
// return false;
// }    
// }

// is_batch_completed(batch_number){ 
//  try{
// return this.batches[batch_number-1].is_completed();  
//  }catch (err){
//      console.log(err);
//      return false;
//  }   
// }    
//------------------------    
}//base comp
     