// When creating an event listener for submit buttons
// We place the event listener on the form
// Not on the button itself
// The default action of the submit button is to refresh the page


const form = document.querySelector(".signup-form")
const pattern = /^[a-zA-Z]{6,12}$/
const messagediv = document.querySelector(".message")

form.addEventListener("submit",e =>{

    
    e.preventDefault() // prevents refresh default action
    //quick reference to value using dot notation, quicker than creating a selector
    let username = form.username.value
    // form.username refers to an ID or Name property called username
    // It returns that value

    if (pattern.test(username)){
// regex datatype .text returns true if the regex is valid and false if invalid
        messagediv.textContent = "Username is valid"

    } else
    {
        messagediv.textContent = "Username must contain only letters and be between 6-12 characters long"
    }



})

form.addEventListener("keyup",e=>{
    if (pattern.test(e.target.value)){
        form.username.setAttribute("class","success")
    } else {form.username.setAttribute("class","error")}
})