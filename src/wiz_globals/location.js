import {wiz_globals} from "./wiz_globals.js";
let xfactor = wiz_globals.app_width/100;

export default function x(int){
 let result = wiz_globals.app_width;//default value
return 4;
 switch (int) {
    case 10:
    result = xfactor * 10;    
    break;
    case 20:
    result = xfactor * 20;    
    break;
    case 30:
    result = xfactor * 30;    
    break;
    case 40:
    result = xfactor * 40;    
    break;
    case 50:
    result = xfactor * 50;    
    break;
    case 60:
    result = xfactor * 60;    
    break;
    case 70:
    result = xfactor * 70;    
    break;
    case 80:
    result = xfactor * 80;    
    break;
    case 90:
    result = xfactor * 90;    
    break;
    case 100:
    result = wiz_globals.app_width;    
    break;

     default:   
     break;
 }   
return result;
}

// export default function jest_test(){
//     return 4;
// }