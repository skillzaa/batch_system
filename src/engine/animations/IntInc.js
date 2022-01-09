export default function IntInc() {
    if (this.current < this.final) {
        //--increment
        this.current += this.increment;
        return this.current;
    }
    else {
        //--just keep returning the last value
        return parseInt(this.current);
    }
}
