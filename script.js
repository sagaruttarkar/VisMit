document.addEventListener('DOMContentLoaded', function() {
    // Initialize FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        initialView: 'dayGridMonth'
    });
    calendar.render();

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const address = formData.get('Address'); // Corrected case for 'Address' input

        // Example of sending form data
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}, Address: ${address}`);

        // Perform AJAX request or other handling here

        // Clear form inputs
        contactForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Handle click on contact link
    const contactLink = document.getElementById('contactLink');
    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Redirect to the contact page
            window.location.href = 'file:///C:/project-vismit/VisMit/index.html#contact';
        });
    }
});
