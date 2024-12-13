function filterArray (array:(number | string | boolean)[]):void{
    for (const item of array) {
        document.write(`<ul>
            <li>${item}</li>
        </ul>`)
    }
}

let array: (number | string | boolean)[] = [6262, -6656, 'hello', 'world', true];
filterArray(array)