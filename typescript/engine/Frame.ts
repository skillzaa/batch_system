


//there r 60 frames in a sec so
export default class Frame {
constructor(frame_last = 3600){
this.frame_cur = 0;
this.frame_last = frame_last;//3 thousand six hundred 1min
// this.frame_mid = parseInt(this.last_frame / 2);
// this.frame_quarter = parseInt(this.last_frame / 4);
// this.frame_three_quarter = parseInt((this.last_frame /100) * 75);
// this.max_frames = 36000;//36 thousand 10min
// this.max_frames = 216000;//2 lack 16 thousand 1hour
}
reset(){
    this.frame_cur =0;
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