import Wiz from "../wiz/Wiz.js";
// import flyin_title from "../premades/flyin_title.js";

import flyin_bullet_point from "../premades/flyin_item/flyin_bullet_point.js";
/**
title_text = init_data.title_text || "Your Text";    
y = init_data.y || 20;
width = init_data.width || 500;
height = init_data.height || 120;
begin = init_data.begin || 0;
final = init_data.final || 50;
increment = init_data.increment || 4;
align = init_data.align || "middle";
 */
export default function first_presentation(){
    let wiz = new Wiz();
    wiz = flyin_bullet_point(wiz,
    {
    title_text: "Inshallah",
    y:30
    });
return wiz;

}//first_presentation
