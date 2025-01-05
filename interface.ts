// type addFunc = (num1: number, num2: number) => number;
// 上記をinterfaceで書くと以下のようになる
interface addFunc {
  // コールシグネチャ
  // (num1: number, num2: number): number;
  // コンストラクタシグネチャ
  new (num1: number, num2: number): number;
}
//コールシグネチャで記載する場合
// let addFunc: addFunc;
// addFunc = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// コンストラクタシグネチャで記載する場合
function addFunc2(func: addFunc) {
  new func(2, 3);
}

type Nameable = {
  name: string;
  nickName?: string;
};

interface Human extends Nameable {
  age: number;
  // greeting: (message: string) => void;
  greeting(message: string): void;
}

const human: Human = {
  name: "John",
  age: 30,
  greeting(message: string): void {
    console.log(message);
  },
};

class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    public experience: number
  ) {}

  greeting(message: string): void {
    console.log(message);
  }
}

const developer: Developer = {
  name: "John",
  age: 30,
  experience: 3,
  greeting(message: string): void {
    console.log(message);
  },
};

const user: Developer = developer;
user.experience;
user.name = "Mike"; // errorにならない
// このように、interfaceで定義されたプロパティはreadonlyだが、inplementしたクラスでreadonlyを上書きできる

const user2: Human = developer;
// user2.experience // error
// このように、interfaceで定義されたプロパティ以外はアクセスできない

function introduce(): Human {
  return developer;
}
