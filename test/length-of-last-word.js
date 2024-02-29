var assert = require('assert');
var lengthOfLastWord = require("../src/length-of-last-word")

describe('Length Of Last Word', function () {
  describe('#lengthOfLastWord(s)', function () {
    it('should return the length of the last word in a string', function() {
      assert.strictEqual(lengthOfLastWord("Hello World"), 5);
  });

  it('should return 0 if the string is empty', function() {
      assert.strictEqual(lengthOfLastWord(""), 0);
  });

  it('should handle strings with trailing spaces', function() {
      assert.strictEqual(lengthOfLastWord("Hello World   "), 5);
  });

  it('should handle strings with leading spaces', function() {
      assert.strictEqual(lengthOfLastWord("   Hello World"), 5);
  });

  it('should handle strings with multiple spaces between words', function() {
      assert.strictEqual(lengthOfLastWord("Hello     World"), 5);
  });

  it('should return the correct length when the last word is numbers', function() {
      assert.strictEqual(lengthOfLastWord("The length of the last word is 5"), 1);
  });
  });
});