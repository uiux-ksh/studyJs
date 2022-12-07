//어떤 메소드에서 그 메소드가 속해 있는 객체를 가리키는 특수한 키워드 또는 프로그래밍에서 자기자신 가리는것을 this 라고한다.
let kim = {
    name:"kim",
    first:10,
    second:20,
    sum:function () {
        return  this.first + this.second
    }
}

console.log(kim.sum());

