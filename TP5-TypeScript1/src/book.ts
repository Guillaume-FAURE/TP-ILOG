const bookCollection : Array<IBook> = [];
type IBook ={
    title:string;
    author:string;
}
function equalBook(book1:IBook,book2:IBook):boolean{
    if (book1.title === book2.title && book1.author===book2.author){
        return true
    }
    return false
}
function addBook(book:IBook,key?:number):number{
    if(typeof key !== "number"){bookCollection.push(book);}
    else{bookCollection.splice(key,0,book)}
    return bookCollection.length;
}
function remove(key:number):void{
    bookCollection.splice(key,1);
}
function at(key:number){
    if(bookCollection[key]!==undefined){
        console.log(`Book number ${key} : ${bookCollection[key].title}`);
        return bookCollection[key];
    }
    else{
        console.log(`No book at index ${key}`);
        return undefined;
    }
}
function printAll():void{
    console.log(bookCollection);
}

let book1:IBook={
    title:"harry potter",
    author:"JKR"
}
let book2:IBook={
    title:"LotR",
    author:"Tolkien"
}
let book3:IBook={
    title:"twiligth",
    author:"inconnu"
}
printAll()
addBook(book1)
addBook(book2)
addBook(book3,1)
printAll()
console.log(equalBook(book1,book2))
remove(1)
at(1)
printAll()

