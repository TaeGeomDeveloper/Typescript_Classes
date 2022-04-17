
// readonly properites

class Person3 {
  public readonly name: string = "TaeGeom";
  private readonly country: string;

  public constructor(private _name: string,private age : number) {
    this.country = "Korea";
  }

  hello() {
    //this.country = "China";
  }
}

const p3: Person2 = new Person2("Amy",27);

console.log(p3.name);
p3.name = "TaeGeom";
console.log(p3.name);