/*
Description:
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
*/

function maps(x){
    return x.map(n => n * 2);
}

/*
Sample Test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", ()=>{
    it("Fixed tests", () => {
        assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
        assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
        assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
    });
});

*/