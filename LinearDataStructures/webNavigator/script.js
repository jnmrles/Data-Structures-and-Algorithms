const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "Start Page";
let finish = false;
// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log("Back page = ", backPages.peek());
  console.log("Next page = ", nextPages.peek());
};

const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;

  // clear the nextPages stack
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage("NEW: ");
};

const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");
};

const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
};
/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------
// controls when back and front navigation operations are enabled
let showBack = false;
let showNext = false;

while (finish === false) {
  showCurrentPage("DEFAULT: ");
  let instructions = baseInfo;
  if (backPages.peek() != null) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }

  if (nextPages.peek() != null) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  const answer = prompt("What Would You like to do Today?");
  const lowerCaseAnswer = answer.toLowerCase();
  if (
    lowerCaseAnswer !== "n" &&
    lowerCaseAnswer !== "b" &&
    lowerCaseAnswer !== "q"
  ) {
    // we create a new page based on the url
    newPage(answer);
  } else if (showNext === true && lowerCaseAnswer === "n") {
    // we navigate forward a page
    nextPage();
  } else if (showBack === true && lowerCaseAnswer === "b") {
    // we navigate back a page
    backPage();
  } else if (lowerCaseAnswer === "b") {
    // invalid input to a non-available option
    console.log("Cannot go back a page. Stack is empty.");
  } else if (lowerCaseAnswer === "n") {
    // invalid input to a non-available option
    console.log("Cannot go to the next page. Stack is empty.");
  } else if (lowerCaseAnswer === "q") {
    // we quit the program
    finish = true;
  }
}
