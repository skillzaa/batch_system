

export default class IntDec  {
constructor(begin_value=100,final_value=0,increment=1,component_target="x"){
    //--just set these 4 
    //==============================
    //.... begin value must be smaller than final_value- it is IntInc not IntDec
    if (begin_value >= final_value ){
        this.begin_value = begin_value; 
        this.final_value = final_value;
    }else { //swap
        this.begin_value = final_value; 
        this.final_value = begin_value;
    }
    this.increment = increment; 
    //---Musttttt component_target can just be x,y,width,height
    this.component_target = "x";
    //==============================
//--these will just take of them selves
    this.current_value = this.begin_value;//just to initialize oldval just for legacy reasons
    this.oldval = this.begin_value;
}

animate (){
    if (this.current_value > this.final_value){
        // no benefit of saving since we can calculate that also but just to get-rid of this oldval confusion.
        // 
        this.oldval = this.current_value;
        //--decrement
        this.current_value -= this.increment;
       return this.current_value;
    }else {
        //--just keep returning the last value
        return parseInt(this.current_value) ;
    }
    }
}
