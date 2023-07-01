const h1= document.querySelector('h1')
const h2=document.querySelector('h2')
const h3=document.querySelector('h3')

function randomColor(){
    let r= Math.floor(Math.random() * 256)
    let g= Math.floor(Math.random() * 256)
    let b= Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}
const interval = setInterval(function(){
    h1.style.color=randomColor()
    h2.style.color=randomColor()
    h3.style.color=randomColor()
},2000)