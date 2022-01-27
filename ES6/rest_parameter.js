const sum = (...args) => {  
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 35, 2, 102));
console.log(sum(1, 35, 2, 102, 1, 35, 2, 102));
