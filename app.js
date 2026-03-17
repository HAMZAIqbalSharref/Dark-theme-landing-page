
function EmailValidation(){
    const button =
        document.querySelector(".signup-btn")
    const input = document.querySelector(".email-input")

    button.addEventListener("click", function() {
        if(input.value=== ""){
            alert("Please Enter an Email")
        }
        else{
            alert("Thanks for signing up")
        }
    })

}
