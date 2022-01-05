import IntInc from "./IntInc.js";

describe('IntInc', () => {
    it('begin value default', () => {
    let a =  new IntInc();
        expect(a.begin_value).toEqual(0);
    });
});

describe('IntInc', () => {
    it('final value default', () => {
    let a =  new IntInc();
        expect(a.final_value).toEqual(100);
    });
});

describe('IntInc', () => {
    it('current value default', () => {
    let a =  new IntInc();
        expect(a.current_value).toEqual(0);
    });
});

describe('IntInc', () => {
    it('it should  be 0, 100 but it will SWAP', () => {
    let a =  new IntInc(100,0);
        expect(a.begin_value).toEqual(0);
        expect(a.final_value).toEqual(100);
    });
});

describe('IntInc', () => {
    it('create default and after 100 loop the value shd be 100', () => {
    let a =  new IntInc();
    for (let i = 0; i < 100 ; i++) {
        
        expect(a.animate()).toBeLessThanOrEqual(100);
        
    }
        // expect(a.final_value).toEqual(100);
    });
});


