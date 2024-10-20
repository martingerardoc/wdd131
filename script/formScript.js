// Obtener el año actual para el copyright
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Obtener la última fecha de modificación del documento
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;


const products = [
    { id: 'product1', name: 'Product A' },
    { id: 'product2', name: 'Product B' },
    { id: 'product3', name: 'Product C' },
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');
    
    // Populate product options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Product ID as value
        option.textContent = product.name; // Product name as display text
        productSelect.appendChild(option);
    });

    // Handle form submission
    document.getElementById('productReviewForm').addEventListener('submit', () => {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
    });
});