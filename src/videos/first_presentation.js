import Wiz from "../engine/Wiz.js";
import flyin_bullet_point from "../premades/flyin_item/flyin_bullet_point.js";
//========API======
let init_data = {};
init_data.start_frame = 20;
init_data.title_text = "from api";
init_data.width = 350;
init_data.height = 90;
init_data.begin = 0;
init_data.final = 50;
init_data.increment = 4;
init_data.align = "middle";
init_data.y = 5;
//==========================
export default function first_presentation() {
    let wiz = new Wiz();
    flyin_bullet_point(wiz, init_data);
    let init_data02 = {};
    init_data02.start_frame = 300;
    init_data02.title_text = "Fine Tune later..";
    init_data02.width = 200;
    init_data02.height = 50;
    init_data02.begin = 0;
    init_data02.final = 15;
    init_data02.increment = 4;
    init_data02.align = "middle";
    init_data02.y = 30;
    flyin_bullet_point(wiz, init_data02);
    // wiz.components.push(batch);
    return wiz;
} //first_presentation
