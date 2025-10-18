export let cart=JSON.parse(localStorage.getItem('cart'))
function saveToLocal() {
  localStorage.setItem('cart',JSON.stringify(cart))
}
if (!cart) {
  cart=[
    {id:1,
      quantity: 1
    },
     {id:1,
      quantity: 1
    }
  ]
} 
export function add_to_cart(productid) {
  let matchingItem;
cart.forEach((item) => {
  
  if (productid == item.id) {
    matchingItem = item
  }
})
if (matchingItem) {
  matchingItem.quantity += 1
}
else {
  cart.push({
    id: productid,
    quantity: 1
  })
}
saveToLocal() 
}

 export function removeCartItem(cId) {
let newCart = []
cart.forEach((cartItem) => {
  if (cartItem.id != cId) {
    newCart.push(cartItem)
  }
  
})
cart = newCart
saveToLocal() 
  }

