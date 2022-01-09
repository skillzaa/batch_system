
//left right middle
export default class XY2screen {
constructor(init_data={}){
    // this.align= init_data.align || "top"; 
    // this.bounded = init_data.bounded || false; 
    this.yfactor = (init_data.renderer.height / 100);
    this.xfactor = (init_data.renderer.width / 100);
}    

x(x_in) {
    if(x_in > 100) {
        //--first remove the width
        x_in = 100;
    }
    
return this.xfactor * x_in;
}
y(y_in) {
    if(y_in > 100) {
        //--first remove the width
        y_in = 100;
    }
return this.yfactor * y_in;
}

// //--finally
// if(bounded == true) {
//     switch (align) {
//         case "top":
//          //--automatic   
//             break;
            
//         case "middle":
//             ani.final = ani.final - (ani.comp.height /2);
//             break;

//         case "bottom":
//             ani.final = ani.final - ani.comp.height;
//             break;

    
//         default:
//         break;
//     }
// }

}

