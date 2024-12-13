function sum(arr:number[]):number{
    let result:number = 0;
    for (const item of arr) {
        result = result + item;
    }
    return result;
}

sum([1, 2, 10]);