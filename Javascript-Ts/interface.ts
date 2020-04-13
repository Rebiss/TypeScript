//@ts-check

interface Idate {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements Idate {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

//--React----------------------------------

interface IStyle {
  [key: string]: string;
}

const style: IStyle = {
  margin: "2px",
  position: "absolut",
};
