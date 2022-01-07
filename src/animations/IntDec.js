
export default function IntDec (){
    if (this.current > this.final){
        //--increment
        this.current -= this.increment;
        return this.current;
    }else {
        //--just keep returning the last value
        return parseInt(this.current) ;
    }
}