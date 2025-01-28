// Initialize EmailJS
emailjs.init('923GYo2KsJ-hO4_ha'); // Replace with your EmailJS user ID


// Select form and elements
const appointmentForm = document.getElementById('appointmentForm');
const appointmentDate = document.getElementById('appointmentDate');
const serviceSelect = document.getElementById('serviceSelect');
const appointmentLaikas= document.getElementById('laikas');

// Select popup elements
const appointmentPopup = document.getElementById('appointmentPopup');
const popupDate = document.getElementById('popupDate');
const popupTime = document.getElementById('popupTime');
const popupService = document.getElementById('popupService');
const closePopup = document.getElementById('closePopup');

// Show the popup with appointment details
function showPopup(data, laikas, paslauga) {
    popupDate.textContent = data;
    popupTime.textContent = laikas;
    popupService.textContent = paslauga;
    appointmentPopup.style.display = 'block';
}

// Close the popup
closePopup.addEventListener('click', () => {
    appointmentPopup.style.display = 'none';
});

// Add event listener to close popup when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === appointmentPopup) {
        appointmentPopup.style.display = 'none';
    }
});

// Appointment form submission event listener
appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form fields
    const data = appointmentDate.value;
    const paslauga = serviceSelect.value;
    const laikas = appointmentLaikas.value;


    // Validate if all fields are selected
    if (!paslauga || !laikas || !data) {
        alert("Užpildykite visus laukelius.");
        return;
    }

    // Prepare email data
    const emailData = {
        paslauga: paslauga,
        data: data, 
        laikas: laikas 
    };

    // Send the email using EmailJS
    emailjs.send('service_3gombuy', 'template_a1um6is', emailData)
        .then((response) => {
            console.log('Appointment email sent successfully!', response);
            showPopup(data, laikas, paslauga);
            // Redirect user to a confirmation page or reset the form
            appointmentForm.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert(`Rezervacijos įvykdyti nepavyko, bandykite dar kartą`);
        });
});

//select date from today

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');

const appointmentDateField = document.getElementById('appointmentDate');
appointmentDateField.min = `${yyyy}-${mm}-${dd}`;
//