document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let namePattern = /^[A-Za-z\s]{3,30}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(name)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Name',
            text: 'Name should only contain letters (3–30 characters).'
        });
        return;
    }

    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    if (message.length < 10) {
        Swal.fire({
            icon: 'error',
            title: 'Message Too Short',
            text: 'Your comment should be at least 10 characters long.'
        });
        return;
    }

        document.getElementById("contactForm").submit();
        document.getElementById("contactForm").reset();
    });
