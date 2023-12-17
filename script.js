document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        var nameInput = document.getElementById('name');
        var surnameInput = document.getElementById('surname');
        var cinInput = document.getElementById('cin');
        var emailInput = document.getElementById('email');
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
            alert('Name should only contain letters.');
            event.preventDefault();
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(surnameInput.value)) {
            alert('Surname should only contain letters.');
            event.preventDefault();
            return;
        }
        if (cinInput.value.length !== 8 || isNaN(cinInput.value)) {
            alert('Please enter an 8 digit CIN.');
            event.preventDefault();
            return;
        }
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }
    });
});