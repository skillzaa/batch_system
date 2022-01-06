import Wiz from "./wiz/Wiz.js";
// import get_comp from "./premades/square_move.js";
import Builder from "./builder/Builder.js";
import IntInc from "./animations/IntInc.js";
// import get_comp from "./premades/square_move_builder.js";
import get_comp from "./premades/xbound_test.js";

let wiz = new Wiz();
wiz.components.push(get_comp(wiz));
wiz.init();
console.log("wiz",wiz);
wiz.start();

