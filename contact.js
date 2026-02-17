document.querySelector(".contact-section form").addEventListener("submit", function(e) {
    e.preventDefault();

    const successModal = new bootstrap.Modal(document.getElementById('contactSuccessModal'));
    successModal.show();

    this.reset();
});

document.querySelectorAll(".faq-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

