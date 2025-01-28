emailjs.init("923GYo2KsJ-hO4_ha");

//Handle form submition
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault(); //Prevent the form from refreshing the page


const name = document.querySelector('.vardas_input').value;
const email = document.querySelector('.email_input').value;
const message = document.querySelector('.comment_input').value;

//send email using EmailJS
emailjs
    .send('service_nof4s0j', 'template_12dmcxi', {
        from_name: name,
        from_email: email,
        message: message,
    })
    .then(
        function (response){
            alert('Žinutė sėkmingai išsiūsta!');
        },
        function (error) {
            alert('Žinutės išsiūsti nepavyko, bandykite dar kartą.');
            console.error('Error:', error);
        }
    );
});
