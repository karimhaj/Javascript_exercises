function sum(...args) {
    return args.reduce((current,next)=>current+next);
}

console.log(sum(1, 2, 3, 4, 5));