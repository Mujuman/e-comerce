import {cart,removeCartItem} from '../data/cart.js';
import {products} from '../data/products.js';
let checkOut=document.querySelector('.order-cont')
let check=''
cart.forEach((items)=>{
  let matching;
	products.forEach((product)=>{
	  if(product.id==items.id){
	    matching=product
	  }
	})
	
  check+=`

<div class="order-item-cont order-item-cont-${matching.id}">
  
	 <div class="order-img">
		     <img src="${matching.image}" alt="">
	 </div>
	 <div class="order-img-name">
		  <p class="name">${matching.name}</p>
		  <p class="price">Quantity ${items.quantity}</p>
	 <div class="price">
			<p>$${matching.price}</p>
	 </div>
<p class="delet-cartItem" data-id="${matching.id}">Delete</p>
	 </div>
	 </div>
	 
 `
  checkOut.innerHTML=check
})

function total() {
let total = 0
cart.forEach((items) => {
	let matching;
	products.forEach((product) => {
		if (product.id == items.id) {
			matching = product
		}
	})
	total += Math.round((matching.price)*items.quantity)
})
document.querySelector('#total').innerHTML = 'Total= $'+ total
}
total()

// Add a click event for each delete button
document.querySelectorAll('.delet-cartItem').forEach((btn) => {
	btn.addEventListener('click', () => {
		let produtId=btn.dataset.id
		removeCartItem(produtId)
		let cont=document.querySelector('.order-item-cont-'+produtId)
		cont.remove()
		total()
		item() 
	});
});
function item() {
document.querySelector('.items').innerHTML=`Items( ${cart.length})`
}
item() 
