let calculate:(arr:number[])=>number = (arr:number[]):number => {

    let result = 0;
    for (const item of arr) {
        result = result + item;
    }
    return result;
};
calculate([1, 2, 10]);
