const navButton = document.querySelector('.navbtn');
const aside = document.querySelector('aside');
const links = document.querySelectorAll('a');

navButton.addEventListener('click', () => {
    aside.style.display = 'flex';
    navButton.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (!aside.contains(e.target) && e.target !==navButton) {
        aside.style.display = 'none';
        navButton.style.display = 'block';
    }
})

links.forEach(link => {
    link.addEventListener('click', () => {
        aside.style.display = 'none';
        navButton.style.display = 'block';
    })
})