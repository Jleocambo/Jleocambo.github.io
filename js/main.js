const images = document.querySelectorAll('.imga');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copys = document.querySelector('.copys');
const closec = document.querySelector('.closec');

images.forEach(image =>{
    image.addEventListener('click', ()=>{

      addImage(image.getAttribute('src'));

   })
 })
 const addImage = (src)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = src;

 }

 closec.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
 })



