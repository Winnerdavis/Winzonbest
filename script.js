// Search Button Function
document.querySelector(".btn").addEventListener("click", function () {
    const searchInput = document.querySelector(".srch").value;

    if (searchInput === "") {
        alert("Please enter something to search!");
    } else {
        alert("You searched for: " + searchInput);
    }
});


// Login Button Function
document.querySelector(".btnn").addEventListener("click", function () {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please enter email and password!");
    } else {
        alert("Login successful!");
    }
});