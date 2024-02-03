

form.addEventListener("submit", (e) => {
    const name = document.getElementById("firstname")
    const lastname = document.getElementById("lastname");
    const password = document.getElementById("signup-password")
    const passwordrepeat = document.getElementById("password_repeat")
    const email = document.getElementById("user_email")
    const form = document.getElementById("form")

    let messages = []


    if(name.value ==="" || name.value == null) {
        messages.push("Name is required")
    }

    if(password.value ==="" || password.value === null) {
        messages.push("Please enter your password")
    }

    if(password.value !== passwordrepeat.value ) {
        messages.push("Confirmation password needs to match password ")
    }

    if(password.value.length <= 6) {
        messages.push("Password must be longer than 6 characters")
    }

    if(name.value ==="" || email.value==="" || lastname.value ==="") {
        messages.push("Please fill in all your details")
    }



    if(messages.length > 0) {
        e.preventDefault()
        for(let i=0; i<messages.length; i++) {
            alert(messages[i])
        }
    }



    else {
        alert("Your account has been created")
    }
})