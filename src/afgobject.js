
export default class AgfObject{
constructor(name="AgfObject",begin_data=0,target_data=1000,increment=1,necessary=true){
this.name = name; 
this.begin_data = begin_data; 
this.current_data = begin_data; //its not a mistake
this.target_data = target_data; 
this.increment = increment; 
this.necessary = necessary;
this.completed = false;
}
    perform(){
        if (this.current_data < this.target_data){
            this.current_data += this.increment;
            return this.current_data;
        }else {
            this.completed = true;
        }
}
}
