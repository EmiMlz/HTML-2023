// Obtener los botones de "Añadir" en el carrito
var addToCartButtons = document.getElementsByClassName('btn-shop');

// Obtener el contenedor del carrito y los elementos del carrito
var cartContainer = document.querySelector('.cart-container');
var cartItems = document.getElementById('cart-items');
var cartTotal = document.getElementById('cart-total');
var cartContent = {}; // Objeto para almacenar los productos agregados al carrito
var total = 0;

// Agregar evento de clic a cada botón de "Añadir"
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Función para añadir un producto al carrito
function addToCart(event) {
  var button = event.target;
  var product = button.parentElement.parentElement;
  var productName = product.getElementsByClassName('product-title')[0].innerText;
  var productPrice = parseFloat(product.getElementsByClassName('product-price')[0].innerText.replace('$', ''));

  if (cartContent[productName]) {
    // Si el producto ya está en el carrito, incrementar la cantidad
    cartContent[productName].quantity++;
    cartContent[productName].element.querySelector('.quantity').innerText = cartContent[productName].quantity;
  } else {
    // Si el producto no está en el carrito, crear un nuevo elemento de lista para él
    var cartItem = document.createElement('li');
    var cartItemName = document.createElement('span');
    cartItemName.innerText = productName;
    var cartItemPrice = document.createElement('span');
    cartItemPrice.innerText = ' $' + productPrice.toFixed(2);
    var quantityContainer = document.createElement('div');
    quantityContainer.classList.add('cart-quantity-container');
    var decreaseButton = document.createElement('button');
    decreaseButton.classList.add('cart-btn');
    decreaseButton.innerText = '-';
    decreaseButton.addEventListener('click', decreaseQuantity);
    var quantityText = document.createElement('span');
    quantityText.classList.add('quantity');
    quantityText.innerText = '1';
    var increaseButton = document.createElement('button');
    increaseButton.classList.add('cart-btn');
    increaseButton.innerText = '+';
    increaseButton.addEventListener('click', increaseQuantity);
    quantityContainer.appendChild(decreaseButton);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(increaseButton);
    var removeButton = document.createElement('button');
    removeButton.classList.add('cart-btn');
    removeButton.innerText = 'Eliminar';
    removeButton.addEventListener('click', removeFromCart);
    cartItem.appendChild(cartItemName);
    cartItem.appendChild(cartItemPrice);
    cartItem.appendChild(quantityContainer);
    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);

    // Guardar el elemento de lista y la información del producto en el objeto cartContent
    cartContent[productName] = {
      element: cartItem,
      price: productPrice,
      quantity: 1
    };
  }

  // Actualizar el total del carrito
  total += productPrice;
  cartTotal.innerText = '$' + total.toFixed(2);

  // Mostrar el carrito
  cartContainer.style.display = 'block';
}

// Función para disminuir la cantidad de un producto en el carrito
function decreaseQuantity(event) {
  var button = event.target;
  var listItem = button.closest('li');
  var productName = listItem.querySelector('span:first-child').innerText;

  if (cartContent[productName].quantity > 1) {
    // Decrementar la cantidad
    cartContent[productName].quantity--;
    listItem.querySelector('.quantity').innerText = cartContent[productName].quantity;

    // Actualizar el total del carrito
    total -= cartContent[productName].price;
    cartTotal.innerText = '$' + total.toFixed(2);
  }
}

// Función para aumentar la cantidad de un producto en el carrito
function increaseQuantity(event) {
  var button = event.target;
  var listItem = button.closest('li');
  var productName = listItem.querySelector('span:first-child').innerText;

  // Incrementar la cantidad
  cartContent[productName].quantity++;
  listItem.querySelector('.quantity').innerText = cartContent[productName].quantity;

  // Actualizar el total del carrito
  total += cartContent[productName].price;
  cartTotal.innerText = '$' + total.toFixed(2);
}

// Función para eliminar un producto del carrito
function removeFromCart(event) {
  var button = event.target;
  var listItem = button.closest('li');
  var productName = listItem.querySelector('span:first-child').innerText;
  var productPrice = cartContent[productName].price * cartContent[productName].quantity;

  // Actualizar el total del carrito
  total -= productPrice;
  cartTotal.innerText = '$' + total.toFixed(2);

  // Eliminar el producto del carrito
  cartItems.removeChild(listItem);
  delete cartContent[productName];
}

// Botón para borrar todo el carrito
var clearButton = document.getElementById('cart-btn-clear');
clearButton.addEventListener('click', clearCart);

function clearCart() {
  // Vaciar el contenido del carrito
  cartItems.innerHTML = '';

  // Reiniciar los objetos y el total
  cartContent = {};
  total = 0;

  // Actualizar el total del carrito
  cartTotal.innerText = '$' + total.toFixed(2);
}






