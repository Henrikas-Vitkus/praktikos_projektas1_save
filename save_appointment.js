// Initialize EmailJS
emailjs.init('923GYo2KsJ-hO4_ha'); // Replace with your EmailJS user ID


// Select form and elements
const appointmentForm = document.getElementById('appointmentForm');
const appointmentDate = document.getElementById('appointmentDate');
const serviceSelect = document.getElementById('serviceSelect');
const appointmentLaikas= document.getElementById('laikas');

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
            alert(`Rezervacija ${data} dieną ${laikas} valandą sėkminga`);
            // Redirect user to a confirmation page or reset the form
            appointmentForm.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert(`Something went wrong: ${error.text || error.message}`);

            
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