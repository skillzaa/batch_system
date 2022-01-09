import get_app from "./get_app.js";
import Frame from "./Frame.js";
import Component from "./Component.js";
export default class Wiz {
    constructor() {
        this.components = [];
        this.app = get_app();
        // this.frame = new Frame();
        this.frame = new Frame();
        this.components = []; //add to this after creation
        // this.init();
    }
    init() {
        // console.log(this.app.stage.width);
        this.append_app_to_body();
        this.add_components_to_stage();
        return true;
    }
    append_app_to_body() {
        document.body.appendChild(this.app.view);
    }
    add_components_to_stage() {
        this.components.forEach(c => {
            //--component is wiz component that is wrapper around pixi componenet (is placed in c.comp)    
            this.app.stage.addChild(c.comp);
        });
    }
    update() {
        // place values in update_components 
        this.update_components();
        // more updates here
        //----update runners
        //-- update background
    }
    end() {
        this.app.ticker.stop();
        console.log("stopped");
    }
    update_components() {
        //--no need to check if comp has start_frame or not just a complication    
        this.frame.frame_cur += 1;
        this.components.forEach(component => {
            component.update(this.frame.frame_cur);
        });
    }
    start() {
        this.app.ticker.add(this.update.bind(this));
    }
    add_component(init_data = {}) {
        //--this for global use
        init_data.renderer = this.app.renderer;
        init_data.stage = this.app.stage;
        let c = new Component(init_data);
        return c;
    }
} //wiz
