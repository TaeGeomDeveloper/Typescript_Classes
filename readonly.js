"use strict";
// readonly properites
class Person3 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "TaeGeom";
        this.country = "Korea";
    }
    hello() {
        //this.country = "China";
    }
}
const p3 = new Person2("Amy", 27);
console.log(p3.name);
p3.name = "TaeGeom";
console.log(p3.name);
