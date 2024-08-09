// useClass2.js

console.log("----- ES6 방식으로 클래스 사용 -----");

// ES6에서 제공하는 class 키워드를 사용하여 클래스 선언
// Shape 클래스 선언
class Shape {

    // static 키워드를 사용하여 정적 멤버 선언
    static create(x, y) {
        return new Shape(x, y);
    }

    // 클래스의 필드 선언
    name = 'shape';

    // ES6 문법의 클래스에서 생성자 선언
    // 자바스크립트의 클래스에서는 생성자를 1개만 제공
    // 생성자의 이름은 constructor로 고정되어 있음
    constructor(x, y) {
        this.move(x, y);
    }

    // 메서드 선언
    move(x, y) {
        // 메서드 안에서 this.변수명 형태로 사용 시 클래스의 필드로 인식함
        this.x = x;
        this.y = y;
    }

    area() {
        return 0;
    }
}

// 클래스의 객체 생성 시 반드시 new 키워드 사용
const s1 = new Shape(10, 10);
console.log(`객체 s1의 area() 메서드 : ${s1.area()}`);
console.log(`객체 s1의 필드 name : ${s1.name}`);
console.log(`객체 s1의 필드 x : ${s1.x}`);

// 클래스 Shape을 상속받아 구현한 클래스 Circle
class Circle extends Shape {
    // 생성자
    constructor(x, y, radius) {
        // 자바의 super()와 동일한 역할, 부모 클래스의 생성자 호출
        super(x, y);
        // 필드 선언
        this.radius = radius;
    }

    // 부모 클래스인 Shape에서 상속받은 메서드 area()를 오버라이딩함
    area() {
        if(this.radius === 0) {
            // 자바의 super 키워드와 동일한 역할, 부모 클래스의 멤버를 호출
            return super.area();
        }
        return this.radius * this.radius;
    }
}

let c1 = new Circle(10, 20, 1000);
console.log(`상속받아 만든 클래스 객체 c1의 area() 메서드 : ${c1.area()}`);
console.log(c1.area());
c1.move(100, 200);
console.log(`상속받아 만든 클래스 객체 c1의 area() 메서드 : ${c1.area()}`);