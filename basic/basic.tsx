interface User {
    name: string;
    age: number;
}


class UserAccount {
    name: string;
    age: number;


    constructor(name: string, age: number ){
        this.name = name;
        this.age = age;
    }
}

const user: User = new UserAccount('kalal', 25);

console.log('USER', user.name);