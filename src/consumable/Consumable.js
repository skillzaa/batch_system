

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

}