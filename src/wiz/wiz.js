import {initial_data} from "../app_jsons/initial_data.js";
import AgfObject from "./agfobject.js";

export default class Wiz {
constructor(){
this.app = get_app();
this.components  = [];
this.agfs = []; 
this.init();
}
init(){
    this.get_components();
    this.get_agfs();
    this.match_comp_agfs();
}
//--dont take the word update lightly
update(batch_number=0){
this.components.forEach(comp =>{
    comp.agfs.forEach(agf =>{
        if (agf.batch_number == batch_number){
            let u = agf.run();
            comp[agf.component_target] = u;
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
get_agfs(){
initial_data.agfs.forEach((agf_data)=>{
    let a = new AgfObject(agf_data);
this.agfs.push(a);
});

}
get_components(){
    let components = [];
    let components_data = initial_data.components;
    
    components_data.forEach((component)=>{
        //------------------------------
        let r = {};
        r.name = component.name;
        r.comp = rectangle(component);
        //this.app.stage.addChild(r.comp);
        this.components.push(r);
        //------------------------------
    }); 
}
}

//---------------------
function rectangle(item){
var rectangle = new PIXI.Graphics();
rectangle.beginFill(item.color); //yellow 0xFFFF00
// rectangle.lineStyle(5, 0xFF0000); //red
rectangle.drawRect(item.x, item.y, item.width, item.height);
rectangle.endFill();
return rectangle;
}
    
function get_app(width=800,height=600){
let app = new PIXI.Application({ 
        width: width,height: height });
return app;        
}