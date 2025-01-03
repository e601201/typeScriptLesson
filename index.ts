let hasValue: boolean = true;
hasValue = 20 > 1120;
let count = 20 satisfies number
let float: number = 3.14;
let negative: number = -0.12;

let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
let firstName: string = 'John';
let lastName: string = 'Doe';
let fullName: string = `${firstName} ${lastName}`;

const person = {
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 30
};
console.log(person.age)

const fruits: (string|number|boolean)[] = ['Apple', 'Banana', 'Grape', 10, true];

const book: [string, number, boolean] = ['business', 1500, false];
console.log(book[1]);

enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

let clothSize: 'large' | 'medium' | 'small';

type ClothSize = 'large' | 'medium' | 'small';
const cloth: {
  color: string,
  size: ClothSize
} = {
  color: 'white',
  size: 'medium'
}

const doubleNumber = (num: number): number => num * 2;
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
  return doubleNum;
})

const error = (message: string): never => {
  throw new Error(message);
}
