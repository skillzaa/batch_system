import x  from "./location.js";
// import jest_test from "./location.js";
// import square from 'test.mjs';
 
describe('square function', () => {
    it('Compute the square of a number', () => {
        expect(x(2)).toEqual(4);
    });
});
