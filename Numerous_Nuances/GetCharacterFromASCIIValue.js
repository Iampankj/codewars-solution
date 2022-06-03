/*
Description:
Get character from ASCII Value
Write a function getChar/GetChar/get_char which takes a number and returns the corresponding ASCII char for that value.
Example:
getChar(65) # => 'A'
For ASCII table, you can refer to http://www.asciitable.com/
*/

function getChar(c) {
    return String.fromCharCode(c)
}

/*
Sample Test

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getChar(55),'7')
Test.assertEquals(getChar(56),'8')
Test.assertEquals(getChar(57),'9')
Test.assertEquals(getChar(58),':')
Test.assertEquals(getChar(59),';')
Test.assertEquals(getChar(60),'<')
Test.assertEquals(getChar(61),'=')
Test.assertEquals(getChar(62),'>')
Test.assertEquals(getChar(63),'?')
Test.assertEquals(getChar(64),'@')
Test.assertEquals(getChar(65),'A')
  });
});

*/