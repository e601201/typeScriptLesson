class secondPerson {
  constructor(public name: string, private age: number) {}
  greet(this: secondPerson): string {
    return `Hello, my name is ${this.name} and I am ${this.age};`;
  }
}

// シングルトンクラス
class Singleton extends secondPerson {
  private static instance: Singleton;
  private constructor(name: string, age: number) {
    super(name, age);
  }
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton("David", 30);
    }
    return Singleton.instance;
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true
console.log(singleton1.greet()); // Hello, my name is David and I am 30;
console.log(singleton2.greet()); // Hello, my name is David and I am 30;
