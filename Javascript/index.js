function factorials(num) {
    if (num === 0 || num === 1) {
        return num;
    }
    return num * factorials(num - 1);
}

let n = factorials(8);
console.log(n);