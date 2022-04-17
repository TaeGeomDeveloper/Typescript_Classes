// Access Modifiers

/*
class Person2 {
  public name : string = "TaeGeom"
  public age !: number;  
  
  constructor(age ?: number) {       
    if( age === undefined )
      this.age = 20;
      else
        this.age = age;
  }

  height !: number;

  public async init() {}
}
*/

// getters & setters

class Person2 {
  public constructor(private _name: string,private age : number) {}

  get name() {  
    return this._name + " Yoon"; 
  }
  set name(N:string) { 
    console.log("set");  
    this._name = N;
  }

  height !: number;
}

const p2: Person2 = new Person2("Amy",27);

p2.height =186;
console.log(p2.name);
p2.name = "TaeGeom";
console.log(p2.name);
