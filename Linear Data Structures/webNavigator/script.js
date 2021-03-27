// This project, Web Navigator, simulates the navigational operations of a web browser such as :
// opening a new web page,
// navigating back a page and
// going forward a page. This uses the Stack class to maintain the history of visited pages with a backPages stack and a nextPages stack.

const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "Start Page";
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

// ------------------------------
// User Interface Part 2
// ------------------------------
