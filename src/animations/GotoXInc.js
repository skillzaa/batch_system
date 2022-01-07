
export default class GotoXInc {
constructor(data){
    
    this.renderer = data.renderer;
    this.comp = data.comp;
    this.stage = data.stage;

    //--this is X percentage
    this.begin = ((this.renderer.width / 100) * data.begin) ;
    this.final = ((this.renderer.width / 100) * data.final) ;

    this.increment= data.increment;
    
    //--this will be always X
    this.component_target = "x";
    //==============================
//--these will just take of them selves
    this.current = this.begin;
}
xbound_violated(){
if (this.current > (this.renderer.width - this.comp.width) ){
    return true;
}else {
    return false;
}
}
animate (){
    if (this.xbound_violated()){
        return parseInt(this.current);
    }
    
    if (this.current < this.final){
            //--Increment
            this.current += this.increment;
        return parseInt(this.current);
        }else {
        //--just keep returning the last value
        return parseInt(this.current);
    }

}
}
