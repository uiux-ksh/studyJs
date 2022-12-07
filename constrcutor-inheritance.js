function Person(name,first,second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sun = function () {
    return this.first + this.second;
}

function PersonPlus(name,first,second,third) {
    //this.Person안에 객체
     Person.call(this,name,first,second);
     this.third = third
}
PersonPlus.prototype.__proto__ = Person.prototype;
//__proto_  리플레이스안하기때문에 아래선언되고 오류가아나는데 아래 코드는 avg함수 아래 입력시 리플레이스 일어나 오류가 납니다.
// PersonPlus.prototype = Object.create(Person.prototype);
// PersonPlus.prototype.constructor = PersonPlus;
PersonPlus.prototype.avg = function (){
    return (this.first + this.second + this.third) /3;
}

let kim = new PersonPlus('kim',10,10,30);
console.log(kim.sun());
console.log(kim.avg());
console.log(kim.constructor);
//누가 만들어줬는데 확인할때도 사용한다