const divParagrafos = document.querySelector('.paragrafos');
const paragrafos = divParagrafos.querySelectorAll('p');
const estilos = getComputedStyle(document.body);
const estiloBg = estilos.backgroundColor;


for (let cor of paragrafos){
    cor.style.backgroundColor = `${estiloBg}`
    cor.style.color = `#f2f2f2`
}