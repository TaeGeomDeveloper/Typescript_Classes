# Typescript_Classes
타입스크립트 클래스 공부


### constructor & initialize
< _example.ts_ >

```typescript
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
```

### 접근 제어자 Access Modifiers
< _Access.ts_ >

- 접근 제어자에는 public, private, protected 가 있다.
- 설정하지 않으면 public 이다.
- 클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드) 설정 가능하다. 

### Initialization in constructor parameters
< _Access.ts_ >

```typescript
  class Person2 {
  public constructor(private _name: string,private age : number) {}
  }
```

### Getters & Setters
< _Access.ts_ >

```typescript
  get name() {  
    return this._name + " Yoon"; 
  }
  set name(N:string) { 
    console.log("set");  
    this._name = N;
  }
```

### Readonly Properties
< _readonly.ts_ >
get 만 해줄수 있다.

```typescript
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
```

### Index Signatures in class
< _index.ts_ >

```typescript
  class Students {
  //mark: string = 'male';
  //[index: string]: string;
  
    [index: string]: "male"|"female";
  }
  const a = new Students();
```

### Static Properties & Methods
< _Static.ts_ >

```typescript
  class Person4 {
    private static CITY = "Seoul";
    public hello(){
      console.log("안녕하세요",Person4.CITY);
    }
    public change(){
      Person4.CITY ="LA";
    }
  }
```

### 싱글톤 Singletons
< _Singletons.ts_ >
클래스로 부터 단하나의 패턴을 받는것을 싱글톤 이라 한다.

```typescript
  class ClassName {
  private static instance: ClassName | null = null;

  public  static getInstance() {
    // ClassName 으로부터 만든 Objext 가 없으면, 만든다.
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
      return ClassName.instance;  
    }
    private constructor() {};
  }
```

### 상속 (Inheritance)
< _inheritance.ts_ >

```typescript
class Parent {
  constructor(protected _name: string, private _age: number) {};
  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }
    protected printName(): void {
      console.log(this._name);
    }
  }
  class Child extends Parent {
    public gender = "male";
    constructor(age: number) {
      super("Taegeom Yoon",age);

      this.printName();
    }
  }

  const c = new Child(5);
  c.print();
```

### 추상 클래스 Abstract Classes
< _Abstract.ts_ >

완전하지 않는 추상 클래스
```typescript
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
```

