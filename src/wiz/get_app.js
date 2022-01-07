import wg from "../wiz_globals/wg.js";
export default function    
get_app(){
let app = new PIXI.Application({ 
        width: 800 ,height: 500});
// let app = new PIXI.Application({ 
//         width: window.innerWidth ,height: window.innerHeight});
        
// let app = new PIXI.Application({ 
//         width: wg.glbl.app_width,height: wg.glbl.app_height });
return app;        
}