document.addEventListener('DOMContentLoaded', function() {
    // Get the registration form and create overlay
    const form = document.getElementById('apldg-registration-form');
    const overlay = document.createElement('div');
    overlay.className = 'form-overlay';
    document.body.appendChild(overlay);

    // Add styles to form
    form.style.display = 'none';
    form.style.position = 'fixed';
    form.style.top = '50%';
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.background = 'white';
    form.style.padding = '30px';
    form.style.borderRadius = '8px';
    form.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
    form.style.zIndex = '1000';
    form.style.maxWidth = '800px';
    form.style.width = '90%';

    // Style overlay
    overlay.style.display = 'none';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '999';

    // Get all register buttons
    const registerButtons = document.querySelectorAll('.apldg-register-btn[href="#apldg_registration"]');

    // Add click event to register buttons
    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            form.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // Close form when clicking overlay
    overlay.addEventListener('click', function() {
        form.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Add escape key support to close form
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && form.style.display === 'block') {
            form.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});
