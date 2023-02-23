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
  for (let i = 0; i < myLibrary.length; i++) {
    const bookInfo = document.createElement("p");
    const title = document.createTextNode(myLibrary[i].title);
    document.getElementById("container").appendChild(bookInfo);
    bookInfo.appendChild(title);
  }
}

function unhideForm() {
  const formhide = document.querySelector(".form-container");
  formhide.removeAttribute("hidden")
}

// button to add book
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", unhideForm);

// temporary check to see if function works and fill the myLibrary array to test other functions
addBookToLibrary("manon", "bla", 122, "not read");
addBookToLibrary("how I", "met her", 122, "read");
addBookToLibrary("yes sir", "mam", 132, "not read");
addBookToLibrary("no mam", "sir", 100, "not read");

displayBooks();
