export default class AniAbs {
    constructor(data) {
        this.begin = 0;
        this.final = 100;
        this.increment = 1;
        this.current = 0;
        this.comp_target = "x";
        this.agf_data = {};
        this.renderer = data.renderer;
        this.comp = data.comp;
        // this.stage = data.stage;
        this.begin = data.begin || 0;
        this.final = data.final || 100;
        this.increment = data.increment || 1;
        //it can be changed to width,height,y etc
        this.comp_target = data.comp_target || "x";
        this.current = this.begin;
        //---and
        this.agf_data = {};
    }
    animate() { return true; }
} //obj
