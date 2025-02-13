// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.dataset.name;
            alert(`${itemName} added to cart! (Mock Functionality)`);
            // In a real website, you would handle cart updates here
        });
    });
});