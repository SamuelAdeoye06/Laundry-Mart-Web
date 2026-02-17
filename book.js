document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value;

    const reviewHTML = `
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service Type:</strong> ${service}</p>
        <p><strong>Pickup Date:</strong> ${date}</p>
        <p><strong>Additional Notes:</strong> ${notes || "None"}</p>
    `;

    document.getElementById("reviewContent").innerHTML = reviewHTML;

    const reviewModal = new bootstrap.Modal(document.getElementById('reviewModal'));
    reviewModal.show();
});

document.getElementById("confirmBooking").addEventListener("click", function() {

    const reviewModalEl = document.getElementById('reviewModal');
    const reviewModal = bootstrap.Modal.getInstance(reviewModalEl);
    reviewModal.hide();

    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();

    document.getElementById("bookingForm").reset();
});
