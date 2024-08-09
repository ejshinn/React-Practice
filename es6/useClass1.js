// useClass1.js

// ES5에서는 클래스를 정의하는 문법이 없었기 때문에 prototype을 사용하여 클래스처럼 표현하여 사용
// ES6에서는 클래스를 정의하기 위한 'class' 키워드가 추가됨
// 자바의 클래스 사용법과 비슷함
// ES6의 클래스의 생성자는 constructor라는 메서드로 고정되어 있음
// 클래스의 필드는 선언 방법이 2가지
    // 자바의 클래스 필드를 사용하는 방식과 동일하게 선언
    // 클래스의 메서드 안에서 'this.필드명' 형태로 선언
// 'static' 키워드 사용 시 정적 멤버로 사용
// 'extends' 키워드를 사용하여 클래스 상속 가능

console.log("----- ES5에서 클래스 선언 -----");

// 방법1
// 함수 선언(생성자로 사용할 함수)
function Shape(x, y) {
    this.name = 'shape';
    this.move(x, y);
}

// 클래스 선언
Shape.create = function(x, y) {
    return new Shape(x, y);
}

// prototype을 사용하여 메서드 선언
Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.area = function() {
    return 0;
}

// 방법2
// Shape.prototype = {
//     move: function(x, y) {
//         this.x = x;
//         this.y = y;
//     },
//     area: function() {
//         return 0;
//     },
// };

var s1 = Shape.create(0, 0);
console.log(s1.area());

var s2 = new Shape(0, 0);
console.log(s2.area());