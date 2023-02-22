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

### progress for the `addBookToLibrary` function.
- used prompts for now (until I work on the form popup)
- function works and adds objects with the name `Book` to `myLibrary`

## 20230222

Step 3 of the assignment: Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

### Pseudocode for `function that loops through the array and displays each book on the page`
1. name the function displayBooks
2. invoke some `addBookToLibrary()` functions and remove the prompts during testing.
3. create a loop that goes through each object in the array `myLibrary`
4. for every book I want to add an element to the DOM now as a starter to get them displayed.
5. display all the book properties on a new line or inside a table

### progress for `function that loops through the array and displays each book on the page`
It works fine so far and I made it display the title for now. I will have to decide if the info will be displayed in a table or with a prototype function on 1 line which should also suffice for this project I think. I will continue with the assignment and edit the plan as I go. When the functionality is there and working it will be easier to adjust for visual display.