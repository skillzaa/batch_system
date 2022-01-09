import AniAbs from "./animations/AniAbs.js";
export default class Batch {
    private animations;
    start_frame: number;
    private stop_frame;
    private renderer;
    constructor(init_data: any);
    add_animation(ani_data?: {}): AniAbs;
    update(): void;
}
//# sourceMappingURL=Batch.d.ts.map