import rectangle from "./rectangle.js";
import Batch from "./Batch.js";

export default class Component {
constructor(wiz){
// super();    
this.wiz = wiz;
this.name = "base_component";    
this.comp = rectangle({x:0,y:0,width:100,height:25,color: 0xffff00 });
this.batches = [];
//--from inital_data
// this.agfs = get_class_agfs(this.name);
}
new_batch(){
let batch = new Batch(this.wiz,this.comp);
return batch;    
}
add_batch(batch){
//------------Creating Batch    
// batch.start_frame = start_frame;
 //Now we are in component so no more component.comp that  is an anit pattern. 
batch.comp = this.comp;
this.batches.push(batch);
}
// --IMPORTANT--WITH IN ONE BATCH YOU CAN NOT HAVE 2 ANIMATION ON SAME VALUE E.G 2 ANIMATIONS FOR X OR Y
update(frame){
    this.batches.forEach(batch =>{
        if (batch.start_frame < frame){
            batch.update();
        }
    });
}

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
     