import {view_state} from "../app_jsons/view_state.js";


export default class DrawEngine {
constructor(width=800,height=600){
    this.app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(this.app.view);
    return true;
}
draw_app(){
   console.clear();
    console.dir(JSON.stringify(view_state));
}

    get_sprite(path="./assets/branch.png"){
    let sprite = PIXI.Sprite.from(path);
    this.app.stage.addChild(sprite);
    return sprite;
}

rectangle(item){
var rectangle = new PIXI.Graphics();
rectangle.beginFill(item.color); //yellow 0xFFFF00
// rectangle.lineStyle(5, 0xFF0000); //red
// rectangle.endFill();
rectangle.drawRect(item.x, item.y, item.width, item.height);
this.app.stage.addChild(rectangle);
return rectangle;
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