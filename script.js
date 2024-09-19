document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        filterSneakers(color);
    });
});

function filterSneakers(color) {
    document.querySelectorAll('.sneaker').forEach(sneaker => {
        if (color === 'all' || sneaker.getAttribute('data-color') === color) {
            sneaker.style.display = 'block';
        } else {
            sneaker.style.display = 'none';
        }
    });
}

document.getElementById('shopNow').addEventListener('click', () => {
    alert('Start shopping for your favorite sneakers!');
});
