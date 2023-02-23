const myLibrary = [];

function Book(title, author, pages, read) {
  // constructor with the book properties
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const libraryBook = new Book(title, author, pages, read);
  return myLibrary.push(libraryBook);
}

function displayBooks() {
  // first erase previous list
  const bookContainer = document.getElementById("books-container");
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild);
  }
  // loop through and display book info
  for (let i = 0; i < myLibrary.length; i++) {
    //create book card
    const bookCard = document.createElement("div")
    bookCard.className = "bookcard";
    // fill bookcard
    
    const titleDiv = document.createElement("div");
    titleDiv.className = "title-div"
    const title = document.createTextNode(myLibrary[i].title);
    titleDiv.appendChild(title)
    bookCard.appendChild(titleDiv);

    const author = document.createTextNode(myLibrary[i].author)
    // result bookcard
    document.getElementById("books-container").appendChild(bookCard);
  }
}

function unhideForm() {
  document.querySelector(".form-container").removeAttribute("hidden");
}

function hideForm() {
  document.querySelector(".form-container").setAttribute("hidden", "");
}

// button to add book
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", unhideForm);

// submit functionality
const submitButton = document.querySelector("button");
submitButton.addEventListener("click", submitBook);

function submitBook() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  displayBooks();
  // reset form
  document.querySelector("form").reset();
  hideForm();
}

// temporary check to see if function works and fill the myLibrary array to test other functions
