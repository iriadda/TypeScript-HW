let arrMin:(arrOfNum:number[])=>number = (arrOfNum:number[]):number => {

    let min = arrOfNum[0];
    for (const number of arrOfNum) {
        if (number < min) {
            min = number
        }
    }
    return min;
}
arrMin([56, - 5, 456, 54, 12, 78]);
