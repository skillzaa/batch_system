import get_app from "../wiz/get_app.js";
import Frame from "../frame/Frame.js";

export default class Wiz {
constructor(){
this.app = get_app();
this.frame = new Frame();
this.components  = [];
// let b = component_factory();
// this.components.push(b);
// this.init();
}
init(){
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

update(){
    // this.update_components();
    // this.update_batch_number();
}
end(){
this.app.ticker.stop();
console.log("video ended");
}

update_components(){
this.components.forEach(component =>{
        component.update(component);
    });
}
start(){
this.app.ticker.add(this.update.bind(this));
}

}//wiz
