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

// add elements to the DOM

function createForm(parent, child) {
  child.id = "form";
  child.setAttribute("action", "javascript:void(0);");
  parent.appendChild(child);
}

function createTitleInput(parent, child) {
  child.className = "title-container";
  parent.appendChild(child);
  // create label for title
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "title";
  parent.appendChild(titleLabel);
  // create input field for title
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("placeholder", "title");
  parent.appendChild(titleInput);
}

function createInputForm() {
  // container creation
  const formContainer = document.createElement("div");
  document.getElementById("container").appendChild(formContainer);
  formContainer.className = "form-container";
  // create form
  const form = document.createElement("form");
  createForm(formContainer, form);
  // create container for title
  const titleContainer = document.createElement("div");
  createTitleInput(form, titleContainer);
}

// button to add book
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", createInputForm);

// temporary check to see if function works and fill the myLibrary array to test other functions
addBookToLibrary("manon", "bla", 122, "not read");
addBookToLibrary("how I", "met her", 122, "read");
addBookToLibrary("yes sir", "mam", 132, "not read");
addBookToLibrary("no mam", "sir", 100, "not read");

displayBooks();
