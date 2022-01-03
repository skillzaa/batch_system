//import get_components from "./get_components.js";
import get_base_components from "../component_factory/get_base_components.js";
// import get_agfs from "../agf_factory/get_agfs.js";
import get_app from "./get_app.js";

export default class Wiz {
constructor(){
this.app = get_app();
this.batch_number = 1;
this.frame_counter = 0;
this.total_batches = 2;
this.components  = [];
// this.agfs = []; 
// this.init();
}
init(){
    this.components = get_base_components();
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
let is_batch_completed = true; 
for (let index = 0; index < this.components.length; index++) {
    if (this.components[index].is_batch_completed() == false){
        is_batch_completed = false;
        return false;
    }   
}   
return is_batch_completed;        
}
update(){
this.components.forEach(component =>{
        component.update(this.batch_number);
    });
}
start(){
this.app.ticker.add( delta => {
    let a  = this.all_comp_batch_done();
    switch (a) {
        case true:
console.log("wiz increased interanl batch_number");
        break;
        case false:
            this.update();
            this.frame_counter++;
// console.log("frame_counter",frame_counter);
        break;
        case "ended":
            this.app.ticker.stop();
            console.log("video ended");
        break;
    }
});

}

}//wiz
