// BLOOD DONATION PORTAL JAVASCRIPT

// 1. Donor Registration
const donorForm = document.querySelector(".donor-section form");

donorForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputs = donorForm.querySelectorAll("input");
    const bloodGroup = donorForm.querySelector("select");

    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const phone = inputs[2].value.trim();
    const age = Number(inputs[3].value);
    const group = bloodGroup.value;
    const city = inputs[4].value.trim();

    if (!name || !email || !phone || !age || !city ||
        group === "Select Blood Group") {
        alert("Please fill all the fields!");
        return;
    }

    if (age < 18 || age > 65) {
        alert("Please enter an age between 18 and 65.");
        return;
    }

    alert("Donor Registration Successful!");

    donorForm.reset();
});


// 2. Find Blood Search
const searchForm = document.querySelector(".find-blood form");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const group = searchForm.querySelector("select").value;
    const city = searchForm.querySelector("input").value.trim();

    if (group === "Select Blood Group" || city === "") {
        alert("Please select blood group and enter city!");
        return;
    }

    alert(
        "Searching for " + group +
        " blood donors in " + city + "..."
    );
});


// 3. Login Form
const loginForm = document.querySelector(".login-section form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = loginForm.querySelector(
        'input[type="email"]'
    ).value.trim();

    const password = loginForm.querySelector(
        'input[type="password"]'
    ).value;

    if (email === "" || password === "") {
        alert("Please enter email and password!");
        return;
    }

    alert("Login form submitted successfully!");

    loginForm.reset();
});


// 4. Smooth Scrolling
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        const text = link.textContent.trim();

        const sections = {
            "Home": ".hero",
            "Find Blood": ".find-blood",
            "Become a Donor": ".donor-section",
            "Login": ".login-section"
        };

        const target = document.querySelector(sections[text]);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 5. Welcome Message
window.addEventListener("load", function() {
    console.log("Welcome to Blood Donation Portal!");
});

donorForm = document.getElementById("donorForm");

donorForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const donorData = {
        full_name: document.getElementById("full_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        age: document.getElementById("age").value,
        blood_group: document.getElementById("blood_group").value,
        city: document.getElementById("city").value
    };

    try {
        const response = await fetch(
            "http://localhost:5000/register-donor",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(donorData)
            }
        );

        const result = await response.json();

        if (response.ok) {
            alert("Donor Registered Successfully!");
            donorForm.reset();
        } else {
            alert(result.message || "Registration Failed!");
        }

    } catch (error) {
        console.log(error);
        alert("Server connection failed!");
    }

});