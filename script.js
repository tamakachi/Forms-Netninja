// When creating an event listener for submit buttons
// We place the event listener on the form
// Not on the button itself
// The default action of the submit button is to refresh the page


const form = document.querySelector(".signup-form")

form.addEventListener("submit",e =>{

    e.preventDefault() // prevents refresh default action
    //quick reference to value using dot notation, quicker than creating a selector
    console.log(e.username.value)
    // e.username refers to an ID or Name property called username
    // It returns that value

    
})