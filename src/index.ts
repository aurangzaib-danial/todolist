const readlineSync = require('readline-sync');
import List from "./List.js";

const list = new List();

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
  } else {
    list.items.forEach((item, index) => {
      console.log(`${index + 1}: ${item}`);
    });
    console.log();
  }
}

function addItem() {
  const input = readlineSync.question("Enter description: ");
  if (input !== "") {
    list.add(input);
  }
}

function editItem() {
  const selection = Number(readlineSync.question("Enter item number: "));
  if (selection > 0 && selection <= list.items.length) {
    const description = readlineSync.question("Enter new description: ");
    if (description !== "") {
      list.edit(selection - 1, description);
    }
  }
}

function removeItem() {
  const selection = Number(readlineSync.question("Enter item number: "));
  if (selection > 0 && selection <= list.items.length) {
    list.remove(selection - 1);
  }
}

console.log("Welcome to Todolist");

let input = "";

while(input !== "D") {
  printList();
  printInstructions();
  input = readlineSync.question("Enter your selection (A-D): ").toUpperCase();
  switch(input) {
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
