const myLibrary = [];

function Book(title, author, pages, read) {
  // constructor with the book properties
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("title");
  const author = prompt("author");
  const pages = prompt("pages");
  const read = prompt("read true/false")
  const libraryBook = new Book(title, author, pages, read)
  return myLibrary.push(libraryBook);
}