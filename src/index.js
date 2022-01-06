import get_comp from "./premades/square_move.js";
import Wiz from "./wiz/Wiz.js";

let wiz = new Wiz();
let c = get_comp();
wiz.components.push(c);
wiz.init();
console.log("wiz",wiz);
wiz.start();

