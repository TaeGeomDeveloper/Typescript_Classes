"use strict";
// Static Properties & Methods
class Person4 {
    hello() {
        console.log("안녕하세요", Person4.CITY);
    }
    change() {
        Person4.CITY = "LA";
    }
}
Person4.CITY = "Seoul";
const p4 = new Person4();
p4.hello();
const p5 = new Person4();
p5.hello();
p4.change();
p4.hello();
