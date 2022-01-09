import { Renderer } from "../../../assets/pixi.js";

export default class  AniAbs {
private begin:number = 0;    
private final:number = 100;    
private increment:number = 1;    
private current:number = 0;    
public comp_target:string = "x";    
private renderer: Renderer;
private agf_data:{}={};

constructor(data){
this.renderer = data.renderer;   
this.comp = data.comp;
// this.stage = data.stage;
this.begin = data.begin || 0;
this.final = data.final || 100;
this.increment = data.increment || 1;
//it can be changed to width,height,y etc
this.comp_target = data.comp_target || "x";
this.current = this.begin;
    //---and
this.agf_data = {};
}

animate (){return true;}
}//obj
