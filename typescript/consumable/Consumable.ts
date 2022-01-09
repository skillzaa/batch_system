

export default class Consumable {

constructor(){
this._consumed = false;    
}

isConsumed(){
    return this._consumed;
}
consume(){
    this._consumed = true;
}
//--override this fn and use consume() in this- if consumed is set true else false
check_if_consumed(){
    false;
}
}