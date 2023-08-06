function createHeading () {
    // create an element and give it content (declarative)
    var headingOne = document.createElement("h1")
    headingOne.innerHTML = "Pat is busting for a piss"

    // create a variable, retrieve elements that are called body
    var listOfBodyElements = document.getElementsByTagName("body")
    // get the first item from the list (The body element)
    var body = listOfBodyElements[0]
    // add the heading to the body
    body.appendChild(headingOne)
}
createHeading ()
createHeading ()

//A function is a reuseable block of code
//whenever we see a parenthisis after a word we are callign a fucntion
// function printHi (){
//     console.log ("hello")
// }
// printHi()
// printHi()
// printHi()
// printHi()