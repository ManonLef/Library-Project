const myLibrary = [];

// books will be added to this container visually

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
  const bookContainer = document.getElementById("container");
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild);
  }
  // loop through and display book info
  for (let i = 0; i < myLibrary.length; i++) {
    const bookInfo = document.createElement("p");
    const title = document.createTextNode(myLibrary[i].title);
    document.getElementById("container").appendChild(bookInfo);
    bookInfo.appendChild(title);
  }
}

function unhideForm() {
  const formhide = document.querySelector(".form-container");
  formhide.removeAttribute("hidden");
}

// button to add book
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", unhideForm);

// submit functionality
const submitButton = document.querySelector("button");
submitButton.addEventListener("click", doStuff);

function doStuff() {
  const title = document.getElementById("title");
  addBookToLibrary(title.value, "", "", "");
  displayBooks();
}

// temporary check to see if function works and fill the myLibrary array to test other functions
