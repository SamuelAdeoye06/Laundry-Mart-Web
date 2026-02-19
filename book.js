document.addEventListener("DOMContentLoaded", function () {

    // Initialize EmailJS
    emailjs.init("qP8rxts8t_XS2MzKP");

    const bookingForm = document.getElementById("bookingForm");
    const reviewModalEl = document.getElementById("reviewModal");
    const successModalEl = document.getElementById("successModal");
    const reviewModal = new bootstrap.Modal(reviewModalEl);
    const successModal = new bootstrap.Modal(successModalEl);
    const reviewContent = document.getElementById("reviewContent");
    const confirmBookingBtn = document.getElementById("confirmBooking");

    let formData = {};

    // STEP 1: Show Review Modal
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        formData = {
            from_name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            reply_to: document.getElementById("email").value,
            address: document.getElementById("address").value,
            service: document.getElementById("service").value,
            date: document.getElementById("date").value,
            notes: document.getElementById("notes").value
        };

        reviewContent.innerHTML = `
            <p><strong>Name:</strong> ${formData.from_name}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Email:</strong> ${formData.reply_to}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <p><strong>Service:</strong> ${formData.service}</p>
            <p><strong>Date:</strong> ${formData.date}</p>
            <p><strong>Notes:</strong> ${formData.notes || "None"}</p>
        `;

        reviewModal.show();
    });

    // STEP 2: Confirm Booking & Send Email
    confirmBookingBtn.addEventListener("click", function () {

        confirmBookingBtn.disabled = true;
        confirmBookingBtn.textContent = "Processing...";

        emailjs.send("service_ullcats", "template_mew0dz4", formData)
            .then(function () {

                reviewModal.hide();
                successModal.show();
                bookingForm.reset();

                confirmBookingBtn.disabled = false;
                confirmBookingBtn.textContent = "Confirm Booking";

            })
            .catch(function (error) {

                reviewModal.hide();

                document.querySelector("#successModal h4").textContent = "Booking Failed";
                document.querySelector("#successModal p").textContent =
                    "Something went wrong. Please try again later.";

                successModal.show();

                console.log(error);

                confirmBookingBtn.disabled = false;
                confirmBookingBtn.textContent = "Confirm Booking";
            });
    });

});
