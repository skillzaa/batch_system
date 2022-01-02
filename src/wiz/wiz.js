import get_components from "./get_components.js";
import get_agfs from "./get_agfs.js";
import get_app from "./get_app.js";

export default class Wiz {
constructor(){
this.app = get_app();
this.batch_number = 1;
this.total_batches = 3;
this.components  = [];
this.agfs = []; 
this.init();
}
init(){
    this.components = get_components();
    this.agfs = get_agfs();
    this.match_comp_agfs();
    this.add_components_to_stage();
    this.append_app_to_body();
    return true;
}
append_app_to_body(){
document.body.appendChild(this.app.view);
}
add_components_to_stage(){
    this.components.forEach( c => {
    this.app.stage.addChild(c.comp);
    });    
}

is_batch_completed(){
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
        tf = false;
        return false;
    }   
}   
return tf;        
}
update(){
this.components.forEach(component =>{
        component.agfs.forEach(agf =>{
            if (agf.batch_number == this.batch_number && agf.completed == false){
                let u = agf.run();
                component.comp[agf.component_target] = u;
            }
        });
    });
}
match_comp_agfs(){
    this.components.forEach(comp =>{
        comp.agfs = [];
        this.agfs.forEach(agf =>{
            if (agf.component_name == comp.name){
                comp.agfs.push(agf);
            }
        });
    });
}

}
