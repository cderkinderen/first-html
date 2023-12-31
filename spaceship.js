// element cache
const Form = document.getElementById("my-form");
const ul = document.getElementById('to-do-list');    
const input = document.getElementById("my-input");
const select = document.getElementById("filter");

//TODO: filter list and render complete todos
const ALL = 'ALL';
const COMPLETED = 'COMPLETED';
const ACTIVE = 'ACTIVE';

// example to do model
let filter = ACTIVE

const toDoNumberOne = {
    content: 'Take out the rubbish bin',
    isComplete: true
}

const toDoNumberTwo = {
    content: 'Do a poo',
    isComplete: false
}

const allToDos = [
    toDoNumberOne, 
    toDoNumberTwo,
    {
        content: 'Do more paired programming',
        isComplete: false
    }
]
// TODO: Submiting a to do should add it to the list in Javascript. To add it to the page we should re-render the list.
renderList();

function createListItem (content, isChecked) {
    console.log('createListItem', content, isChecked)
    const id = content.split(' ').join('-')

    //Create LI 
    const li = document.createElement("li")
    //create checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', id)
    if (isChecked) {
        checkbox.setAttribute('checked', isChecked)
    }
    //create label
    const label = document.createElement('label')
    label.setAttribute('for', id)
    label.innerHTML = content
    //attach the checkbox to the LI
    li.appendChild(checkbox)
    //attach the label to the LI
    li.appendChild(label)
    //attach the LI to the list
    ul.appendChild(li)

}

function renderList(){
    ul.innerHTML = ''
    const activeToDos = allToDos.filter(function (toDo){
        //simplify this condition
        if (toDo.isComplete === true) {
            return false
        } else {
            return true
        }
    })
    console.log(activeToDos);
// Why is the filter not working?
//What is JSON?
    activeToDos.forEach(function toDoListItem(toDo) {
        createListItem(toDo.content, toDo.isComplete)
    })    
}

Form.onsubmit = function (event){
    event.preventDefault()
    console.log('submit', event.target[0].value)
// add new todo to Javascript list
    allToDos.push({
        content: event.target[0].value,
        isComplete: false
    })
        

    renderList()

    input.value = "";
}

select.onchange = function (event){
    filter = event.target.value;
    //Crat a copy of th list, kp only lmnts that match filtr
    allToDos.filter(function (todo) {
        console.log(todo, filter);
        if (filter === ACTIVE) {
            return !todo.isComplete
        }
        if (filter === COMPLETED) {
            return todo.isComplete
        }
        if (filter === ALL) {
            return true
        }
        return false
    })
    //Rerendre th list
}





// function createHeading (content) {
//     // create an element and give it content (declarative)
//     var headingOne = document.createElement("h1")
//     headingOne.innerHTML = content

//     // create a variable, retrieve elements that are called body
//     var listOfBodyElements = document.getElementsByTagName("body")
//     // get the first item from the list (The body element)
//     var body = listOfBodyElements[0]
//     // add the heading to the body
//     body.appendChild(headingOne)
// }
// createHeading ('Pat is busting for a piss right now')
// createHeading ('Poppy is outside')

// //Find the <h2> in the document
// //Save that in a variable
// const listOfHeadingTwoElements = document.getElementsByTagName("h2");

// //access the onclick property
// //assign our function (please put something into the name)
// const firstHeadingTwo = listOfHeadingTwoElements[0];
// firstHeadingTwo.onclick = createHeading;




//a variable is an access point for some data (an alias)

//A function is a reuseable block of code
//whenever we see a parenthisis after a word we are callign a fucntion
// function printHi (){
//     console.log ("hello")
// }
// printHi()
// printHi()
// printHi()
// printHi()
// JS is event driven e.g. User entering in text, clicking a button, scrolling the page, resizing the column etc