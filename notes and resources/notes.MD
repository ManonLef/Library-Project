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

Step 4: Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

### Pseudocode for `add a "NEW BOOK button"`
1. add a button to the html. I would like to have that as part of the UI
2. create a card that pops up with form elements for
    - author
    - title
    - number of pages
    - read or not
    - SUBMIT button
3. pass the above to the addBookToLibrary fuction upon submit
4. delete the form? 

## 202302231
I'm going to start working on the `add book` button this morning. I will have to make it so that a form pops up.

### progress for `add a "NEW BOOK button"`
1. button added to html
2. I will start with creating functionality to create a new form upon pressing the button
  - [ ] look into form attribute onSubmit="function()"
  - [ ] look into utilised action: "javascript:void(0);"
  - I'm kind of doubtful about this approach of building the whole form with JS. I have the first inputs working but I'll instead look into just building a form in the html and hiding it until the add book button is pressed. 
  - The above works like a charm. I'll continue working on the form
  - [x] edit input number for pages since it now has arrows
  - [x] `hideForm` and `unhideForm` functions can be integrated in their respective eventListeners
3. and 4 
  - went smooth enough.

## 20230232 step 5
`Add a button on each book’s display to remove the book from the library.`
You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

### Progress for `Add a button on each book’s display to remove the book from the library`
I added a button to the displayBooks function which is getting awfully lengthy
- [x] refactor displayBooks to remove the card creation and make it more readable
Some pseudocode for pressing delete:
  - I will create an eventlistener for the delete buttons
  - the data-index will be the index number of the book to be deleted
  - remove said index from the array
  - display remaining books
Some things I ran into:
- the delete buttons are dynamically created so the event-listener didn't work on newly created books since I declared the const before it could even find it with the querySelectorAll. To solve this I added an eventlistener for clicks in the entire document with the `closest()` method. Once the Doc tree then finds the `.delete-button` up the DOM tree upon click, it will invoke the function.
- Works like a charm \o/

- Note for tomorrow: eventListeners are added and remain active. So I can rewrite the deleteButton and probably add it to the `displayBooks` function.
- The `displayBooks` function could probably have a more descriptive name as well.

## 2023024
- [x] add eventlistener to code where delete button is dynamically created
- the above because right now I feel like moving on so I can refactor the whole code later.

### step 5 `Add a button ro change the read status`
Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance. 

### Pseudocode for `read toggle`
- change the read section of the form to a selection between read vs not read
- add a button or slide to the form to indicate if it's read. like a toggle switch.
- upon creation of the book card, the Book prototype will have a read value of true or false for example
- once the toggle is used it has to be the opposite of true or false. 

### Progress for `read toggle`
- I ran into an issue with `event.preventDefault` changing the default behaviour of the checkbox upon submit. Normally a checkbox only submits a value when checked but with the `preventDefault` option the checkbox toggles to checked before submitting
- I opted for using a dropdown for now with yes/no
- added the button to the card
- now working on toggling said button and the read status
- added the same type of eventListener (with closest()) to the toggle read button. It works for now so that's okay

All functionality is there now. The code could do with some refactoring but I will move on to the styling first since the code will need some state classes added as well.

## 2023025
- Did most of the styling
- Refactored part of je JS by extracting some functions from the `displayBooks` function for readability
- [ ] Future idea: incorporate ISBN (API?)
- [ ] Future idea: Storage

## 202306
- [ ] Future idea: add sort options, more book info, when it was read etc.
- [ ] Future idea: add popus to confirm deletion
- [ ] UPDATE Form Modal to toggle background buttons disbles
- [ ] Future idea: Make cards editable by opening modal and prefilling form for example

I finished the project today. Refactored most of the code to be a lot more modular. I hope this will make it more usable in the future when adding functionality. 