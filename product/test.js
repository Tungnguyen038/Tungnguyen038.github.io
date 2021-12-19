// chuyen anh 
var imgSmall= document.querySelectorAll('.product-content-left-small-img img')
var imgBig = document.querySelector('.product-content-left-big-img img')

for (let index = 0; index < imgSmall.length; index++) {
  imgSmall[index].addEventListener('click',function(){
   var temp = imgBig.getAttribute('src');
   imgBig.setAttribute('src',imgSmall[index].getAttribute('src'));
   imgSmall[index].setAttribute('src',temp);
  })
    
}
// click cai nut
const chitiet = document.querySelector('.item-chitiet')
const baoquan = document.querySelector('.item-baoquan')
if (chitiet) {
  chitiet.addEventListener('click',function(){
    document.querySelector('.product-content-right-bottom-content-chitiet').style.display = 'block'
    document.querySelector('.product-content-right-bottom-content-baoquan').style.display = 'none'
    chitiet.style.backgroundColor ='#fff'
    baoquan.style.backgroundColor ='#fff'
  })
}
if (baoquan) {
  baoquan.addEventListener('click',function(){
    document.querySelector('.product-content-right-bottom-content-chitiet').style.display = 'none'
    document.querySelector('.product-content-right-bottom-content-baoquan').style.display = 'block'
    chitiet.style.backgroundColor ='#fff'
    baoquan.style.backgroundColor ='#fff'
  })
}

