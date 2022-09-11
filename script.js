let submitBtn = document.querySelector("button");
let inputField = document.querySelector("input");
let label = document.querySelector("label");
let errorMessage;

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitBtn.addEventListener("click", submit);



function submit(){
   
    if(inputField.value == "")
    {
        errorMessage = "Whoops! It looks like you forgot to add your email";
        inputField.style.border = "1px solid hsl(354, 100%, 66%)";
    }
    else if(!inputField.value.match(mailformat)){
        errorMessage = "Please provide a valid email address";
        inputField.style.border = "1px solid hsl(354, 100%, 66%)";
    }
    else
    {
        errorMessage = "";
        inputField.style.border = "1.5px solid hsl(223, 100%, 88%)";
    }
    label.innerText = errorMessage;
}