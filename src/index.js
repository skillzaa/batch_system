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
is_batch_completed();
    // console.log("wiz",wiz);
    });
//-----------------------------------------
function is_batch_completed(){
let tf = are_batch_agfs_done();
if (tf==true){
        if (batch_number >= total_batches){
        ticker.stop();
        console.log("wiz",wiz);
        console.log("video ended",batch_number);
        }else {
            batch_number +=1;
        console.log("Batch increased",batch_number);
        }
    }else {
        
        //--
    }
}    
//-------------------
function are_batch_agfs_done(){
let tf = true; 
for (let index = 0; index < wiz.agfs.length; index++) {
    const agf = wiz.agfs[index];
    if (agf.batch_number == batch_number && agf.completed == false){
        tf = false;
        return false;
    }   
}   
return tf;        
}