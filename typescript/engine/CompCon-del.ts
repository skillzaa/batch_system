

export default class CompCon{
public container;
public style;
public title;
public rectangle;
public textMetrics;
public rectangle_color;
public title_text:string;
constructor(item={}){
this.title_text = item.title_text || "Your Text Here!!";    
this.rectangle_color = item.color;

this.container = new PIXI.Container();
    //----------------------------------------
this.style = new PIXI.TextStyle({
            dropShadow: true,
            dropShadowAlpha: 0,
            dropShadowAngle: 2,
            dropShadowColor: "#eceafb",
            dropShadowDistance: 6,
            fill: "#d70f12",
            fontFamily: "Helvetica",
            fontSize: 20,
            strokeThickness:4,
            fontStyle: "oblique",
            fontWeight: "bold",
            lineJoin: "round",
            miterLimit: 36,
            // stroke: "#0c0c0d",
            stroke: '#000000',
        });
        // item.title_text = ;
this.title = new PIXI.Text(this.title_text, this.style);
this.title.resolution = 4;
this.textMetrics = PIXI.TextMetrics.measureText(this.title_text, this.style);
    
//-------------------------------------------    
this.rectangle = new PIXI.Graphics();
this.rectangle.beginFill(this.rectangle_color); //yellow 0xFFFF00
        // rectangle.lineStyle(5, 0xFF0000); //red
    
this.rectangle.drawRect(item.x, item.y, this.textMetrics.width,this.textMetrics.height);
this.rectangle.endFill();
    //------------------------------------------------
    
this.container.addChild(this.rectangle);
this.container.addChild(this.title);
}//constructor

    
}
     