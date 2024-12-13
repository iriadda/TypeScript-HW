type userArrayParam ={id: number, name: string, age: number}[]
let printArray:(array:userArrayParam)=>void = (array:userArrayParam) => {
    for (const user of array) {
        document.write(`<div><h3>${user.id} ${user.name}</h3> <p>${user.age}</p></div>`);
    }
}


class UserUser {
    id: number
    name: string
    age: number

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
const userArray: UserUser[] = [
    new UserUser(1, `vasia`, 30),
    new UserUser(2, `olia`, 32),
    new UserUser(3, `oleh`, 32)
]

printArray (userArray)