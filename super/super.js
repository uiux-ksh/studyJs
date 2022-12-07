class Person{
    constructor(name,first,second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return  (this.first + this.second);
    }
}
class PersonPlus extends  Person {
    constructor(name,first,second,third) {
        super(name,first,second);
        this.third= third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg() {
        return (this.first + this.second)/2;
    }
}


let kim = new PersonPlus('kim',10,20,30);
let lee = new PersonPlus('lee',10,10,20);
console.log(kim.sum(),lee.avg());