console.log("this is index.js");

// book constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// display constructor
function Display() {}

// add methods to display prototype
Display.prototype.add = function() {}
Display.prototype.clear = function() {

}


Display.prototype.add = function(){
    console.log('adding to UI');
};
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
};


// add submit event listener to libraryform
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("you have submitter a library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  display.add(book);
  display.clear();
  e.preventDefault();

}
