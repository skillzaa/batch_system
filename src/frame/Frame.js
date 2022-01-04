


//there r 60 frames in a sec so
export default class Frame {
constructor(){
this.frame_number = 0;
this.max_frames = 3600;//3 thousand six hundred 1min
// this.max_frames = 36000;//36 thousand 10min
// this.max_frames = 216000;//2 lack 16 thousand 1hour
}
reset(){
    this.frame_number =0;
}
puase(){
    this.pause =true;
}
update(){this.frame_number += 1 ;}
mid_frame()
{return parseInt(this.max_frames / 2); }
quarter_frame()
{return parseInt(this.max_frames / 4) ; }
three_quarter_frame()
{return parseInt((this.max_frames/100) * 75) ; }

to_time(frame_numer){

}
to_frame(){

}
}