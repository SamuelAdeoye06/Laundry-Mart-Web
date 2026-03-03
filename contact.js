document.querySelector(".contact-section form").addEventListener("submit", function(e) {
    e.preventDefault();

    const successModal = new bootstrap.Modal(document.getElementById('contactSuccessModal'));
    successModal.show();

    this.reset();
});

// document.querySelectorAll(".faq-card").forEach(card => {
//     card.addEventListener("click", () => {
//         card.classList.toggle("active");
//     });
// });

document.querySelectorAll(".faq-card").forEach(question => {
    question.addEventListener("click", function () {

        const card = this.closest(".faq-card");

        document.querySelectorAll(".faq-card").forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove("active");
            }
        });

        card.classList.toggle("active");
    });
});

// Initialize EmailJS
(function () {
    emailjs.init("qP8rxts8t_XS2MzKP");
})();

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector("button");
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";


        emailjs.sendForm("service_ullcats", "template_93j5di7", this)
            .then(function () {

                showModal(
                    "success",
                    "Message Sent Successfully",
                    "Thank you for reaching out. Our team will send you an email shortly."
                );

                contactForm.reset();

                submitButton.disabled = false;
                submitButton.textContent = "Send Message";


            }, function (error) {

                showModal(
                    "error",
                    "Message Failed",
                    "Something went wrong. Please try again later."
                );

                console.log(error);

                submitButton.disabled = false;
                submitButton.textContent = "Send Message";

            });
    });
}


// Function to control modal
function showModal(type, title, message) {

    const modalIcon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    if (type === "success") {
        modalIcon.className = "bi bi-check-circle-fill text-success";
    } else {
        modalIcon.className = "bi bi-x-circle-fill text-danger";
    }

    const modal = new bootstrap.Modal(document.getElementById("contactStatusModal"));
    modal.show();
}
