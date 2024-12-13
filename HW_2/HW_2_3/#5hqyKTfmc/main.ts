enum Direction {
    ascending,
    descending
}
function sortNums(array:number[], direction:Direction):number[]{

    if (direction === Direction.ascending){ return array.sort((a, b) => a - b);}
    if (direction === Direction.descending){ return array.sort((a, b) => b - a);}
}

let nums:number[] = [11,21,3];

console.log(sortNums(nums, Direction.ascending));
console.log(sortNums(nums, Direction.descending));