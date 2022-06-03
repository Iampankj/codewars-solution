/*
Description:
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
Upper or lower case letter does not matter -- "eNglisH" is also correct.
Return value as boolean values, true for the string to contains "English", false for it does not.
*/

function spEng(sentence){
    const reg = /english/i;
    
    return reg.test(sentence);
}

/*
Sample Test

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(spEng("english"), true);
Test.assertEquals(spEng("egnlish"), false);
  });
});

*/