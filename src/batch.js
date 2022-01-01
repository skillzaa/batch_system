//Batch is a collection of agfs. 
// batch check the completed value of each of its items 
// but on completion it has to call a callback

export default class Batch {
constructor(callback){    
this.agfs = [];
this.completed = false;
this.callback = callback;
}
push(agf){
agf.callback = this.callback;    
this.agfs.push(agf);
}
run(){
    console.clear();
    this.agfs.forEach((agf) => {
        if (agf.completed == false){
        agf.run();
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