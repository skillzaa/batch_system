import Wiz from "./wiz/Wiz.js";
import get_comp from "./premades/composer02.js";
let wiz = new Wiz();
wiz.components.push(get_comp(wiz));
wiz.init();
console.log("wiz",wiz);
wiz.start();

