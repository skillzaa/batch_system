
export default class Consumable {
private consumed:boolean = false;
constructor(){
this.consumed = false;    
}

public isConsumed(){
    return this.consumed;
}
private consume(){
    this.consumed = true;
}
//--override this fn and use consume() in this- if consumed is set true else false
public check_if_consumed(){
    false;
}
}