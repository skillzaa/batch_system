import Frame from "../frame/Frame.js";
import Component from "../components/Component.js";
export default class Wiz {
    frame: Frame;
    components: Component[];
    app: any;
    constructor();
    init(): boolean;
    append_app_to_body(): void;
    add_components_to_stage(): void;
    update(): void;
    end(): void;
    update_components(): void;
    start(): void;
    add_component(init_data?: {}): Component;
}
//# sourceMappingURL=Wiz.d.ts.map