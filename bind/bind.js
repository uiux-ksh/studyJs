let kim = {name:'kim', first:20,second:30}
let lee = {name:"lee", first:10,second:10}
function  sum(prefix) {
    //this = kim;
    return prefix + (this.first + this.second);
}
console.log(sum.call(kim,40));
//call 첫번쨰인자 this 지정 ,두번째부터 파라미터
console.log(sum.call(lee,"hello:"));
let kimSun = sum.bind(kim,'bind');
//sum 새로운 함수가 만들어줘서 리턴하게된다. 기존의 sum에 영향을안줍니다.
console.log(kimSun());
