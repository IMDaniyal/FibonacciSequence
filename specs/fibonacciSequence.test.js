import { fibonacciSequence } from "../fibonacciSequence.js"

describe('Valid inputs', () => {
    let firstNumberInSequence = [0];
    let firstTwoNumbersInSequence = [0,1];
    let firstTenNumbersInSequence = [0,1,1,2,3,5,8,13,21,34];
    test('first number in sequence', () => {
        expect(fibonacciSequence(1)).toStrictEqual(firstNumberInSequence);
    });
    test('first two numbers in sequence', () => {
        expect(fibonacciSequence(2)).toStrictEqual(firstTwoNumbersInSequence);
    });
    test('first 10 numbers in sequence', () => {
        expect(fibonacciSequence(10)).toStrictEqual(firstTenNumbersInSequence);
    });
    test('nth value given as string which is a number', () => {
        expect(fibonacciSequence("2")).toStrictEqual(firstTwoNumbersInSequence);
    });
})
describe('Invalid inputs', () => {
    let invalidInput = -1;
    test('nthValue given as 0', () => {
        expect(fibonacciSequence(0)).toStrictEqual(invalidInput);
    });
    test('nthvalue given as string which is not number', () => {
        expect(fibonacciSequence("qwe")).toStrictEqual(invalidInput);
    });
})
