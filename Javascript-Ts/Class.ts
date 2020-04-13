//@ts-check

class TS {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `aaaaaaa ${this.version}`;
  }
}

class TSC {
  readonly model: string;
  readonly types: number = 11;

  constructor(theModel: string) {
    this.model = theModel;
  }
}
//--------------------------

class Animals {
  protected voice: string = "";
  public a: number = 111;
  private b: boolean = true;

  private php() {
    console.log("Hello");
  }
}

//-Abstract Class----------------------------

abstract class React {
  abstract useEffect(): void;
  abstract useState(): any;
}

class Angular extends React {
  useEffect(): void {
    console.log("wdsdasdas");
  }
  useState(): any {
    return true;
  }
}
