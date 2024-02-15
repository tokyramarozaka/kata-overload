import { assert, expect } from "chai";
import { describe, it } from "mocha";

describe("1 : Trim the string to n-letters and add ...", () => {
    it("should trim the first input string, by only keeping the same number of letters as the second int parameter, followed by ...", () => {
        assert.strictEqual(trim("He", 1), "H...");
        assert.strictEqual(trim("Creating kata is fun", 14), "Creating kata ...");
    });

    it("should return the original string when the second int parameter is higher than the string's actual length", () => {
        assert.strictEqual(trim("A short sentence", 50), "A short sentence");
    });

    it("should return just ... when the second parameter is equal to 0", () => {
        assert.strictEqual(trim("A simple Kata", 0), "...");
    });
});


describe("2 : See the test and guess what the accum function does", function () {
    it("should return those bizarre outputs which are separated by '-' and seem to increase in length every time", function () {
        assert.strictEqual(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
        assert.strictEqual(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
        assert.strictEqual(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
        assert.strictEqual(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
        assert.strictEqual(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
    });
})


describe("3 : Break the camel case !", function () {
    it("should return an empty string when the input itself is an empty string", function () {
        assert.strictEqual(breakCamelCase(""), "");
    });

    it("should return the original string when there is only a single word", function () {
        assert.strictEqual(breakCamelCase("test"), "test");
    });

    it("should return two words separated by space when the input has two words in camel case", function () {
        assert.strictEqual(breakCamelCase("camelCasing"), "camel Casing");
    });

    it("should return three words separated by space when the input has three words in camel case", function () {
        assert.strictEqual(breakCamelCase("camelCasingTest"), "camel Casing Test");
    });
});


describe("4: Create a function to decode the hidden message within an array of strings", () => {
    it("should return yes when the input is ['yoda', 'best', 'has']. 'y' from the first string, 'e' from the second string, and 's' from the third string", () => {
        assert.strictEqual(nthChar(['yoda', 'best', 'has']), 'yes');
    });

    it("should return an empty string when the input array has no words at all.", () => {
        assert.strictEqual(nthChar([]), '');
    });
});


describe("5 : Remove the smallest number in an array of distinct numbers. DO NOT MODIFY the original input array.", function () {
    it("should remove the smallest integers within an array of numbers.", function () {
        expect(removeSmallest([1, 2, 3, 4, 5])).to.have.members([2, 3, 4, 5]);
        expect(removeSmallest([1, 2, 3, 4, 5])).to.not.include(1);

        expect(removeSmallest([5, 3, 2, 1, 4])).to.have.members([5, 3, 2, 4]);
        expect(removeSmallest([5, 3, 2, 1, 4])).to.not.include(1);
    });

    it("should return an empty array when the input array is empty.", function () {
        assert.deepEqual(removeSmallest([]), [], "Wrong result for []");
    });

    it("returns an empty array if the list has only one random element.", function () {
        for (let i = 0; i < 10; ++i) {
            let x = Math.floor(Math.random() * 400); // random number
            assert.deepEqual(removeSmallest([x]), [], `Wrong result for ${[x]}`);
        }
    });
});


describe("6: Turn those sentences into Pascal Case. Pascal case is like camelCase, but the first letter is in upper case.", () => {
    it("should turn the input into Pascal when words are separated by spaces", function () {
        assert.strictEqual(pascalCase("test case"), "TestCase");
        assert.strictEqual(pascalCase("camel case word"), "CamelCaseWord");
    });

    it("should return the original input when it has only one word, but with the first letter capitalized", function () {
        assert.strictEqual(pascalCase("test"), "Test");
    });

    it("should return an empty string when the input is an empty string", function () {
        assert.strictEqual(pascalCase(""), "");
    });
});

// 7 was skipped out of pure mistake
describe('8 : merge the two arrays of different types by alternating them', function () {
    it('should merge arrays successfully when both of the input are of equal sizes', function () {
        assert.deepEqual(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
        assert.deepEqual(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
        assert.deepEqual(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
    });

    it("should merge the two arrays, even when the two array's length are not equal", function () {
        assert.deepEqual(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
    });
});


describe("9 : Find the sum of both diagonals inside a square matrix (number of columns == number of rows).", () => {
    it("should work when the matrix is 3x3 in size.", () => {
        assert.equal(sum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 1 + 5 + 9 + 3 + 5 + 7);
    });

    it("should take into account that for a matrix of size 1x1, the sum of both its diagonal is equal to the single element", () => {
        assert.equal(sum([[10]]), 10);
    });
});