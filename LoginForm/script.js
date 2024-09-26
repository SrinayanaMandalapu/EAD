function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == '' || password == ''){
      alert("Name and password must be filled out");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)){
      alert("Email pattern is not valid");
      email = '';
      password = '';
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false; // Prevent form submission
    }

    return true;
  }
  