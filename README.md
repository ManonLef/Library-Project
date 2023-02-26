# Admin Dashboard

## Result
[See the Library Project Live here](https://manonlef.github.io/Library-Project/)

![project preview](./notes%20and%20resources/Library%20Preview.png)

## About this project
This Project came after the lesson about Objects and Object Constructors. The initial steps were to make a book constructor and add them to the library array of book objects. There was a lot of DOM Manipulation and a massive growth of functions as the project progressed compared to the previous projects. 

I also hadn't touched JS for a project in a while. Okay maybe a little in the signup form where it wasn't needed but I wanted to haha. 

## Objective
- [x] Create an Array of Book Objects to store your books in
- [x] Create a form to input new books
- [x] Display all the books
- [x] Toggle read functionality
- [x] Delete book functionality

Storage is NOT part of this project and will be added later.
Mobile responsiveness isn't covered yet either but I did make an attempt to make it a bit mobile friendly.

## Notes and lessons learned
- I completely focused on the code first for this project. Any styling I did add before all functionality was implemented, was for visualizing. I'm not disappointed about this approach. It really separated the design from the functionality and gave me full freedom and focus on style/positioning when most of the puzzling was done.
- I didn't really gather inspiration online before working on the styling, nor did I check out many other library projects. I don't think this will be a project to show off yet so I might do that in the future. I went with the admin-dashboard inspired grid cards and a colorscheme.
- I really enjoyed thinking about all the features I could add to this project. Since I'm an avid reader I could actually see myself using an app or website like this. Someone on Twitter mentioned a Google Books API that might be fun to add some day. Or perhaps an API to find the book cover with a provided ISBN and fill out the form for you. 
- I had some issues with a radio button passing checked by default. It should by default not return any value when unchecked. Reading online I found out that this is probably caused by me preventing default action of the submit button. I will revisit that when I get to implementing storage.
- I ended refactoring a lot of code in the end. I went for a more modular approach by extracting a lot of functionality from the main function `displayBooks()`. This was a lot more structured and I bet easier to scale up later. Definitely worth it. 
- When I created the form, I started doing so in JS at first. It became a massive amount of text and then I did some research... I ended up creating the form in html instead and gave it the attribute `hidden` that I could later toggle with JS. 
- More notes I took during the process of building this can be found [here](./notes%20and%20resources/notes.MD)

## Things to someday maybe add or improve when revisiting this project
- [ ] Create an actual modal that deactivates the background buttons
- [ ] Change the toggle button to a toggle switch
- [ ] Add Storage
- [ ] Look into API's (Google Books, ISBN, etc.)
- [ ] Add Sort Option
- [ ] Add more book info fields like notes, year published, date read.
- [ ] Add edit functionality for books already in library
- [ ] Confirm deletion

## Credits
- font Roboto by [Christian Robertson](https://fonts.google.com/?query=Christian%20Robertson)