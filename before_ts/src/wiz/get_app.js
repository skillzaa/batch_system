import wg from "../wiz_globals/wg.js";
export default function    
get_app(){
let app = new PIXI.Application({ 
        width: 800,
        height: 500,
        transparent:false,
        antialias : true
});
app.renderer.backgroundColor = '0xfff5e3';   
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = "absolute";   


// let app = new PIXI.Application({ 
//         width: window.innerWidth ,height: window.innerHeight});
        
// let app = new PIXI.Application({ 
//         width: wg.glbl.app_width,height: wg.glbl.app_height });
return app;        
}