let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart').innerText = `Cart (${cartCount})`;
        alert(`${button.dataset.name} has been added to your cart!`);
    });
});
