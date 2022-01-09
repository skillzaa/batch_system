import compCon from "./compcon.js";
import Batch from "./Batch.js";
import XY2screen from "./XY2screen.js"
import {create_component_data} from "../internal_data/create_component_data.js";
import { Renderer,Stage,App } from "../../assets/pixi.js";


export default class Component {
private batches: Batch [] = [];
private xy2screen: XY2screen;
private comp:any;
public name: string;
public renderer : Renderer;
private stage:Stage;

constructor(init_data:create_component_data={}){
// super();    
this.renderer = init_data.renderer;
// this.stage = init_data.stage;
this.xy2screen = new XY2screen({renderer: this.renderer});
this.name = init_data.name || "base_component";
this.comp = compCon({
    x:init_data.x || 0,
    y:init_data.y || 0,
    width:init_data.width || 100,
    height:init_data.height || 25,
    color: 0xffff00 ,
    title_text:init_data.title_text || "Your Text Here.."
});
this.batches = [];
//--from inital_data
// this.agfs = get_class_agfs(this.name);
}
update(frame){
    this.batches.forEach(batch =>{
        if (batch.start_frame < frame){
            batch.update();
        }
    });
}
//--init data just pass through
add_batch(){
let init_data={};    
 init_data.renderer = this.renderer;
 init_data.comp = this.comp;   
let batch = new Batch(init_data);
//----importantto
this.batches.push(batch);
return batch;    
}


//------------------------    
}//base comp
     