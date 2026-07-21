const hireButton = document.querySelector("#home button");

hireButton.addEventListener("click", function () {
    alert("Thank you for visiting my portfolio!");
});

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});