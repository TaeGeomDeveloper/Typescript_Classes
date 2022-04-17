
// Abstarct Classes

abstract class AbstarctPerson {
  protected _name: string = 'Mark';

  abstract setName(name: string): void;
}

// new AbstarctPerson()

class Person6 extends AbstarctPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person6();
//p.setName();