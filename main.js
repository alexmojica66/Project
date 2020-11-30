let carts = document.querySelectorAll('.add-cart');
let products = [
  {
    name: "Laptop",
    tag: "laptop",
    price: 1299.99,
    inCart: 0
  },
  {
    name: "Monitor",
    tag: "monitor",
    price: 239.99,
    inCart: 0
  },
  {
    name: "DesktopPC",
    tag: "desktoppc",
    price: 749.99,
    inCart: 0
  },
  {
    name: "Motherboard",
    tag: "motherboard",
    price: 159.99,
    inCart: 0
  },
  {
    name: "Processor",
    tag: "processor",
    price: 384.99,
    inCart: 0
  },
  {
    name: "Keyboard",
    tag: "keyboard",
    price: 215.46,
    inCart: 0
  }

];

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseFloat(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;

        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        }
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseFloat(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {

        cart = parseFloat(cart);

        localStorage.setItem("totalCost", cart + product.price);

    } else {
      cart = parseFloat(cart);

        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector('.products');
  let cart = localStorage.getItem("totalCost");
  cart = parseFloat(cart).toFixed(2);

  console.log("cart", cart);



  if(cartItems && productContainer){

    productContainer.innerHTML = '';
    Object.values(cartItems).map((item, index) =>{
      let productTotal = item.price ;
      
      
      productContainer.innerHTML += `
      <div class="product">
        <ion-icon name="close-circle" class="circle"></ion-icon>
        <img src="images/${item.tag}.jpg">
        <span class = "sm-hide">${item.name}</span>
      </div>
       <div class="price sm-hide">$${parseFloat(item.price)}</div>
       <div class="quantity">
        <ion-icon class="decrease" name="caret-back-circle-outline"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon class="increase"
        name="caret-forward-circle-outline"></ion-icon>
       </div>
       <div class="total">
        $$${item.inCart * item.price}
       </div>
      `;
    });

    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">Cart Total</h4>
          <h4 class="basketTotal">$$$${cart}</h4>
      </div>`

     deleteButtons();
        manageQuantity();

    }
  }
  function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("this works" , cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log("curent product" , currentProduct);
            console.log("cart items" , cartItems);
            cartItems[currentProduct].inCart += 1;

            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();

            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();
