/*class BaseClass {
  baseProperty: int;

  constructor(a: int) {
  }

  baseMethod<T>(): void {
  }
}

class SubClass extends BaseClass {
  subProperty: float;

  constructor(a: int, b: int) {
    super(a);
  }

  subMethod(): void {
    this.baseMethod<float>();
  }
}

export function classTest(): void {
  let c: BaseClass = new SubClass(1, 2);
  c.baseMethod<int>();
}*/
/*
export function main(): void {
  // let s: string = "123";
  let a: Array<int> = new Array(10);
  let b: uintptr = a.indexOf(1, 0);
  used();
}

function used(): void {}
function unused(): void {}
*/
/*
export function stringTest(): void {
  let s: string = "123";
  s.startsWith("1");
  // let a: Array<int> = new Array(10);
}
*/
export function test(): float32 {
  return 1;
}
export function test2(): double {
  let a: double = 4;
  let b: double = 5;
  if(a == b)
    return a;
  return b;
}
