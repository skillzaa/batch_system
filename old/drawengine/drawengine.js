import {view_state} from "../app_jsons/view_state.js";

export default class DrawEngine {
constructor(width=800,height=600){
    this.view_state = view_state;
    this.app = new PIXI.Application({ 
    width: width, 
    height: height
            });
this.components = this.generate_components();
document.body.appendChild(this.app.view);
return true;
}
generate_components(){
    this.components = [];
    let state_components_data = view_state.components;
    state_components_data.forEach((state_component)=>{
        //------------------------------
        let r = {};
        r.name = state_component.name;
        r.comp = rectangle(state_component);
        this.app.stage.addChild(r.comp);
        this.components.push(r);
        //------------------------------
    });
}
draw_app(){
//    console.clear();
//     console.dir(JSON.stringify(this.components));
}

    get_sprite(path="./assets/branch.png"){
    let sprite = PIXI.Sprite.from(path);
    this.app.stage.addChild(sprite);
    return sprite;
}


    text(txt="random text" ){
let text = new PIXI.Text(txt);
text.anchor.set(0.5);
text.x = this.app.view.width  / 2;
text.y = this.app.view.height / 2;
this.app.stage.addChild(text);
return text;
}

}//draw engine ends

//----functions placed outside
function rectangle(item){
var rectangle = new PIXI.Graphics();
rectangle.beginFill(item.color); //yellow 0xFFFF00
// rectangle.lineStyle(5, 0xFF0000); //red
rectangle.drawRect(item.x, item.y, item.width, item.height);
// EMPTY
rectangle.endFill();
return rectangle;
}
    