
// Script voor experiences
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    }

//menu op kleine apparaat
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}function closemenu(){
    sidemenu.style.right = "-200px";
}
//contact script
function sendMail() {
    // Haal de waarde van de reCAPTCHA op
    var recaptchaResponse = grecaptcha.getResponse();

    // Controleer of alle velden zijn ingevuld en reCAPTCHA is voltooid
    if (recaptchaResponse !== "" &&
        document.getElementById("name").value.trim() !== "" &&
        isValidEmail(document.getElementById("email").value) &&
        document.getElementById("message").value.trim() !== "") {

        // Maak het parms-object
        let parms = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Verstuur de e-mail met emailjs
        emailjs.send("service_ktfdyhn", "template_g8bfznw", parms)
            .then(function () {
                alert("Email Sent!");
            })
            .catch(function (error) {
                console.error("Error sending email:", error);
                alert("Er is een fout opgetreden bij het verzenden van de e-mail. Probeer het later opnieuw.");
            });

    } else {
        // Toon een foutmelding als niet alle velden zijn ingevuld, reCAPTCHA niet is voltooid, of het e-mailadres is ongeldig
        alert("Vul alle velden in, voltooi de reCAPTCHA en voer een geldig e-mailadres in.");
    }
}

// Functie om te controleren of een e-mailadres geldig is
function isValidEmail(email) {
    // Eenvoudig patroon voor e-mailvalidatie
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function handleRecaptcha(response) {
    console.log("ReCAPTCHA response:", response);
}
