abstract class Person {
  // // フィールド
  // name: string;
  // private age: number;

  // // コンストラクタ
  // // constructorはクラスのインスタンスを生成する際に呼び出される特別なメソッド
  // // ちなみに、constructorは予約語なので、メソッド名としては使えない
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }

  // コンストラクタの省略記法
  constructor(public readonly name: string, protected age: number) {}

  // staticメソッド
  static isAdult(age: number): boolean {
    return age >= 20;
  }
  static species = "Homosapiens";

  // メソッド
  greet(this: Person): string {
    return `Hello, my name is ${this.name} and I am ${
      this.age
    } years old. We are ${Person.species} 
    and ${this.explainJob()}`;
  }

  inclementAge(): void {
    this.age++;
  }
  // greet = (): string =>
  //   `Hello, my name is ${this.name} and I am ${this.age} years old.`;

  // abstractメソッド
  abstract explainJob(): string;
}
// let person1: Person;
// person1 = new Person("Bob", 30);
// console.log(person1.greet()); // Hello, my name is Bob and I am 30 years old.
// このように、抽象クラスは直接インスタンスを生成することができません。

// const alice = new Person("Alice", 30);
// console.log(alice.greet()); // Hello, my name is Alice and I am 30 years old.
// alice.inclementAge();
// console.log(alice.greet()); // Hello, my name is Alice and I am 31 years old.
// alice.age = 25; // error TS2341: Property 'age' is private and only accessible within class 'Person'.
// このように、クラスのフィールドにprivate修飾子をつけると、そのフィールドはクラスの外部からアクセスできなくなります。

// alice.name = "Alice2"; // error TS2540: Cannot assign to 'name' because it is a read-only property.
// このように、クラスのフィールドにreadonly修飾子をつけると、そのフィールドは読み取り専用になります。

// クラスの継承
class Teacher extends Person {
  explainJob(): string {
    return `I am a teacher and I teach ${this.subject}.`;
  }
  // ゲッター
  get subject(): string {
    return this._subject;
  }

  // セッター
  set subject(value: string) {
    this._subject = value;
  }

  constructor(name: string, age: number, public _subject: string) {
    super(name, age);
    super.greet();
  }

  // greet(this: Teacher): string {
  //   // return `${super.greet()} I teach ${this.subject}.`;
  //   return `Hello, my name is ${this.name} and I am ${this.age} years old. I teach ${this.subject}.`;
  // }
}
const teacher = new Teacher("Tom", 40, "Math");
console.log(teacher.greet()); // Hello, my name is Tom and I am 41 years old. I teach Math.

// console.log(teacher.subject); // Math
// teacher.subject = "Science";
// console.log(teacher.subject); // Science

// staticメソッド
// console.log(Math.abs(-100)); // 100
// console.log(Person.isAdult(10)); // false
// console.log(Person.species); // Homosapiens
