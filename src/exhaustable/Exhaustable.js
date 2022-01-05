

export default class Exhaustable{

constructor(){
this.exhausted = false;    
}

isExhausted(){
    return this.exhausted;
}
exhaust(){
    this.exhausted = true;
}

}