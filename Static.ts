// Static Properties & Methods

class Person4 {

  private static CITY = "Seoul";
  public hello(){
    console.log("안녕하세요",Person4.CITY);
  }
  public change(){
    Person4.CITY ="LA";
  }
}

const p4 = new Person4();
p4.hello();

const p5 = new Person4();
p5.hello();

p4.change();
p4.hello();