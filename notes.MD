## 20230221

Step 2 of the assignment: All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 
Example:
```js
let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
```

### Pseudocode for the `addBookToLibrary` function.
- request user input for book
- use user input to create a new book object using the `Book` constructor
- store/push book into the `myLibrary` array

### progress
- used prompts for now (until I work on the form popup)
- function works and adds objects with the name `Book` to `myLibrary`
