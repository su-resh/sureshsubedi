const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const topBtn = document.querySelector('.top-btn');
const downBtn = document.querySelector('.down-btn');

// Add event listener to each Add to Cart button
addToCartBtns.forEach(btn => {
btn.addEventListener('click', () => {
alert('Added to Cart');
});
});

// Add event listener to top button
topBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// Add event listener to down button
downBtn.addEventListener('click', () => {
window.scrollTo({
top: document.body.scrollHeight,
behavior: 'smooth'
});
});