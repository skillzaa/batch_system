let app = new PIXI.Application({ width: 1200, height: 600 });
document.body.appendChild(app.view);
//--------------------------------------------
//--------------------------------------------
// let sprite = PIXI.Sprite.from('./assets/fighter.png');
//   app.stage.addChild(sprite);
//--------------------------------------------
//--------------------------------------------

app.loader
.add('desyrel', './assets/desyrel.xml')
.load(onAssetsLoaded);

function onAssetsLoaded() {
let fonts = [];
let y=0
for (let i = 0; i < 10; i++) {
let rand = makeid(25);    
const bitmapFontText = new PIXI.BitmapText(rand, { fontName: 'Desyrel', fontSize: 30, align: 'left' });

bitmapFontText.x = 0;
bitmapFontText.y = y;
y+=20;
app.stage.addChild(bitmapFontText);
fonts.push(bitmapFontText);  
}


app.animationUpdate = function(delta) {

for (let i = 0; i < fonts.length; i++) {
  fonts[i].x +=1;
  //  (Math.random() * 600);
  // fonts[i].y = (Math.random() * 800);
  
}
}

// Listen for animate update
// app.ticker.add(app.animationUpdate);

setInterval(function(){
app.animationUpdate(); 
},16);
// setTimeout (function(){
//   app.ticker.remove(app.animationUpdate);
// },5000);
function makeid(length) {
var result           = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}


}