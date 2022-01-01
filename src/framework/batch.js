
export default class Batch {
constructor(view_state,callback){    
this.view_state = view_state;
this.agfs = [];
this.completed = false;
this.callback = callback;
this.status = "unknown for now";
}
push(agf){
agf.callback = this.callback;    
this.agfs.push(agf);
}
run(){
    // console.clear();
    this.agfs.forEach((agf) => {
        if (agf.completed == false){
        agf.run(this.view_state);
        }
    });
this.check_completion();    
}

check_completion(){
let final = true;    
    this.agfs.forEach((agf) => {
        if (agf.necessary == true && agf.completed == false){
            final = false;
        }
    });
    if(final == true){
        this.callback();
    }
this.completed = final;
}
// callback(){
// console.log("the callback have been called....");
// }

}//batch