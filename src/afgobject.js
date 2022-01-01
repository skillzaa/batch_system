
export default class AgfObject{
constructor(name="AgfObject",begin_data=0,target_data=100,increment=1,necessary=true){
this.name = name; 
this.begin_data = begin_data; 
this.current_data = begin_data; //its not a mistake
this.target_data = target_data; 
this.increment = increment; 
this.necessary = necessary;
this.completed = false;
this.pointer = null;
this.pointer_target = null;
}
    run(){
        if (this.current_data < this.target_data){
            this.current_data += this.increment;
            this.pointer[this.pointer_target] = this.current_data
        }else {
            this.completed = true;
        }
    }
}
