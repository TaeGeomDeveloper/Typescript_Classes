
// Quick start - class

class Person {
  name : string;
  constructor(name: string) {       
    // 1) constructor 를 이용하여 클래스에서 함수 선언을 해준다.
    this.name = name;
  }
  age : number = 27;  
  // 2) 직접 함수 선언 해준다.
  height !: number;
  // 3) !를 사용하여 나중에 함수를 넣어준다. 
}

const p1 = new Person("TaeGeom");
p1.height =186;

console.log(p1);


