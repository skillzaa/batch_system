export default function compCon(item) {
    let compcon = new PIXI.Container();
    //----------------------------------------
    const style = new PIXI.TextStyle({
        dropShadow: true,
        dropShadowAlpha: 0,
        dropShadowAngle: 2,
        dropShadowColor: "#eceafb",
        dropShadowDistance: 6,
        fill: "#d70f12",
        fontFamily: "Helvetica",
        fontSize: 20,
        strokeThickness: 4,
        fontStyle: "oblique",
        fontWeight: "bold",
        lineJoin: "round",
        miterLimit: 36,
        // stroke: "#0c0c0d",
        stroke: '#000000',
    });
    // item.title_text = ;
    const title = new PIXI.Text(item.title_text, style);
    title.resolution = 4;
    let textMetrics = PIXI.TextMetrics.measureText(item.title_text, style);
    // console.log(textMetrics);
    //-------------------------------------------    
    let rectangle = new PIXI.Graphics();
    rectangle.beginFill(item.color); //yellow 0xFFFF00
    // rectangle.lineStyle(5, 0xFF0000); //red
    rectangle.drawRect(item.x, item.y, textMetrics.width, textMetrics.height);
    rectangle.endFill();
    //------------------------------------------------
    compcon.addChild(rectangle);
    compcon.addChild(title);
    return compcon;
}
