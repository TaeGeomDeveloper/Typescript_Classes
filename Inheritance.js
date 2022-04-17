"use strict";
// 상속 Inheritance
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    ;
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name);
    }
}
// const p = new Parent("Taegeom",29);
// p.print();
class Child extends Parent {
    constructor(age) {
        super("Taegeom Yoon", age);
        this.gender = "male";
        this.printName();
    }
}
const c = new Child(5);
c.print();
