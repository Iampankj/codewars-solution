/*
Description:
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
Add the value "codewars" to the array websites/Websites 1,000 times.
var websites = []
*/

var websites = [];
while (websites.length < 1000) websites.push("codewars")

/*
Sample Test


describe("Tests", () => {
  it("test", () => {
Test.expect(websites.length > 0, 'The array is still empty')
Test.expect(websites.length == 1000, 'The array does not equal 1,000')
Test.expect(websites.every(function(e){return e == 'codewars';}), 'Every element in the array must contain the value "codewars"');
  });
});



*/
