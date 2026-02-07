
// Declaration des variables
// index
const btnOui = document.getElementById('buttonOui')
const btnNon = document.getElementById('buttonNon')
const loader = document.getElementById('loader')
const buttons = document.querySelector('.title')
let compteur = 0


// Page Index ACTIONS OUI or NON

btnOui.addEventListener('click', () => {
    buttons.style.display = 'none'
    loader.classList.remove('chargement')
    setTimeout(() =>{
        window.location.href ='presentation.html';
    },5000)
})
btnNon.addEventListener('mouseover', () =>{
    const randomX = (Math.random() * 700)-400;
    const randomY = (Math.random() * 300)-150;
    btnNon.style.transform = `translate(${randomX}px, ${randomY}px)`
    compteur++;
    
})