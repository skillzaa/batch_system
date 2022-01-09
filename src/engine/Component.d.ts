import Batch from "./Batch.js";
import { create_component_data } from "../internal_data/create_component_data.js";
import { Renderer } from "../../assets/pixi.js";
export default class Component {
    private batches;
    private xy2screen;
    private comp;
    name: string;
    renderer: Renderer;
    private stage;
    constructor(init_data?: create_component_data);
    update(frame: any): void;
    add_batch(): Batch;
}
//# sourceMappingURL=Component.d.ts.map