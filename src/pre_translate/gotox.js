//left right middle
export default function gotox(ani, align = "left", bounded = false) {
    //---bounded --it means now we translate with in 0-100 percent   
    if (ani.final > 100) {
        //--first remove the width
        ani.final = 100;
    }
    ani.begin = ((ani.renderer.width / 100) * ani.begin);
    ani.final = ((ani.renderer.width / 100) * ani.final);
    //--finally
    if (bounded == true) {
        switch (align) {
            case "left":
                //--automatic   
                break;
            case "right":
                ani.final = ani.final - ani.comp.width;
                break;
            case "middle":
                ani.final = ani.final - (ani.comp.width / 2);
                break;
            default:
                break;
        }
    }
}
