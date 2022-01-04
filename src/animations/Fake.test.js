import Fake from "./Fake.js";

describe('name: animation_object', () => {
    it('check name', () => {
    let a =  new Fake();
        expect(a.name).toEqual("fake");
    });
});
describe("id: 5rdeswa", () => {
    it('Compute the square of a number', () => {
    let a =  new Fake();
        expect(a.id).toEqual("5rdeswa");
    });
});
describe('necessary: true', () => {
    it('Compute the square of a number', () => {
    let a =  new Fake();
        expect(a.necessary).toEqual(true);
    });
});
describe('completed: false', () => {
    it('Compute the square of a number', () => {
    let a =  new Fake();
        expect(a.completed).toEqual(false);
    });
});
describe('component_target', () => {
    it('Compute the square of a number', () => {
    let a =  new Fake();
        expect(a.component_target).toEqual("x");
    });
});

///--- now lets run the animate fn with different values (except 100) and check it should Not be completed
describe('animate fn need 100 to complete', () => {
    it('no 100 as old_val', () => {
    let a =  new Fake();
    // index is less tha 100 so it should never complete
        for (let i = 0; i < 100; i++) {
            let u = a.animate(i);
            expect(u).toEqual(i);
            expect(a.completed).toEqual(false);
        }
    });
});

//--chq that animate fn should complete with old_val=100

describe('animate fn need 100 to complete', () => {
    it('100', () => {
        let a =  new Fake();
        let u = a.animate(100);
        expect(u).toEqual(100);
        expect(a.completed).toEqual(true);
    });
});