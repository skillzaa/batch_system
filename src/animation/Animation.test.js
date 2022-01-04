import Animation from "./Animation.js";
/**
 * The fields are
 * every class must have id and name
    1. name: "animation_object",
    2. id: "5tc&za@G!.,~",
    //the fol 3 are basic data for this class
    // keep in mind batch_number SHOULD BE IN BATCH NOT HERE neither component_id this will be placed inside a component so why we need thats id.
    3. necessary: true,
    4. completed: false,
    5. component_target:x
 */

describe('name: animation_object', () => {
    it('check name', () => {
    let a = new Animation();
        expect(a.name).toEqual("animation_object");
    });
});
describe("id: 5tc&za@G!.,~", () => {
    it('Compute the square of a number', () => {
    let a = new Animation();
        expect(a.id).toEqual("5tc&za@G!.,~");
    });
});
describe('necessary: true', () => {
    it('Compute the square of a number', () => {
    let a = new Animation();
        expect(a.necessary).toEqual(true);
    });
});
describe('completed: false', () => {
    it('Compute the square of a number', () => {
    let a = new Animation();
        expect(a.completed).toEqual(false);
    });
});
describe('component_target', () => {
    it('Compute the square of a number', () => {
    let a = new Animation();
        expect(a.component_target).toEqual("x");
    });
});

///--- now lets run the animate fn with different values (except 100) and check it should Not be completed
describe('animate fn need 100 to complete', () => {
    it('no 100 as old_val', () => {
    let a = new Animation();
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
        let a = new Animation();
        let u = a.animate(100);
        expect(u).toEqual(100);
        expect(a.completed).toEqual(true);
    });
});