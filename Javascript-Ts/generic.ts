const arrayNumber: Array<number> = [12, 5, 6, 8, 8, 99, 6, 6, 3, 8, 4];
const arrayString: Array<string> = ["asa", "aasds", "dsdsd", "asa"];

function revers<T>(array: T[]): T[] {
  return array.reverse();
}

revers(arrayNumber);
revers(arrayString);
