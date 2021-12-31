

export default class Batch {
constructor(){    
this.agfs = [];
this.completed = false;
}
push(agf){
agf.callback = this.callback;    
this.agfs.push(agf);
}
run(){
    console.clear();
    this.agfs.forEach((agf) => {
        let v = agf.perform();
        console.log(agf.name,agf.perform(),"completed",agf.completed);
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
this.completed = final;    
}
// callback(){
// console.log("the callback have been called....");
// }

}//batch