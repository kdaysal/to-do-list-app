//Global Space
//Call newItem() if Enter key is pressed while focus is on input box
$('.container').on('keypress', function (e) {
  if (e.which == 13) {
    e.preventDefault();//prevent Enter key from refreshing the browser
    console.log('Enter Key pressed!');//For testing only - REMOVE LATER
    newItem();
  }
});

function newItem() {

  //1. Add a new item to the list of items: 
  //replaces document.createElement():
  let li = $('<li></li>');
  let inputValue = $('#input').val(); //replaces document.getElementById()
  li.append(inputValue);

  //Add validation for blank input:
  if (inputValue === '') {
    alert("Don't leave this blank...please write something!");
  } else {
    $('#list').append(li);
  }

  //Clear out input value after Add button is pressed and move focus back to input box
  $('#input').val('');
  $('#input').focus();

  //Cross out an item from the list if user double-clicks the li:
  li.on('dblclick', function crossOutItem() {
    li.toggleClass('strike');
  });

  //Add a delete button in the form of an "X": 
  let deleteButton = $('<crossOutButton></crossOutButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);
  deleteButton.on('click', deleteListItem);

  //Add "delete" class (display: none) to hide/remove the li:
  function deleteListItem() {
    console.log(`deleteListItem function called`); //for testing only - REMOVE LATER
    li.addClass('delete');
  }

  //Enable reordering of the list via mouse click/drag: 
  //helpful resource: https://jqueryui.com/sortable/#default
  $('#list').sortable();
}