export default class AgfObject{
constructor(item){
this.name = item.name; 
this.batch_number = item.batch_number;
this.begin_data = item.begin_data; 
this.final_data = item.final_data; 
this.current_data = item.begin_data; //its not a mistake
this.increment = item.increment; 
this.necessary = item.necessary;
this.completed = false;
this.component_name = item.component_name;
this.component_target = item.component_target;

}
    run(){
        if (this.current_data < this.final_data){
            this.current_data += this.increment;
           return this.current_data;
        }else {
            //-no call back just use flag
            this.completed = true;
            return this.current_data;
        }
    }
}
