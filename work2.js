function validateForm() {
    
    //receiving value from input of form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const text = document.getElementById('message').value;
   
   //chacking all input is filfulled
        if (name.trim() === '' || email.trim() === '' || text.trim() === '') {
            // If the field is empty, display an alert message
            alert('Please fill out all required fields.');
            // Prevent form submission
            return false;
        }
    
    // If all required fields are filled, allow form submission
    return true;
}
