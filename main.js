import { fibonacciSequence } from "../FibonacciSequence/fibonacciSequence.js"
import promptSync from 'prompt-sync';

const prompt = promptSync();
const nValue = prompt('Enter the required N value(greater than 1): ');

if(nValue <= 0) {
    console.log('Enter a positive value.');
} else {
    let seq = fibonacciSequence(nValue)
    if (seq == -1) {
        console.log('Input is incorrect');
        // return 0;
    }
    else {
        seq.forEach(function(val) {
            console.log(val);
        });
    }
}

// exports.fibonacciSequence = fibonacciSequence;
// console.log(module)