import Wiz from "./wiz/wiz.js";
let wiz= new Wiz();
wiz.app.ticker.add((delta) => {
wiz.update();// console.log("wiz",wiz);
});