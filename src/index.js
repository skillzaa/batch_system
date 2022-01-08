import Wiz from "./wiz/Wiz.js";
// import get_comp from "./premades/composer02.js";
// import get_comp from "./premades/xbound_test.js";
// import get_comp from "./premades/composeXbound.js";
// import get_comp from "./premade_batches/xy.js";
// import get_wiz from "./premade_batches/xy_trans_group.js";
import get_wiz from "./premade_batches/title.js";

let wiz = get_wiz();
// wiz.components.push(get_comp(wiz));
wiz.init();
console.log("wiz",wiz);
wiz.start();

