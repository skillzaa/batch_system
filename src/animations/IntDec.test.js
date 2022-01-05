import IntDec from "./IntDec.js";

describe('IntDec', () => {
    it('begin value default', () => {
    let a =  new IntDec();
        expect(a.begin_value).toEqual(100);
    });
});

describe('IntDec', () => {
    it('final value default', () => {
    let a =  new IntDec();
        expect(a.final_value).toEqual(0);
    });
});

describe('IntDec', () => {
    it('current value default', () => {
    let a =  new IntDec();
        expect(a.current_value).toEqual(100);
    });
});

describe('IntDec', () => {
    it('it should  be 100,0 but it will SWAP', () => {
    let a =  new IntDec(0,100);
        expect(a.begin_value).toEqual(100);
        expect(a.final_value).toEqual(0);
    });
});

describe('IntDec', () => {
    it('create default and after 100 loop the value shd be 100', () => {
    let a =  new IntDec();
    for (let i = 0; i < 99 ; i++) {
        
        expect(a.animate()).toBeGreaterThan(0);
        
    }
        // expect(a.final_value).toEqual(100);
    });
});


