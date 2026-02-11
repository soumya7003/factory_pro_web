// Select all fields
let firstName = document.querySelector("#first_name");
let lastName = document.querySelector("#last_name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");

function validateForm() {
    let flag = true;

    // First Name Validation
    if (firstName.value.trim() === "") {
        document.querySelector(".fname-error").innerText = "First name is required.";
        flag = false;
    } else if (firstName.value.trim().length < 2) {
        document.querySelector(".fname-error").innerText = "First name must be at least 2 characters.";
        flag = false;
    } else {
        document.querySelector(".fname-error").innerText = "";
    }

    // Last Name Validation
    if (lastName.value.trim() === "") {
        document.querySelector(".lname-error").innerText = "Last name is required.";
        flag = false;
    } else if (lastName.value.trim().length < 2) {
        document.querySelector(".lname-error").innerText = "Last name must be at least 2 characters.";
        flag = false;
    } else {
        document.querySelector(".lname-error").innerText = "";
    }

    // Email Validation
    if (email.value.trim() === "") {
        document.querySelector(".email-error").innerText = "Email is required.";
        flag = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.querySelector(".email-error").innerText = "Enter a valid email address.";
        flag = false;
    } else {
        document.querySelector(".email-error").innerText = "";
    }

    // Phone Number Validation
    if (phone.value.trim() === "") {
        document.querySelector(".phone-error").innerText = "Phone number is required.";
        flag = false;
    } else if (!/^\d{10}$/.test(phone.value.trim())) {
        document.querySelector(".phone-error").innerText = "Phone number must be 10 digits.";
        flag = false;
    } else {
        document.querySelector(".phone-error").innerText = "";
    }

    // Message Validation
    if (message.value.trim() === "") {
        document.querySelector(".msg-error").innerText = "Message cannot be empty.";
        flag = false;
    } else if (message.value.trim().length < 10) {
        document.querySelector(".msg-error").innerText = "Message must be at least 10 characters.";
        flag = false;
    } else {
        document.querySelector(".msg-error").innerText = "";
    }

    return flag;
}

// Handle submit
function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
}





