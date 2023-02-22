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

function displayBooks() {}

addBookToLibrary("manon", "bla", 122, "not read");
addBookToLibrary("how I", "met her", 122, "read");
addBookToLibrary("yes sir", "mam", 132, "not read");
addBookToLibrary("no mam", "sir", 100, "not read");
