/**
 * Your Movies - Movie Details & Modal Controller
 */

// Function to close any active modal
function closeModals() {
    const modals = document.querySelectorAll('.movies .contant .img1, .movies .contant .img2');
    modals.forEach(modal => {
        modal.style.display = 'none';
        modal.classList.remove('active');
    });

    const overlay = document.querySelector('.movies-modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }

    document.body.style.overflow = '';
}

// Global closed alias for existing inline onclick="closed()"
function closed() {
    closeModals();
}

// Function to open a specific modal by ID
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    // If already open, close it
    if (modal.style.display === 'grid' || modal.classList.contains('active')) {
        closeModals();
        return;
    }

    // Close others first
    closeModals();

    // Show target modal
    modal.style.display = 'grid';
    modal.classList.add('active');

    // Show overlay
    const overlay = getOrCreateOverlay();
    overlay.classList.add('active');

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

// Get or create backdrop overlay element
function getOrCreateOverlay() {
    let overlay = document.querySelector('.movies-modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'movies-modal-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeModals);
    }
    return overlay;
}

// Define show1 to show20 functions for backwards compatibility with inline onclick
for (let i = 1; i <= 20; i++) {
    const targetId = i === 1 ? 'show-one' : `show-${i}`;
    window[`show${i}`] = function () {
        openModal(targetId);
    };
}

// Fix typo fallback in case HTML calls sho11()
window['sho11'] = window['show11'];

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Ensure overlay exists
    getOrCreateOverlay();

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModals();
        }
    });

    // Ensure all close buttons trigger closeModals
    document.querySelectorAll('.movies .contant .mm').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    // Clicking card box opens its movie if it has a plus child
    document.querySelectorAll('.movies .imgs .box').forEach(box => {
        const plus = box.querySelector('.plus');
        if (plus) {
            box.addEventListener('click', (e) => {
                // If the click wasn't already on the plus icon itself
                if (!e.target.closest('.plus')) {
                    plus.click();
                }
            });
        }
    });
});
