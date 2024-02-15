import { describe } from "mocha";

describe("1 : Validity check for Parentheses", () => {
  describe("Testing with invalid values", () => {
    it("Should return false for the input '(' ", () => assert.strictEqual(validParentheses("("), false));
    it("Should return false for the input '())' ", () => assert.strictEqual(validParentheses("())"), false));
    it("Should return false for the input ')' ", () => assert.strictEqual(validParentheses(")"), false));
  });

  describe("Should return true with valid values", () => {
    it("Should return true for the input'()'", () => assert.strictEqual(validParentheses("()"), true));
    it("Should return true when given an empty string", () => assert.strictEqual(validParentheses(""), true));
  });
});


describe('2 : Scrambled Strings that can be arranged to make another word', function () {
  it("Should return true for the inputs 'rkqodlw', and 'world' as 'rkqodlw' can be arranged to form 'world'", function () {
    assert.strictEqual(scramble('rkqodlw', 'world'), true);
  });

  it("Should return true for 'codewars' can be obtained by arrangint 'cedewaraaossoqqyt'", function () {
    assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'), true);
  });

  it("Should return true or false accordingly with those inputs", function () {
    assert.strictEqual(scramble('katas', 'steak'), false);
    assert.strictEqual(scramble('scriptjavx', 'javascript'), false);
    assert.strictEqual(scramble('scriptingjava', 'javascript'), true);
    assert.strictEqual(scramble('scriptsjava', 'javascripts'), true);
    assert.strictEqual(scramble('javscripts', 'javascript'), false);
    assert.strictEqual(scramble('jscripts', 'javascript'), false);
    assert.strictEqual(scramble('aabbcamaomsccdd', 'commas'), true);
    assert.strictEqual(scramble('commas', 'commas'), true);
    assert.strictEqual(scramble('sammoc', 'commas'), true)
  });
});


describe("3 : Pangram Detection, meaning it contains all letters from a to z (case insensitive).", () => {
  it("Should return true when given a pangram string", () => {
    assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
  });

  it("Should return false when given a non-pangram string", () => {
    assert.strictEqual(isPangram("This is not a pangram."), false);
  });
});


describe("4: Array Difference : array1 - array2 !", () => {
  it("Should return an array with all the elements of the array1, without all the elements of the array2", () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2]);
    assert.deepEqual(arrayDiff([1, 2, 2], [1]), [2, 2]);
    assert.deepEqual(arrayDiff([1, 2, 2], [2]), [1]);
    assert.deepEqual(arrayDiff([1, 2, 2], []), [1, 2, 2]);
    assert.deepEqual(arrayDiff([1, 2, 3], [1, 2]), [3]);
  });

  it("should return an empty array, when the array1 itself is an empty element.", () => {
    assert.deepEqual(arrayDiff([], [1, 2]), []);
  });
});


describe("5 : Reverse Words in a String, beware of space(s)", () => {
  it("Should reverse words in a sentence with a single space.", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 
      'ehT kciuq nworb xof spmuj revo eht yzal .god');

    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
  });

  it("Should work even when there are double spaces in between words.", () => {
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});


describe("6 : Apply Backspace Character represented by #", () => {
  it("Should remove all backspace characters, and make them delete the previous letter.", () => {
    assert.strictEqual(cleanString('abc#d##c'), 'ac');
  });

  it("Should return an empty string when everything has been backspaced.", () => {
    assert.strictEqual(cleanString('abc####d##c#'), '');
  });
});


describe("7 : Alert the Sheep VS. the 1 wolf. You're at the end of the array : ['sheep3','sheep2','wolf','sheep1'] (YOU)", () => {
  describe("The one and only wolf is somewhere amongst your sheeps.", function () {
    it("Should return 'Run sheep 2!' for the given input: the last sheep in the array is #1, the one before it #2",  () => {
      assert.strictEqual(alertSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Run sheep 2!");
    });

    it("Should return 'Run sheep 5!' for the given input.", function () {
      assert.strictEqual(alertSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Run sheep 5!");
    });

    it("Should return 'Run sheep 1!' for the given input.", function () {
      assert.strictEqual(alertSheep(["sheep", "wolf", "sheep"]), "Run sheep 1!");
    });
  });

  describe("The one and only wolf is right in front of you : tell it 'Go away!'", function () {
    it("should return 'Go away!' when the wolf is right in front of you", function () {
      assert.strictEqual(alertSheep(["wolf"]), "Go away!");
      assert.strictEqual(alertSheep(["sheep", "sheep", "wolf"]), "Go away!");
    })
  });
});


describe("8 : Generate this HTML tag(s) <a href='url'> text </a> from an array of objects", () => {
  it("should work with normal links be it with # or a complete url", () => {
    expect(generateMenu([{ url: "http://www.google.com", text: "10^100" }])).to.equal(
      `<a href="http://www.google.com">10^100</a>`
    );

    expect(generateMenu([{ url: "#hei", text: "hei" }])).to.equal(`<a href="#hei">hei</a>`,);
  });

  it("should work with numbers as content for the a tag", () => {
    expect(generateMenu([{ url: "#123", text: 123 }])).to.equal(`<a href="#123">123</a>`);
  });

  it("should generate two a tags when there are two objects in the array input", () => {
    expect(generateMenu([{ url: "#q", text: "query" }, { url: "#a", text: "ans" }]))
      .to.equal(`<a href="#q">query</a><a href="#a">ans</a>`);
  });
  // IF you want to add " inside of "", add it like this \" to avoid closing the double quote (not needed for backticks).
});


describe("9 : Two types, double sort ! int first, and then strings, both in ASCENDING ORDER order!", function () {
  it("should return the sorted array when the array is only made of numbers", function () {
      assert.deepEqual(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
      assert.deepEqual(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
      assert.deepEqual(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  it("should return the sorted array when the array is only made of strings", function(){
      assert.deepEqual(dbSort(["Strawbery","Apple", "Banana"]), ["Apple", "Banana", "Strawberry"]);
  });

  it("should perform a double sort for mixed inputs, first comes the sorted ints, and then the sorted strings", function(){
      assert.deepEqual(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0, 2, 2, "Apple", "Banana", "Mango", "Orange"]);
      assert.deepEqual(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0, 1, 2, "C", "W", "W", "W"]);
      assert.deepEqual(dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']);
  });
});