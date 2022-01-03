export default function rectangle(item){
    var rectangle = new PIXI.Graphics();
    rectangle.beginFill(item.color); //yellow 0xFFFF00
    // rectangle.lineStyle(5, 0xFF0000); //red
    rectangle.drawRect(item.x, item.y, item.width, item.height);
    rectangle.endFill();
    return rectangle;
}
     