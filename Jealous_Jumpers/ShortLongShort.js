/*
Description:
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).
For example:
solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"
*/

function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
}

/*
Sample Test

describe("Sample tests", function() {
  it("Should pass sample tests", function() {
    Test.assertEquals(solution('45', '1'), '1451');
    Test.assertEquals(solution('13', '200'), '1320013');
    Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
    Test.assertEquals(solution('U', 'False'), 'UFalseU');
  });
});
    
*/