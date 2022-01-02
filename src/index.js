import Wiz from "./wiz/wiz.js";
let wiz= new Wiz();
let frame_counter = 0;
wiz.app.ticker.add((delta) => {
let is_batch_completed = wiz.is_batch_completed();
    switch (is_batch_completed) {
        case true:
console.log("wiz increased interanl batch_number");

        break;
        case false:
            wiz.update();
            frame_counter++;
console.log("frame_counter",frame_counter);
        break;

        case "ended":
            wiz.app.ticker.stop();
            console.log("video ended");
        break;
    }

});