import {wiz_globals} from "../wiz_globals/wiz_globals.js";
export default function    
get_app(){
let app = new PIXI.Application({ 
        width: wiz_globals.app_width,height: wiz_globals.app_height });
return app;        
}