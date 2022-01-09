export default class Frame {
    constructor(frame_last?: number);
    reset(): void;
    puase(): void;
    update(): void;
    mid_frame(): number;
    quarter_frame(): number;
    three_quarter_frame(): number;
    to_time(frame_numer: any): void;
    to_frame(): void;
}
//# sourceMappingURL=Frame.d.ts.map