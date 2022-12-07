function Person(name,first,second,third) {
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third,
        this.sum =function () {
            return  this.first + this.second+this.third;
        }
}
let kim = new Person('kim',10,20,30);
let lee = new Person('lee',10,10,10);
// let kim = {
//     name:"kim",
//     first:10,
//     second:20,
//     third:30,
//     sum:function () {
//         return  this.first + this.second+this.third;
//     }
// }


// let lee = {
//     name:"lee",
//     first:10,
//     second:10,
//     third:10,
//     sum:function () {
//         return  this.first + this.second+this.third
//     }
// }
let dl = new Date('2022-4-10');


console.log(kim.sum(),lee.sum(),dl.getMonth()+1);
//new(생성자함수) <== 생성자가 됩니다.
console.log(new Person());