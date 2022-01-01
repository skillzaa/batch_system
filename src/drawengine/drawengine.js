
export default class DrawEngine {
constructor(view_state,width=800,height=600){
    this.view_state = view_state;
    this.app = new PIXI.Application({ 
    width: 640, height: 360 
            });
document.body.appendChild(this.app.view);
return true;
}
generate_conponents(){
    this.components = [];
    let components_data = this.view_state.components;
    components_data.forEach((component)=>{
        //------------------------------
        let r = rectangle(component);
        this.app.stage.addChild(r);
        this.components.push(r);
        //------------------------------
    });
}
draw_app(){

    // this.rect.x = view_state.rect.x;
    // this.rect.y = view_state.rect.y;
   console.clear();
    console.dir(JSON.stringify(this.view_state.components));
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
// rectangle.endFill();
rectangle.drawRect(item.x, item.y, item.width, item.height);
return rectangle;
}
    