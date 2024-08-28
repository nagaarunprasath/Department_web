document.getElementById('form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email and password are valid
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
        else if (password=="") {
            alert('enter the password.');
            event.preventDefault(); // Prevent form submission
        }
     else if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault(); // Prevent form submission
    }
  
    else{
    window.open('home.html')

    }
});

document.getElementById('signup').addEventListener('click', function() {
    alert('Sign-Up functionality not implemented yet.');


});