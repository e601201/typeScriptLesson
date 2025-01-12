function copy<T extends { name: string; age: number }, U extends keyof T>(
  value: T,
  val: U
): T {
  console.log(value[val]);
  return value;
}
console.log(copy({ name: "Quill", age: 35 }, "age"));

const arrowFunc = <T>(num: T): T => num;
const tempHuman = {
  greeting<T>(message: T): void {
    console.log(message);
  },
};

// class に対するジェネリクス
class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data = this.data.filter((i) => i !== item);
  }
  get() {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());

// interface に対するジェネリクス
interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

// Utility Types

interface Todo {
  title: string;
  text: string;
}
// パーシャル型
type Todoable = Partial<Todo>; // title?: string | undefined; text?: string | undefined;
// Readonly型
type ReadTodo = Readonly<Todo>; // readonly title: string; readonly text: string;

// Promiseの型
const fetchData2: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
fetchData2.then((data) => {
  const res = data.toUpperCase();
  console.log(res);
});

// Map型 配列のgenericsと同じように型を指定する
const vegetables: Array<string> = ["Tomato", "Broccoli", "Asparagus"];

// デフォルトの型パラメータ
interface ResponseData<T = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;
tmp = {
  data: "hello",
  status: 200,
};

// Mapped Types
interface vegetables {
  readonly tomato: string;
  pumpkin?: string;
}

type MappedTypes2 = {
  -readonly [P in keyof vegetables]-?: vegetables[P];
};
type MappedTypes3 = {
  -readonly [P in keyof vegetables]-?: P; // 帰り値をPにするとリテラル型になる
};

type MappedTypes<T> = {
  -readonly [P in keyof T]-?: T[P];
};

const mapped: MappedTypes<vegetables> = {
  tomato: "tomato",
  pumpkin: "pumpkin",
};

// Conditional Types

type ConditionalType = "tomato" extends string ? number : boolean;
type ConditionalType2 = 100 extends string ? number : boolean;

// inferキーワード
type ConditionalInfer<T> = T extends infer U ? U : number;
const conditionalInfer: ConditionalInfer<string> = "hello";

type DistributiveConditionalType<T> = T extends "tomato" ? number : boolean;
let tmp2: DistributiveConditionalType<"tomato" | "pumpkin">;
let tmp3: DistributiveConditionalType<string>;

let tmp4: NonNullable<string | null>; // type NonNullable<T> = T & {};

let tmp5: ReturnType<() => string>; // type ReturnType<T> = T extends (...args: any[]) => infer U ? U : any;

// テンプレートリテラル型
type World = "world" | "Japan" | "Canada";
type Greeting = `hello ${World}`;
const key: Greeting = "hello world";
const key2: Greeting = "hello Japan";
const key3: Greeting = "hello Canada";
