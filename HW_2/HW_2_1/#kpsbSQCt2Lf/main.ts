function swap(arr:number[], index1:number, index2:number) {
    let temp:number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

swap([11, 22, 33, 44], 0, 1);