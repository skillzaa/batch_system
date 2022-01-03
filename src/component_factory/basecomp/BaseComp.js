import {default_base_init_data} from "./default_base_init_data.js";

import rectangle from "./rectangle.js";

import get_class_agfs from "./get_class_agfs.js";

export default class BaseComp{
constructor(comp_init_data=default_base_init_data){
this.init_data = comp_init_data;
this.name = comp_init_data.name;    
this.batch_number = 1;
this.total_batches = 2;
this.comp = rectangle(default_base_init_data);
//--from inital_data
this.agfs = get_class_agfs(this.name);
}
update(batch_number){
    this.agfs.forEach(agf =>{
        if (agf.batch_number == batch_number && agf.completed == false){
            let u = agf.run();
            this.comp[agf.component_target] = u;
        }
    });
}

is_batch_completed(){ //return true false ended
    let tf = this.are_batch_agfs_done();
    if (tf==true){
            if (this.batch_number >= this.total_batches){
            return "ended";
            }else {
                this.batch_number +=1;
            // console.log("increase the batch");
            return true;
            }
        }else {
            return false;
            //--
        }
    return false;    
}    
are_batch_agfs_done(){
let tf = true; 
for (let index = 0; index < this.agfs.length; index++) {
    const agf = this.agfs[index];
    if (agf.batch_number == this.batch_number && agf.completed == false){
        return false;
    }   
}   
return tf;        
}
//------------------------    
}//base comp
     