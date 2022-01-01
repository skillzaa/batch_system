import { view_state } from "../app_jsons/view_state.js";
export default class AgfObject{
constructor(item){
this.name = item.name; 
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
        if (this.current_data < this.target_data){
            this.current_data += this.increment;
            //----important bit --actual change of view_state
            let components_data = view_state.components;
            components_data.forEach((component)=>{
                //------------------------------
               if (components.name == this.this.component_name){
                component[this.component_target]
                = this.current_data;
               }
                //------------------------------
            });
        }else {
            this.completed = true;
        }
    }
}
