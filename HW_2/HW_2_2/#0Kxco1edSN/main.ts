
function list (listItem:string, number:number):void {

    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${listItem}</li>`)
    }
    document.write(`<ul>`)
}
list('hello', 3)
