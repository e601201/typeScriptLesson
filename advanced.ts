// インターセクション型の解説----ここから
type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

// インターセクション型
type WebMaster = Engineer & Blogger;

const webMaster: WebMaster = {
  name: "John",
  role: "Front-end",
  follower: 3000,
};

// ユニオン型
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber; // type is number

// インターセクション型の解説----ここまで

// Typeguradの解説(typeof/in/instanceof)----ここから
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return "";
}

type NomadWorker = Engineer | Blogger;

function describeProfile(nomadWorker: NomadWorker) {
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}

class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;

function havePet(pet: Pet) {
  pet.speak();

  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
  // if ("fly" in pet) {
  //   pet.fly();
  // }
  // classの場合はinstanceofが使える
  if (pet instanceof Bird) {
    pet.fly();
  }
}

havePet(new Bird());

// Typeguradの解説----ここまで

// タグ付きユニオン(デザインパターン)の解説----ここから

interface DesignSystem {
  id: string;
  // 以下のようにタグを付ける
  [key: string]: string;
}

const designSystem: DesignSystem = {
  id: "test",
  // 以下のようにタグを付ける
  // border: "border",
  // borderRadius: "borderRadius",
};

// タグ付きユニオンの解説----ここまで

// 型アサーションの解説----ここから
// const input = document.getElementById("input") // HTMLInputElement | null
// const input = <HTMLInputElement>document.getElementById("input");
// const input2 = document.getElementById("input") as HTMLInputElement; // HTMLInputElement
// input.value = "initial input value";
// input2.value = "initial input value";
// いっぺんに書く場合
// (document.getElementById("input") as HTMLInputElement).value =
//   "initial input value";
// 型アサーションの解説----ここまで

// Non-null assertion operatorの解説----ここから
//const input3 = document.querySelector("input")!;
//input3.value = "initial input value";
// Non-null assertion operatorの解説----ここまで

// インデックスシグネチャの解説----ここから
interface Designer {
  name: string;
  [index: string]: string;
}
const designer: Designer = {
  name: "John",
  role: "web",
};

designer.role = "frontend";
designer.skil = "Photoshop";

console.log(designer.skil);
// インデックスシグネチャの解説----ここまで

// 関数のオーバーロードの解説----ここから

function toUpperCase2(x: string): string;
function toUpperCase2(x: number): number;
function toUpperCase2(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}
const upperHello = toUpperCase2("hello");
console.log(upperHello);
const upperHello2 = toUpperCase2(5);
console.log(upperHello2);
// 関数のオーバーロードの解説----ここまで

// オプショナルチェイニングの解説----ここから

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const fetchData: DownloadedData = {
  id: 1,
  // user: {
  //   name: {
  //     first: "John",
  //     last: "Smith",
  //   },
  // },
  user: undefined,
};

console.log(fetchData.user?.name?.first);

// オプショナルチェイニングの解説----ここまで

// Nullish Coalescingの解説----ここから

const userData = fetchData.user ?? "No user";
console.log(userData);

// Nullish Coalescingの解説----ここまで

// look up型の解説----ここから

interface TmpData {
  id: number;
  user: {
    name: string;
    age: number;
  };
  0: number;
}

type id = TmpData["id" | "user" | 0];
type user = TmpData["user"];
type userName = TmpData["user"]["name"];

type StringArray = string[];
type ArrayValue = StringArray[number];
type TupleType = [boolean, string, number];
type TupleValue = TupleType[number];

// look up型の解説----ここまで

function toUpperCase3(x: string): string;
function toUpperCase3(x: number): number;
function toUpperCase3(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

// オーバーロードを型で表現する場合
interface TmpFanc {
  (x: string): string;
  (x: number): string;
}
const upperHello4: TmpFanc = function (x: string | number) {
  return x.toString();
};

// 関数型のインターセクションはオーバーロードのような挙動をする
interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}
let intersectionFunc: FuncA & FuncB;

intersectionFunc = function (a: number | string, b?: number | string) {
  if (typeof a === "number") {
    // bをnumberに変換
    const res = Number(b);
    return a + res;
  }
  return 0;
};

console.log(intersectionFunc(1, "100"));
console.log(intersectionFunc("1", 2));

// 関数型のユニオン型はパラメータがインタセクション型で、戻り値がユニオン型になる
interface FuncC {
  (a: number): number;
}
interface FuncD {
  (a: string): string;
}
let unionFunc: FuncC | FuncD; // (a: never) => string | number
unionFunc = function (a: string) {
  return "hi";
};
unionFunc("hi");

// レストパラメータに配列やタプルを指定する場合

function advancedFn(...args: [number, string, boolean]) {
  console.log(args);
}
// 可変長引数だが、タプル型を指定しているため、引数の数が合わないとエラーになる
advancedFn(3, "hello", true);

// レストパラメータに配列やタプルを指定する場合
function advancedFn1(...args: [number, string, boolean, ...number[]]) {
  console.log(args);
}
advancedFn1(3, "hello", true, 1, 2, 3);

function advancedFn2(...args: [string, ...string[]]) {
  console.log(args);
}
advancedFn2("hello", "world", "foo");

function advancedFn3(a: number, b: string, ...args: boolean[]) {
  console.log(args);
}
advancedFn3(3, "hello", true, false, true);

// readonlyを付与することで、配列の変更を防ぐことができる
function readonlyTupleFn(...args: readonly [number, string, boolean]) {
  // args[1] = "foo"; // error
  // args.push("foo"); // error
  console.log(args);
}

// ラベル付きタプル型の解説----ここから
function advancedFn4(
  ...args: [name: string, age: number, examed?: boolean, ...scores: number[]]
) {
  console.log(args);
}
advancedFn4("John", 30, true, 98, 78, 89);
advancedFn4("quil", 10);

// const アサーションの解説----ここから
let milk = "milk" as const;
let drink = milk;
// drink = "water"; // error

const array = [10, 20] as const; // readonly [10, 20]
// array.push(30); // error
// array[0] = 30; // error
// as const を使わずにタプル型で書くと
const array2: readonly [10, 20] = [10, 20]; //めんどくさい

const peter = {
  name: "Peter",
  age: 38,
} as const;
// peter.age = 39; // error
// const アサーションの解説----ここまで

// 型の中でのtypeofの解説----ここから
type PeterType = typeof peter;
const peterSecond: PeterType = {
  // name: "Mike", // error
  name: "Peter",
  // age: 39, // error
  age: 38,
};
// 型の中でのtypeofの解説----ここまで
