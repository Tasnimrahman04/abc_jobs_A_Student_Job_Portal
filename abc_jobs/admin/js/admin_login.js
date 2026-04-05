$(document).ready(function() {
    // When the form is submitted
    $('#admin_login').submit(function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Serialize form data
        var formData = $(this).serialize();

        // Send form data to PHP script for authentication
        $.ajax({
            type: 'POST',
            url: 'authentication.php', // Replace 'authentication.php' with your PHP script file name
            data: formData,
            success: function(response) {
                // If authentication is successful, redirect to success page
                window.location.href = 'success.php'; // Replace 'success.php' with your success page URL
            },
            error: function(xhr, status, error) {
                // If authentication fails, display error message (optional)
                alert('Error: ' + error);
            }
        });
    });
});