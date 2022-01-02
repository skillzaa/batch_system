import Wiz from "./wiz/wiz.js";

let wiz= new Wiz();
// console.log("wiz",wiz);
let batch_number = 1;
let total_batches = 10;
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
is_batch_completed();
    // console.log("wiz",wiz);
    });
//-----------------------------------------
function is_batch_completed(){
let completed = true;
wiz.agfs.forEach( agf =>{
 if (agf.batch_number == batch_number && agf.completed == false){
    completed = false;
    return completed;
 }
//--if completed then bump
if (completed == true){
    batch_number +=1;
    console.log("Batch increased",batch_number);
}
if (batch_number >= total_batches){
    ticker.stop();

    console.log("wiz",wiz);
    console.log("video ended",batch_number);

}
});
}    