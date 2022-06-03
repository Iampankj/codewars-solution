/*
Description:
Write function avg which calculates average of numbers in given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
    if(array.length > 0){
        return array.reduce((result, current) => result + current, 0) / array.length;
    }else{
        return 0;
    }
    
}
/*
Sample Test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(find_average([1,1,1]), 1);
    assert.strictEqual(find_average([1,2,3]), 2);
    assert.strictEqual(find_average([1,2,3,4]), 2.5);
  });
});  

*/