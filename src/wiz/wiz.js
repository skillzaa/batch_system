//import get_components from "./get_components.js";
import get_base_components from "../component_factory/get_base_components.js";
import component_factory from "../component_factory/component_factory.js";
import get_app from "./get_app.js";

export default class Wiz {
constructor(){
this.app = get_app();
this.batch_number = 1;
this.frame_counter = 0;
this.total_batches = 2;
this.components  = [];
let b = component_factory();
this.components.push(b);
this.init();
}
init(){
    // this.components = get_base_components();
    // this.agfs = get_agfs();
    // this.match_comp_agfs();
    this.append_app_to_body();
    this.add_components_to_stage();
    return true;
}
append_app_to_body(){
document.body.appendChild(this.app.view);
}
add_components_to_stage(){
    this.components.forEach( c => {
    //--component is wiz component that is wrapper around pixi componenet (is placed in c.comp)    
    this.app.stage.addChild(c.comp);
    });    
}

all_comp_batch_done(){
let all_comp_batch_done = true; 
for (let index = 0; index < this.components.length; index++) {
    // this.batch_number is must
    if (this.components[index].is_batch_completed(this.batch_number) == false){
        all_comp_batch_done = false;
        return false;
    }   
}   
return all_comp_batch_done;        
}
update(){
    this.update_components();
    this.update_batch_number();
}
end(){
this.app.ticker.stop();
console.log("video ended");
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
update_components(){
this.components.forEach(component =>{
        component.update(this.batch_number);
    });
}
start(){
this.app.ticker.add(this.update.bind(this));
}

}//wiz
