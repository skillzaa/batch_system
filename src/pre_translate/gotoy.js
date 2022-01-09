//left right middle
export default function gotoy(ani, align = "top", bounded = false) {
    //---bounded --it means now we translate with in 0-100 percent   
    if (ani.final > 100) {
        //--first remove the height
        ani.final = 100;
    }
    ani.begin = ((ani.renderer.height / 100) * ani.begin);
    ani.final = ((ani.renderer.height / 100) * ani.final);
    //--finally
    if (bounded == true) {
        switch (align) {
            case "top":
                //--automatic   
                break;
            case "middle":
                ani.final = ani.final - (ani.comp.height / 2);
                break;
            case "bottom":
                ani.final = ani.final - ani.comp.height;
                break;
            default:
                break;
        }
    }
}
