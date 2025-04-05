


//changeText
const roles = ["Web Developer","Programmer","Developer"];
let index = 0;

function changeText() {
    const textElement = document.getElementById("changing-text");
    const newText = roles[index];
    let i = 0;
    textElement.innerHTML = ""; // Pehle text ko empty karo

    function typeLetter() {
        if (i < newText.length) {
            let span = document.createElement("span");
            span.textContent = newText[i];
            span.classList.add("fade-in");
            span.style.animation = `fadeIn 0.3s ease-in ${i * 0.1}s forwards`;
            textElement.appendChild(span);
            i++;
            setTimeout(typeLetter, 20);
        } else {
            setTimeout(() => {
                textElement.classList.add("fade-out");
                setTimeout(() => {
                    textElement.classList.remove("fade-out");
                    index = (index + 1) % roles.length;
                    changeText();
                }, 500);
            }, 2000);
        }
    }
    typeLetter();
}

document.addEventListener("DOMContentLoaded", changeText);











//contact-form

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const inputs = form.querySelectorAll("input, textarea");
    const button = form.querySelector("button");
    const messageBox = document.createElement("p");
    messageBox.style.color = "red";
    messageBox.style.marginTop = "10px";
    form.appendChild(messageBox);

    function validateForm(event) {
        event.preventDefault();
        let valid = true;
        messageBox.textContent = "";
        
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                if (!input.classList.contains("error")) {
                    input.style.border = "2px solid red";
                    input.classList.add("error");
                }
            } else {
                input.style.border = "2px solid green";
                input.classList.remove("error");
            }
        });

        if (valid) {
            messageBox.style.color = "green";
            messageBox.textContent = "Form submitted successfully!";
            form.reset();
            inputs.forEach(input => input.style.border = "");
        } else {
            messageBox.style.color = "red";
            messageBox.textContent = "Please fill all the fields correctly.";
        }
    }

    button.addEventListener("click", validateForm);
    form.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            validateForm(event);
        }
    });
});











//nav bar
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a"); // Select all anchor tags inside navbar

// Toggle navbar on menu click
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close navbar when a link is clicked
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active"); // Hide navbar after clicking a link
    });
});

















// btn clik me





const colors = ["#e63946", "#26001B", "#ffa69e"]; // blue, green, purple
let colorIndex = 0;

document.getElementById("colorChanger").addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});







