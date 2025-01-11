emailjs.init('NVxQzI0XF6UDEvBg5');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_uj0ciql', 'template_9x7ckcd', this)
        .then(function() {
            alert('Message sent successfully!');
            location.reload();
        }, function(error) {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});


