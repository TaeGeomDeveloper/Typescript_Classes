"use strict";
// Quick start - class
class Person {
    constructor(name) {
        this.age = 27;
        // 1) constructor 를 이용하여 클래스에서 함수 선언을 해준다.
        this.name = name;
    }
}
const p1 = new Person("TaeGeom");
p1.height = 186;
console.log(p1);
