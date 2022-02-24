/**
 * @description Print hello arguments
 * @param compiler arguments, predicted as "TypeScript"
 */
function hello(compiler: string){
    console.log(`Hello ${compiler}`);
}

hello("TypeScript")

let age1: number | undefined
let name1: string | null = null

enum Color {
	White, Black, Brown, Red, Orange, Yellow, Green, Blue, Purple, Grey
}
let colBackground: Color = Color.Blue
enum PropKind {
	Read = 1,
	Write = 4,
	Indexed = "indexed",
}
let kind: PropKind = PropKind.Read

console.log(kind, PropKind[PropKind.Read]) // 1 Read
console.log(PropKind.Write, PropKind[PropKind.Write]) // 4 Write
console.log(PropKind.Indexed) // indexed

type Person={
    readonly name:string;
    readonly age:number;
    job?:string;
};

let jean: Person = {
    name : "jean",
    age : 22,
}

/**
 * @description print the name of the person in parameter
 * @param person person with parameters name and age
 */
let printName = (person: Person):void => {console.log(`My name is ${person.name}`)}

printName(jean)