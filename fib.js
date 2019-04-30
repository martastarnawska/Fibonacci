function fib(num) {
    const array = [];

    if (typeof num === 'number' && num > 0 && Number.isInteger(num)) {
        for (let i = 0; i < num; i++) {
            if (i === 0) {
                array.push(0);
            } else if (i === 1) {
                array.push(1);
            } else {
                let last = array[array.length - 1];
                let penultimate = array[array.length - 2];
                let next = last + penultimate;
                array.push(next);
            }
        }
        return array;
    }
    console.log("argument needs to be a positive integer");
}

module.exports = fib;