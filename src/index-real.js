import get_wiz from "./wiz_builder/get_wiz.js";
/**
 * Wiz Public API
 * app / ticker - 
 * frame_counter
 * is_batch_completed()
 * update()
 */
let wiz = get_wiz();
// wiz.init();

console.log("wiz",wiz);
wiz.start();