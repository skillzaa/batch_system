import exponential from "./exponential.js";


describe('name: animation_object', () => {
    it('check name', () => {
    let a = exponential();
        expect(a.name).toEqual("exponential_animation");
    });
});

describe('name: animation_object', () => {
    it('check name', () => {
    let a = exponential();
    let u = a.animate(2);
        expect(u).toEqual(4);
    });
});

describe('name: animation_object', () => {
    it('check name', () => {
    let a = exponential();
    let u = a.animate(3);
        expect(u).toEqual(9);
    });
});

describe('name: animation_object', () => {
    it('check name', () => {
    let a = exponential();
    let u = a.animate(10);
        expect(u).toEqual(100);
    });
});

describe('name: animation_object', () => {
    it('check name', () => {
    let a = exponential();
    let u = a.animate(5);
        expect(u).toEqual(25);
    });
});