/* =========================================
   CONTACT PAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const contactSuccess = document.getElementById("contactSuccess");
    const sendAnother = document.getElementById("sendAnother");

    if (!contactForm) {
        return;
    }


    /* =========================================
       FORM SUBMISSION
    ========================================= */

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        let isValid = true;


        /* =========================================
           NAME VALIDATION
        ========================================= */

        if (name.value.trim().length < 2) {

            name.classList.add("is-invalid");
            name.classList.remove("is-valid");

            isValid = false;

        } else {

            name.classList.remove("is-invalid");
            name.classList.add("is-valid");

        }


        /* =========================================
           EMAIL VALIDATION
        ========================================= */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            email.classList.add("is-invalid");
            email.classList.remove("is-valid");

            isValid = false;

        } else {

            email.classList.remove("is-invalid");
            email.classList.add("is-valid");

        }


        /* =========================================
           PHONE VALIDATION
        ========================================= */

        const phonePattern =
            /^[0-9+\-\s()]{10,15}$/;

        if (!phonePattern.test(phone.value.trim())) {

            phone.classList.add("is-invalid");
            phone.classList.remove("is-valid");

            isValid = false;

        } else {

            phone.classList.remove("is-invalid");
            phone.classList.add("is-valid");

        }


        /* =========================================
           SUBJECT VALIDATION
        ========================================= */

        if (subject.value === "") {

            subject.classList.add("is-invalid");
            subject.classList.remove("is-valid");

            isValid = false;

        } else {

            subject.classList.remove("is-invalid");
            subject.classList.add("is-valid");

        }


        /* =========================================
           MESSAGE VALIDATION
        ========================================= */

        if (message.value.trim().length < 10) {

            message.classList.add("is-invalid");
            message.classList.remove("is-valid");

            isValid = false;

        } else {

            message.classList.remove("is-invalid");
            message.classList.add("is-valid");

        }


        /* =========================================
           SHOW SUCCESS
        ========================================= */

        if (isValid) {

            contactForm.style.display = "none";

            contactSuccess.classList.add("show");

            window.scrollTo({
                top: contactSuccess.offsetTop - 150,
                behavior: "smooth"
            });

        }

    });


    /* =========================================
       REMOVE VALIDATION ERRORS WHILE TYPING
    ========================================= */

    const fields = contactForm.querySelectorAll(
        "input, select, textarea"
    );

    fields.forEach(function (field) {

        field.addEventListener("input", function () {

            if (field.value.trim() !== "") {
                field.classList.remove("is-invalid");
            }

        });

        field.addEventListener("change", function () {

            if (field.value !== "") {
                field.classList.remove("is-invalid");
            }

        });

    });


    /* =========================================
       SEND ANOTHER MESSAGE
    ========================================= */

    if (sendAnother) {

        sendAnother.addEventListener("click", function () {

            contactSuccess.classList.remove("show");

            contactForm.style.display = "block";

            contactForm.reset();

            fields.forEach(function (field) {

                field.classList.remove("is-valid");
                field.classList.remove("is-invalid");

            });

            window.scrollTo({
                top: contactForm.offsetTop - 150,
                behavior: "smooth"
            });

        });

    }

});