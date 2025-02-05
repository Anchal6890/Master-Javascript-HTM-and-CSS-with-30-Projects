document.getElementById('inputForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputValue = document.getElementById('inputField').value;
    if (inputValue.trim() === '') {
        alert('Please enter some text.');
    } else {
        alert(`You submitted: ${inputValue}`);
    }
});
