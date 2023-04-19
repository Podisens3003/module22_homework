const btn = document.querySelector('.button');
const firstIcon = document.querySelector('.first-icon');
const secondtIcon = document.querySelector('.second-icon');


btn.addEventListener('click', ()=>{
    if (secondtIcon.style.display === 'initial') {
        secondtIcon.style.display = 'none';
        firstIcon.style.display = 'initial';
        return;
    }

    firstIcon.style.display = 'none';
    secondtIcon.style.display = 'initial';
})