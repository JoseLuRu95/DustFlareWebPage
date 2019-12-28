
let productText = document.querySelectorAll('.product-text');
let productBlock = document.querySelectorAll('.product');

productBlock.forEach((block,index) => {
 block.addEventListener('mouseover', () => {
  productText[index].classList.add('product-text-js');
 });
 block.addEventListener('mouseout', () => {
  productText[index].classList.remove('product-text-js');
 });
});

