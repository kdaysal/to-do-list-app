
function newItem() {

  //1. Adding a new item to the list of items: 
  //replaces document.createElement():
  let li = $('<li></li>');
  let inputValue = $('#input').val(); //replaces document.getElementById()
  li.append(inputValue);

  //add validation for blank input:
  if (inputValue === '') {
    alert("Don't leave this blank...please write something!");
  } else {
    $('#list').append(li);
  }

  //clear out input box after Add button is pressed
  $('#input').val('');

  //2. Cross out an item from the list if user double-clicks the li:
  li.on('dblclick', function crossOutItem() {
    li.toggleClass('strike');
  });

  //3(i). Add a delete button in the form of an "X": 
  let deleteButton = $('<crossOutButton></crossOutButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);
  deleteButton.on('click', deleteListItem);

  //3(ii). Add "delete" class (display: none) to hide/remove the li:
  function deleteListItem() {
    console.log(`deleteListItem function called`); //for testing only - REMOVE LATER
    li.addClass('delete');
  }

  //4. Enable reordering of the list via mouse click/drag: 
  //good resource: https://jqueryui.com/sortable/#default
  $('#list').sortable();
}









    // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








/*
// jQuery Code
//1. Adding a new item to the list:
 
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);
 
if (inputValue === '') {
  alert("You must write something!");
} else {
  $('#list').append(li);
}
//2. Crossing an item out:
function crossOut() {
      li.toggleClass("strike");
  }
 
  li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
  });
//3. Adding a delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);
 
//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
 $('#list').sortable();
*/










