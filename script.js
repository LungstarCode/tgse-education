document.getElementById('sun-icon').addEventListener('click', () => {
    const body = document.body;
    const icon = document.getElementById('sun-icon');

    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'var(--background)'; 
        icon.innerHTML = '&#x2600'; // Moon Icon
    } else {
        body.style.backgroundColor = 'white'; // Light mode
        icon.innerHTML = '&#x1F319;'; // Sun Icon
    }
});
