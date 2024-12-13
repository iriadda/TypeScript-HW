
let filterArr:(array:(string|number|boolean)[])=>void = (array:(string|number|boolean)[]):void => {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
     document.write(`</ul>`)
}
filterArr([6262, -6656, 'hello', 'world', true])
