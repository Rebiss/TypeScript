/**
 * ! Data Types in JS
 * ! Number, String, Boolean, null, underfind, Object, Symbol
 * !typeof operator
 */
//@ts-check
let isBool: boolean = "true";
isBool = 42;
isBool = false;

let isNum: number = 1256;
let int: number = 9.366555;

let isStr: string = "string";

const isUnder: undefined = undefined; //typeof underfined( JS=> object)
const isNull: null = null; //typeof object

// Void

const setFunc = (): void => {
  alert("Alelua");
}; // Error no return

//Array
let arr: number[] = [3, 56, 89];
let arr0: string[] = ["aaa", "bbb"];
let box: Array<number> = [58, 96, 365, 889, 78]; //Generic

//Tuple Type

let tup: [number, string] = [13, "hello Tuple"];
//or tup: [number, string] = ["hello Tuple", 138] => error

let p: [any, any] = ["sdsds", 566];
let r: Array<any> = [true, 1236];
let isAny: any = 12; // isAny = 'true', true, 12, no error

//Enum Type

enum Object {
  Set = 3,
  Get = 8,
  Met = 1,
  Let,
}
//return index
Object.Let; //2
Object.Set; //3

//Never Type

const asa = 11;

const foo = (asa: string): never => {
  throw new Error(asa);
};

// return Function Error ??? (ardyunq chunecox function)

// Object Type
const obj = (o: object | null): void => {}; // function @ndunum e arg {} kam null
obj(56); // error
obj("str"); // error
obj({ o: 2 });

let y: boolean | number; // y kara lini bool kam num

// Custem(elias) Type

type anasun = string;

let gvidon: anasun;
gvidon = 1; // not valid
