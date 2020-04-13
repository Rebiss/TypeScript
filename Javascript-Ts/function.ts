//@ts-check
//--Function--------------------------------------------

function add(a: number, b: number): number {
  return a * b;
}
add(7, "1223"); //Error
add(5, 56);

interface Function {
  a: number | undefined;
  b: number | undefined;
}
interface DubleFunction extends Function{
    default: string
}
const post = (): Function {};
function posrt(a: number) : DubleFunction

function post(a?: number, b?:number) {
    if(!a && !b) return {x: undefined, y: undefined}
} 