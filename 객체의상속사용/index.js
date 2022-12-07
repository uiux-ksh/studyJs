kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function () {
        return this.first + this.second;
    }
}


let lee = Object.create(kim);
lee.name = 'lee'
lee.first = 10;
lee.second = 10;
lee.avg = function () {
    return(this.first + this.second) /2 ;
}
// lee = {
//     name:'lee',
//     first:10,second:10,
//     avg:function (){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__=kim

console.log(kim.sum(),lee.sum(),lee.avg());