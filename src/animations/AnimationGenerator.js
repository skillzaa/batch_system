import GotoXInc from "./GotoXInc.js";


export default class AnimationGenerator {
constructor(data ){
this.data = data;    
}

select_animation(){
switch (this.data.type) {
    case "GotoXInc":
    let animation  = new GotoXInc(this.data);
    return animation;    
    break;

    default:
    break;
}

}

}