export function fibonacciSequence(nthNumber) {
    // check if number is zero or if not a number
    if (nthNumber == 0 || isNaN(nthNumber)) return -1;

    let x1 = 0, x2 = 0, current = 1;

    let sequence = nthNumber >= 2 ? [x1, current] : [x1]

    for (let i = 2; i < nthNumber ; i++) {
        x1 = x2;
        x2 = current;
        current = x1 + x2;
        sequence.push(current)
    }
    return sequence;
}