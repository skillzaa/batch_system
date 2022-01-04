import AnimationAbstract from "./AnimationAbstract.js";

//begin_data=0,final_data=100,increment=1
export default class IntInc extends AnimationAbstract  {
constructor(){
    super();
    this.begin_data = 0; 
    this.final_data = 100;
    this.increment = 1; 
    this.current_data = this.begin_data;//just to initialize
}

animate (oldval= 0){
    if (this.current_data < this.final_data){
        this.current_data += this.increment;
       return this.current_data;
    }else {
        //-no call back just use flag
        this.completed = true;
        return parseInt(oldval) ;
    }
    }
}
