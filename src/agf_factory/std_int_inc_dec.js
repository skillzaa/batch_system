export default class AgfObject{
constructor(item){
this.name = item.name; 
this.id = "33"; 
this.batch_number = item.batch_number;
this.necessary = item.necessary;
this.completed = false;
this.component_name = item.component_name;
this.component_target = item.component_target;

//--data specific to std_int_agf
this.increment = item.increment; 
this.begin_data = item.begin_data; 
this.final_data = item.final_data; 
this.current_data = item.begin_data; //its not a mistake
}
run(oldval=0){
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
