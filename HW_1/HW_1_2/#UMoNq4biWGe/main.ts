let dayOfMonth:number = +prompt('Введіть число від 1 до 31')
if (dayOfMonth >= 1 && dayOfMonth <= 10) {
    console.log('перша декада місяця')
} else
if (dayOfMonth >= 11 && dayOfMonth <= 20) {
    console.log('друга декада місяця')
} else
if (dayOfMonth >= 21 && dayOfMonth <= 31) {
    console.log('третя декада місяця')
} else
{
    console.log('число має бути від 1 до 31')
}