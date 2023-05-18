//pego a div #box
const elementoVo = document.querySelector("#box");

//array de obj
const elementos = [
    {tag: 'p', texto:'Frase1'},//0
    {tag: 'div', texto:'Frase2'},//1
    {tag: 'footer', texto:'Frase3'},//2
    {tag: 'section', texto:'Frase4'}//3
];

//tenho q criar um a div dentro da avo
const elementoPai = document.createElement('div')

//crio meus elementos na div pai
for (let i=0; i < elementos.length; i++){
    //criar um elemento com a tag do obj
    let tags = document.createElement(elementos[i].tag)
    
    //inserir a frase do obj
    let textoTag = document.createTextNode(elementos[i].texto)
    
    //adc o texto nma tag
    tags.appendChild(textoTag)

    //anexo ao elemnto pai
    elementoPai.appendChild(tags)
}
//anexo ao vo
elementoVo.appendChild(elementoPai);