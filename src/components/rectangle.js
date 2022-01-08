export default function rectangle(item){
    let compcon = new PIXI.Container();

    let rectangle = new PIXI.Graphics();
    rectangle.beginFill(item.color); //yellow 0xFFFF00
    // rectangle.lineStyle(5, 0xFF0000); //red
    rectangle.drawRect(item.x, item.y, item.width, item.height);
    const style = new PIXI.TextStyle({
        dropShadow: true,
        dropShadowAlpha: 0,
        dropShadowAngle: 2,
        dropShadowColor: "#eceafb",
        dropShadowDistance: 6,
        fill: "#d70f12",
        fontFamily: "Helvetica",
        fontSize: 20,
        fontStyle: "oblique",
        fontWeight: "bold",
        lineJoin: "round",
        miterLimit: 36,
        stroke: "#0c0c0d",
        strokeThickness: 1
    });
    const text = new PIXI.Text('Welcome To Bilzaa2d', style);
    text.resolution = 4;
// wiz.app.stage.addChild(text);
    rectangle.endFill();


    compcon.addChild(rectangle);
    compcon.addChild(text);
    return compcon;
}
     