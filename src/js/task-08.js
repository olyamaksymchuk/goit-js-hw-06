const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return window.alert("Please fill in all the fields!");
    }

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const passwordEl = formElements.password.value;
    console.log(mail, passwordEl);
    event.currentTarget.reset();
}

