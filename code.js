// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

function isItEnding(currentPage) {
  for (let index = 0; index < endingPages.length; index++){
    currentPage = parseInt(currentPage);
    if (currentPage === endingPages[index]) {
      return true;
    }
  }
  return false;
}
while (currentPage !== null) {
  if (isItEnding(currentPage) === true) {
    document.write(`<p>${pages[currentPage]}</p> <h1>Game Over</h1>`);
    currentPage = null;
  } else if (isItEnding(currentPage) === false) {
    document.write(`<p>you selected pages ${currentPage}</p> <p>${pages[currentPage]}</p>`);
 currentPage = prompt(`${pages[currentPage]} \n What page would you like to go to?`);
    }
    
  }

