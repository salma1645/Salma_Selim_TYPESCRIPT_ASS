class User{
   public ID:number;
    public name:string;
    public email:string;
    private password:string;
    public phone:string;
    public age:number;
    public notebooks:NoteBook[]=[]

    constructor( ID:number,name:string ,email:string, password:string, phone:string, age:number){
if(age<=18 || age>=60) {
   throw new Error("Age must be between 18 and 60")};
     this.ID=ID;
this.name=name;
this.email=email;
this.password=password;
this.phone=phone;
this.age=age
    }
    public displayInfo():string{
        return   `ID: ${this.ID}
NAME: ${this.name}
EMAIL: ${this.email}
PHONE: ${this.phone}
AGE: ${this.age}`;
    }
    public addNoteBooks(notebook:NoteBook){
        this.notebooks.push(notebook)
    }

}

const user=new User(55,"salma","salmasleim60","5555","0122555",20)
console.log(user.displayInfo())

//2

class Admin extends User {
    public notes: Note[]=[]// =[] craetes an empty array when ad,in object is created

    constructor(
        ID: number,name: string,email: string,password: string,phone: string,age: number
    ) {
        super(ID, name, email, password, phone,age);
    
    }

    public manageNotes(note:Note):void {
        this.notes.push(note)
    }
}

//3
class Note{
public ID:number;
public title:string;
public content:string;
public userID:User
constructor(ID:number,title:string,content:string, userID:User){
    this.ID=ID,
    this.title=title,
    this.content=content,
    this.userID=userID
}

public preview(){
    return `ID::${this.ID}
title::${this.title}
content::${this.content}
userID: ${this.userID.ID} `
}
public showAuthor(){
    return this.userID.name
}
}
 const note=new Note(99,"yyyy","jjjj",user)
 console.log(note.preview())
//4
class NoteBook {
public notes:Note[]=[];

public addNote(note:Note){
this.notes.push(note)
}
public removeNote(ID:number){
const index=this.notes.findIndex(note => note.ID===ID)
if(index !==-1){
    this.notes.splice(index,1)
}
}
}

class Storage<T>{
  
public storedItem:T[]=[]
    public additem(item:T):void{
this.storedItem.push(item)
    }
       public removeitem(index:number):void{
this.storedItem.splice(index,1)
    }
       public getAllitems():T[] | string{
if(this.storedItem.length==0){
    return "NO ITEMS STORED"
}
else{
   return this.storedItem
    }
}
    }


