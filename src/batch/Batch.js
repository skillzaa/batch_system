import {basic_batch} from "../animations/basic_batch.js"
import AgfObject from "./agfobject.js";
import translate_agf_data from "./translate_agf_data.js";

export default class Batch{
constructor(batch_number=1){
this.batch_number = batch_number;
this.agfs = [];
this.get_batch_agfs();    
}
is_completed(){
let tf = true; 
for (let index = 0; index < this.agfs.length; index++) {
    const agf = this.agfs[index];
    if (agf.completed == false){
        return false;
    }   
}   
return tf;        
}
update(component){
    this.agfs.forEach(agf =>{
        // thie is not required :agf.batch_number == batch_number &&
        if (agf.completed == false){
            //agf run just return tha value
            let u = agf.run();
            //this is where mut happen 
            component[agf.component_target] = u;
        }
    });
}
//--fix this later
get_batch_agfs(){
let raw_agfs = basic_batch.agfs;
raw_agfs.forEach(agf_data =>{
    let translated = translate_agf_data(agf_data);
    let a = new AgfObject(translated);
    this.agfs.push(a);
});

}        
}
