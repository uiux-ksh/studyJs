class Person{
    constructor(name,first,second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype :' + (this.first + this.second);
    }
}
class PersonPlus extends  Person {
    avg() {
        return (this.first + this.second)/2;
    }
}


let kim = new PersonPlus('kim',10,20);
let lee = new PersonPlus('lee',10,10);
console.log(kim.sum(),lee.avg());