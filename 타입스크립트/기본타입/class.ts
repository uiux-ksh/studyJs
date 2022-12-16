//class
//타입스크립은 먼저 선언해줘야함 color:string 아니면 매개변수에 public이나 readonly사용(접근제한자)
//private는 #color로 사용가능
//protected는  자식클래스 내부에만 접근 가능 클래스인스턴스로는 사용 x 퍼블릭은 모두 가능
class Car {
    // color:string
    constructor(public color:string) {
        this.color =color;
    }
    start() {
        console.log('start')
    }
}
const bmw = new Car('red');