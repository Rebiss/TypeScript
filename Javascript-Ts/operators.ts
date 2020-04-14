interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;

let key: PersonKeys = "name"; // ankap banali name || age
key = "hambal"; //error

type User = {
  _id: number;
  name: string;
  email: string;
  data: Date;
};

type UserKeys = Exclude<keyof User, "_id" | "data">; // hanum enq es typer@ mnuma name || email
type UserKeyss = Pick<User, "name" | "email">; // inchn e anhrajesht User type-i mijic
let ara: UserKeys = "name"; // error
let va: UserKeyss = "name";
