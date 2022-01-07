import Wiz from "./wiz/Wiz.js";
// import get_comp from "./premades/composer02.js";
// import get_comp from "./premades/xbound_test.js";
// import get_comp from "./premades/composeXbound.js";
import get_comp from "./premade_batches/xy.js";
let wiz = new Wiz();
wiz.components.push(get_comp(wiz));
wiz.init();
console.log("wiz",wiz);
wiz.start();

