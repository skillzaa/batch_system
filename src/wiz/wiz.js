import {initial_data} from "./initial_data.js";
import AgfObject from "./agfobject.js";

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
    this.get_components();
    this.get_agfs();
    this.match_comp_agfs();
}
is_batch_completed(){
let tf = this.are_batch_agfs_done();
if (tf==true){
        if (this.batch_number >= this.total_batches){
        // ticker.stop();
        // console.log("wiz",wiz);
        console.log("video ended");
        // return true;
        }else {
            this.batch_number +=1;
        console.log("increase the batch");
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
this.is_batch_completed();
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