let kim = {name:'kim', first:20,second:30}
let lee = {name:"lee", first:10,second:10}
function  sum(prefix) {
    //this = kim;
    return prefix + (this.first + this.second);
}
console.log(sum.call(kim,40));
//call 첫번쨰인자 this 지정 ,두번째부터 파라미터
console.log(sum.call(lee,"hello:"));
// sum(); 이거와 같은거 모든함수는 콜을 가지고있다.
