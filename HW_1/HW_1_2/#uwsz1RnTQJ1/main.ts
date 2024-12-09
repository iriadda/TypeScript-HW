let x1:number = parseInt( prompt('введіть 1 число'))
let y:number = parseInt(prompt('введіть 2 число'))
if (x1>y){
    console.log(x1)
}else
    if (y>x1){
    console.log(y)
}else if (x1===y){
        console.log('введено рівні числа')
    }else {
        console.log('введіть числа')
    }
