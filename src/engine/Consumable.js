export default class Consumable {
    constructor() {
        this.consumed = false;
        this.consumed = false;
    }
    isConsumed() {
        return this.consumed;
    }
    consume() {
        this.consumed = true;
    }
    //--override this fn and use consume() in this- if consumed is set true else false
    check_if_consumed() {
        false;
    }
}
