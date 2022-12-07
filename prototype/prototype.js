function Person(name,first,second,third) {
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;

}
Person.prototype.sum =function () {
    return 'prototype :' + (this.first + this.second);
}
let kim = new Person('kim',10,20,30);
kim.sum = function () {
    return 'this :' + (this.first + this.second);
}
let lee = new Person('lee',10,10,20);
// kim.sum = function (){
//     return 'modified : '  + (this.first + this.second);
// }
// lee.sum = function () {
//     return 'modified:' + (this.first + this.second);
// }

console.log(kim.sum(),lee.sum());
