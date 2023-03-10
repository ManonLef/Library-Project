const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  const libraryBook = new Book(title, author, pages, read);
  myLibrary.push(libraryBook);
}

function submitBook(event) {
  event.preventDefault();
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  displayBooks();
  // reset form
  document.querySelector("form").reset();
  hideForm();
  changeBookButton();
}

function changeBookButton() {
  if (document.querySelector(".form-container").hasAttribute("hidden")) {
    document.getElementById("add-book").textContent = "Add Book";
  } else {
    document.getElementById("add-book").textContent = "Cancel";
  }
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
}
// book card functionality
function toggleRead(bookProto) {
  const readState = myLibrary[bookProto.getAttribute("data-index")].read;
  if (readState === "false") {
    myLibrary[bookProto.getAttribute("data-index")].read = "true";
  } else {
    myLibrary[bookProto.getAttribute("data-index")].read = "false";
  }
  displayBooks();
}

function removeBook(bookProto) {
  myLibrary.splice(bookProto.getAttribute("data-index"), 1);
  displayBooks();
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// book card fill functions
function addElementToCard(element, bookCard, book) {
  const elementDiv = document.createElement("div");
  elementDiv.className = `book-${element}`;
  let bookElement;
  if (element === "title") {
    bookElement = document.createTextNode(book[element]);
  } else {
    bookElement = document.createTextNode(`${element}: ${book[element]}`);
  }
  elementDiv.appendChild(bookElement);
  bookCard.appendChild(elementDiv);
}

function addReadStatusToCard(bookCard) {
  const statusDiv = document.createElement("div");
  statusDiv.className = "book-status";
  statusDiv.textContent = "Read Status:";
  bookCard.appendChild(statusDiv);
}

function addReadButtonToCard(index, book, bookCard) {
  const statusButton = document.createElement("button");
  statusButton.setAttribute("data-index", index);
  if (book.read === "true") {
    statusButton.textContent = "read";
    statusButton.className = "read-button";
  } else {
    statusButton.textContent = "not read";
    statusButton.className = "read-button not-read-button";
  }
  // eventlistener uses e.target to identify exactly which button is clicked
  // which is important since that button will have the data-index needed to toggle the correct button
  statusButton.addEventListener("click", (e) => {
    const statusToggle = e.target;
    toggleRead(statusToggle);
  });
  bookCard.appendChild(statusButton);
}

function addDeleteButtonToCard(index, bookCard) {
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("data-index", index);
  deleteButton.className = "delete-button";
  deleteButton.textContent = "✖";
  // eventlistener uses e.target to identify exactly which button is clicked
  // which is important since that button will have the data-index needed to remove the correct button
  deleteButton.addEventListener("click", (e) => {
    const bookDelButton = e.target;
    removeBook(bookDelButton);
  });
  bookCard.appendChild(deleteButton);
}

function displayBooks() {
  // first erase previous list
  const bookContainer = document.getElementById("books-container");
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild);
  }
  // Generate book card for each book in library
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "bookcard";
    // Append all elements to the book card
    addElementToCard("title", bookCard, book);
    addElementToCard("author", bookCard, book);
    addElementToCard("pages", bookCard, book);
    addReadStatusToCard(bookCard);
    addReadButtonToCard(index, book, bookCard);
    addDeleteButtonToCard(index, bookCard);
    // append the book card to the book caontainer
    document.querySelector("#books-container").appendChild(bookCard);
  });
}
// form popup functions
function unhideForm() {
  if (document.querySelector(".form-container").hasAttribute("hidden")) {
    document.querySelector("#books-container").className = "blur";
    document.querySelector("footer").className = "blur";
    document.querySelector("header").className = "blur";
    document.querySelector(".form-container").removeAttribute("hidden");
  } else {
    hideForm();
    clearForm();
  }
  changeBookButton();
}

function hideForm() {
  document.getElementById("books-container").classList.remove("blur");
  document.querySelector("footer").classList.remove("blur");
  document.querySelector("header").classList.remove("blur");
  document.querySelector(".form-container").setAttribute("hidden", "");
}
// button to add book
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", unhideForm);

// submit new book button functionality
const submitButton = document.getElementById("submit-book");
submitButton.addEventListener("click", submitBook);

// default books loaded Í
addBookToLibrary(
  "You Don't Know JS Yet: Get Started",
  "Kyle Simpson",
  140,
  "false"
);
addBookToLibrary("Atomic Habits", "James Clear", 320, "true");
addBookToLibrary(
  "The Subtle Art of Not Giving a F*ck",
  "Mark Manson",
  212,
  "false"
);
addBookToLibrary(
  "The Life-Changing Magic of Tidying Up",
  "Marie Kondo",
  213,
  "true"
);
addBookToLibrary(
  "How to Win Friends & Influence People",
  "Dale Carnegie",
  304,
  "true"
);
displayBooks();
