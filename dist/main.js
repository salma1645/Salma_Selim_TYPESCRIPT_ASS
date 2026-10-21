"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    ID;
    name;
    email;
    password;
    phone;
    age;
    notebooks = [];
    constructor(ID, name, email, password, phone, age) {
        if (age <= 18 || age >= 60) {
            throw new Error("Age must be between 18 and 60");
        }
        ;
        this.ID = ID;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    displayInfo() {
        return `ID: ${this.ID}
NAME: ${this.name}
EMAIL: ${this.email}
PHONE: ${this.phone}
AGE: ${this.age}`;
    }
    addNoteBooks(notebook) {
        this.notebooks.push(notebook);
    }
}
const user = new User(55, "salma", "salmasleim60", "5555", "0122555", 20);
console.log(user.displayInfo());
class Admin extends User {
    notes = [];
    constructor(ID, name, email, password, phone, age) {
        super(ID, name, email, password, phone, age);
    }
    manageNotes(note) {
        this.notes.push(note);
    }
}
class Note {
    ID;
    title;
    content;
    userID;
    constructor(ID, title, content, userID) {
        this.ID = ID,
            this.title = title,
            this.content = content,
            this.userID = userID;
    }
    preview() {
        return `ID::${this.ID}
title::${this.title}
content::${this.content}
userID: ${this.userID.ID} `;
    }
    showAuthor() {
        return this.userID.name;
    }
}
const note = new Note(99, "yyyy", "jjjj", user);
console.log(note.preview());
class NoteBook {
    notes = [];
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(ID) {
        const index = this.notes.findIndex(note => note.ID === ID);
        if (index !== -1) {
            this.notes.splice(index, 1);
        }
    }
}
class Storage {
    storedItem = [];
    additem(item) {
        this.storedItem.push(item);
    }
    removeitem(index) {
        this.storedItem.splice(index, 1);
    }
    getAllitems() {
        if (this.storedItem.length == 0) {
            return "NO ITEMS STORED";
        }
        else {
            return this.storedItem;
        }
    }
}
//# sourceMappingURL=main.js.map