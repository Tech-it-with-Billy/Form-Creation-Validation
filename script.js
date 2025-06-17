document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission and Event Prevention
    form.addEventListener('submit', function(event){
        event.preventDefault();

        // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        console.log(username);

        const email = document.getElementById('email').value.trim();
        console.log(email);

        const password = document.getElementById('password').value.trim();
        console.log(password);

        //  Validation Logic
        let isValid = true;
        let messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push('Username too short!');
        }

        if (!(email.includes('@') &&  email.includes('.'))) {
            isValid = false;
            messages.push('Incomplete email!');
        }

        if (password.length < 8) {
            isValid = false;
            messages.push('Password too short!');
        }

        // Displaying Feedback
        feedbackDiv.style.display = 'block'
        if (isValid) {
            feedbackDiv.textContent = 'Registration Successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    })
})