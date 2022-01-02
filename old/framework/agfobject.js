export default class AgfObject{
constructor(item){
this.name = item.name; 
this.comp_pointer = null;
this.begin_data = item.begin_data; 
this.final_data = item.final_data; 
this.current_data = item.begin_data; //its not a mistake
this.increment = item.increment; 
this.necessary = item.necessary;
this.completed = false;
this.component_name = item.component_name;
this.component_target = item.component_target;

}
    run(view_state){
        if (this.current_data < this.final_data){
            this.current_data += this.increment;
            //----important bit --actual change of view_state
            this.comp_pointer[this.component_target] = this.current_data;
            
        }else {
            this.completed = true;
        }
    }
}
