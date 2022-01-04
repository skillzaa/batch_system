
export default class AgfObject{
constructor(item){
//--the name is not being used    
this.name = item.name; 
//---when will i need this
this.id = item.id; 
//---there is more to it
this.batch_number = item.batch_number;
//--- if this is false the batch can complete even if this is not completed yet
this.necessary = item.necessary;
//once this is true the agf is exhausted
this.completed = false;
//--the name (sory the id)of the comp for which it is made
this.component_id = item.component_id;
//--if this was rust component_target should have been a enum.
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
