"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require('readline-sync');
var List_js_1 = require("./List.js");
var list = new List_js_1.default();
function printInstructions() {
    console.log("A: Add a new item");
    console.log("B: Edit an item");
    console.log("C: Delete an item");
    console.log("D: Exit");
    console.log();
}
function printList() {
    if (list.isEmpty()) {
        console.log("Your currently have no items in your todolist");
    }
    else {
        list.items.forEach(function (item, index) {
            console.log("".concat(index + 1, ": ").concat(item));
        });
        console.log();
    }
}
function addItem() {
    var input = readlineSync.question("Enter description: ");
    if (input !== "") {
        list.add(input);
    }
}
function editItem() {
    var selection = Number(readlineSync.question("Enter item number: "));
    if (selection > 0 && selection <= list.items.length) {
        var description = readlineSync.question("Enter new description: ");
        if (description !== "") {
            list.edit(selection - 1, description);
        }
    }
}
function removeItem() {
    var selection = Number(readlineSync.question("Enter item number: "));
    if (selection > 0 && selection <= list.items.length) {
        list.remove(selection - 1);
    }
}
console.log("Welcome to Todolist");
var input = "";
while (input !== "D") {
    printList();
    printInstructions();
    input = readlineSync.question("Enter your selection (A-D): ").toUpperCase();
    switch (input) {
        case "A":
            addItem();
            break;
        case "B":
            editItem();
            break;
        case "C":
            removeItem();
            break;
        case "D":
            console.log("Good bye!");
            break;
    }
}
