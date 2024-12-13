function arrayMin(numbers:number[]):number {
    let min:number = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}

arrayMin([56, - 5, 456, 54, 12, 78]);