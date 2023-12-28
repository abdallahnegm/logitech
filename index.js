//----------------------------------------------------nav bar--------------------------------------\\
const menu= document.querySelector('.menu');
const menuBtn=document.querySelector('.menu-btn');
menuBtn.addEventListener('click' , ()=>{
    menu.classList.toggle('menu-open')
});
//----------------------scroooooooo00000000oooooooooooool--------------------------------\\
const pagination =document.querySelector('#pagi li a')
let hom =document.getElementById('hom')
let abo =document.getElementById('abo')
let pro =document.getElementById('pro')
let spe =document.getElementById('spe')
window.onscroll= function (){
if(scrollY>399 && scrollY <900){
    hom.classList.remove('active')
    abo.classList.add('active')
}else if(scrollY > 930 && scrollY <4000){
    abo.classList.remove('active')
    hom.classList.remove('active')
    pro.classList.add('active')
}else if(scrollY > 4000 ){
    pro.classList.remove('active')
    spe.classList.add('active')
}else{
    hom.classList.add('active')
    abo.classList.remove('active')
    pro.classList.remove('active')
    spe.classList.remove('active')
}
}