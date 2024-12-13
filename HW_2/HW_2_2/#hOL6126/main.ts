
let listWrit:(listItem:string)=>void = (listItem:string):void =>     document.write(`<ul>
    <li>${listItem}</li>
    <li>${listItem}</li>
    <li>${listItem}</li>
    </ul>`)

listWrit('hello')