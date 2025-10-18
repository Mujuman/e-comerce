import {cart,add_to_cart} from '../data/cart.js';
import { products } from '../data/products.js';


let productHtml='';
products.forEach((product)=>{
productHtml+=`
<div class="product-container">
			<img src="${product.image}" alt="">
			<p class="name">${product.name}</p>
			<p class="price">price:$ ${product.price}</p>
			
			<button class='btn js-btn' data-product-id='${product.id}'>Add to Cart</button>
			
		</div>
`

})
function filter(item) {
document.querySelector('.grid').innerHTML=item
}
filter(productHtml)


function cartNum() {
let total = 0;
cart.forEach((item) => {
  total += item.quantity
})
document.querySelector('#cartNum').innerHTML = total
}


document.querySelectorAll('.js-btn').forEach((button)=>{
  button.addEventListener('click',()=>{
    
    let productid=button.dataset.productId
  add_to_cart(productid)
  cartNum()
})
})
