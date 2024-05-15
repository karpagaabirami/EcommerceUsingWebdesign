document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const errorMessage = document.getElementById("error");
    const successMessage = document.getElementById("success");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        errorMessage.textContent = "";
        successMessage.textContent = "";

        
        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
            errorMessage.textContent = "Please fill out all required fields.";
        } else {
           
            successMessage.textContent = "Message sent successfully!";
            form.reset(); 
            
        }
    });
});
