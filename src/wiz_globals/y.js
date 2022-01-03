import {glbl} from "./glbl.js";
let yfactor = glbl.app_height/100;

export default function y(int){
 let result = glbl.app_width;//default value
 switch (int) {
    case 10:
    result = yfactor * 10;    
    break;
    case 20:
    result = yfactor * 20;    
    break;
    case 30:
    result = yfactor * 30;    
    break;
    case 40:
    result = yfactor * 40;    
    break;
    case 50:
    result = yfactor * 50;    
    break;
    case 60:
    result = yfactor * 60;    
    break;
    case 70:
    result = yfactor * 70;    
    break;
    case 80:
    result = yfactor * 80;    
    break;
    case 90:
    result = yfactor * 90;    
    break;
    case 100:
    result = glbl.app_height;    
    break;

     default:   
     break;
 }   
return result;
}
