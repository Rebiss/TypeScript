//@ts-check

const str: string = 25;
interface Rect {
  readonly id: number
  color?: string
  size: {
    height: number
    width: number
  };
}

const rectOne: Rect = {
  id: "hello",
  size: {
    height: 12;
    width: 30
  }
};

const rectT = {} as Rect;  //Syntax
const rectF = <Rect>{}    // Syntax

interface RectArea extends Rect {
  getArea: () => number
}

const rectD: RectArea = {
  id: 2536,
  size: {
    height: 15,
    width: 32
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}
