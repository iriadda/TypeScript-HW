let arrayFilter:(array:(string|number|boolean)[])=>void =(array:(string|number|boolean)[]):void => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
arrayFilter([215, -245, true, 'hshhs']);
