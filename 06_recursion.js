const factorial = (n) => {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(7));

const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

console.log(fibonacci(8));