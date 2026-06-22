/* ============================================
   Medical Resume - Vanilla JS
   ============================================ */

(function() {
    'use strict';

    // Avatar error handling
    const avatar = document.getElementById('avatar');
    if (avatar) {
        avatar.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect fill="#e2e8f0" width="120" height="120"/><text x="60" y="70" font-size="40" fill="#718096" text-anchor="middle" font-family="sans-serif">董</text></svg>'
            );
        });
    }

    // Print button: hide before print, show after
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        window.addEventListener('beforeprint', function() {
            printBtn.style.display = 'none';
        });
        window.addEventListener('afterprint', function() {
            printBtn.style.display = '';
        });
    }

    // Smooth reveal on load
    document.addEventListener('DOMContentLoaded', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.4s ease';
        requestAnimationFrame(function() {
            document.body.style.opacity = '1';
        });
    });

})();
