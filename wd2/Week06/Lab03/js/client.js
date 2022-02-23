// our default array 
const items = [
  'Do the shopping',
  'Mow the grass',
  'Wash the car'
];

// define variables that reference elements on our page
const toDoList = document.querySelector('#listul')//unordered list
const btn = document.querySelector('button') // button

// a function that creates a list item for a given dream
const appendNewItem = (item) => {
  let newListItem = document.createElement('li')//create a new list item
  newListItem.innerHTML = item //set text of new list item to dream
  toDoList.appendChild(newListItem) //add list item to the unordered list
}


// iterate through every dream and add it to our page
items.forEach(appendNewItem)

btn.addEventListener('click', ()=> {
  let newItem = prompt("Please enter a new item","")
  if (newItem) {
     let newElem = document.createElement('li')
     newElem.textContent=newItem
     toDoList.appendChild(newElem)
  }
})

toDoList.addEventListener('click', evt => {
  if(evt.target.matches('li')) {
     toDoList.removeChild(evt.target)
  }
}) 

  