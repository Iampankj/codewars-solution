
/*
Description:
Create a function called shortcut to remove all the lowercase vowels in a given string.
Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.
*/

function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}


/*
Sample Test

const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

it("sample tests", () => {
  doTest('hello', 'hll');
  doTest('how are you today?', 'hw r y tdy?');
  doTest('complain', 'cmpln');
  doTest('never', 'nvr');
});
*/