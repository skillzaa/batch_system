
import exponential from "./agfs/exponential.js";
import int_inc_dec from "./agfs/int_inc_dec.js";

export default function build_animation (agf_type,basic_data={},animation_data={}){
//--this is animation data and not 
switch ("agf_type") {
    case "exponential":
        //animation_data not required here
        let a = exponential(basic_data,animation_data);
        return a;
        break;
    case "int_inc_dec":
        //begin_data=0,final_data=100,increment=1
        let a = int_inc_dec(basic_data,animation_data);
        return a;
        break;

    default:
        console.error("agf_type not found");
        break;
}

}