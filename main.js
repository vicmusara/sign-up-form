document.addEventListener("DOMContentLoaded", function() {

    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm-password").value;

    let error = document.querySelector("#error");
    if (password==="" && confirmPassword==="") {
        error.style.display = "*Passwords do not match";
    }
    if(password === confirmPassword) {
        error.style.display = "none";
    }
})