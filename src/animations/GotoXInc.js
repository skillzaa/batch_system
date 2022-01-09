export default function GotoXInc(aniabs, misc = {}) {
    //--aniabs is X percentage
    //---i can make it bounded with one line
    // if (aniabs.final > 100) {aniabs.final = 100;}
    aniabs.begin = ((aniabs.renderer.width / 100) * data.begin);
    aniabs.final = ((aniabs.renderer.width / 100) * data.final);
    aniabs.increment = data.increment;
    //--aniabs will be always X
    aniabs.comp_target = "x";
    aniabs.current = aniabs.begin;
}
animate();
{
    if (aniabs.xbound_violated()) {
        return parseInt(aniabs.current);
    }
    if (aniabs.current < aniabs.final) {
        //--Increment
        aniabs.current += aniabs.increment;
        return parseInt(aniabs.current);
    }
    else {
        //--just keep returning the last value
        return parseInt(aniabs.current);
    }
}
