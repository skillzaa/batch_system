




export default function gotox (ani,bounded=false){
//---bounded --it means now we translate with in 0-100 percent   
if(ani.final > 100) {
    //--first remove the width
    ani.final = 100;
}
    
ani.begin = ((ani.renderer.width / 100) * ani.begin) ;

ani.final = ((ani.renderer.width / 100) * ani.final) ;



//--finally
if(bounded == true) {
    //--first remove the width
    ani.final = ani.final - ani.comp.width;
}

}

