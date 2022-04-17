
// 클래스로 부터 단하나의 패턴을 받는것을 싱글톤 이라 한다.

// Singletons

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

const s_a = ClassName.getInstance();
const s_b = ClassName.getInstance();

console.log(a === b);