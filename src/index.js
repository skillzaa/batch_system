import Wiz from "./wiz/wiz.js";

let wiz= new Wiz();
// console.log("wiz",wiz);
let batch_number = 1;
let total_batches = 3;
let app = wiz.app;
document.body.appendChild(app.view);

let components = wiz.components;
components.forEach( c => {
app.stage.addChild(c.comp);
});
// Add a ticker 
    let elapsed = 0.0;
const ticker = app.ticker;    
// let ticker = app.ticker.add((delta) => {
ticker.add((delta) => {
wiz.update(batch_number);
    // console.log("wiz",wiz);
    });
//-----------------------------------------
//-------------------