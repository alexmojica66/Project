if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
/*  var addMotherboardButton = document.getElementsByClassName("btn-add-motherboard");
  var addProcessorButton = document.getElementsByClassName("btn-add-processor");
  var addKeyboardButton = document.getElementsByClassName("btn-add-keyboard");
  var addLaptopButton = document.getElementsByClassName("btn-add-laptop");
  var addDesktopPCButton = document.getElementsByClassName("btn-add-desktopPC");

  var motherboardButton = addMotherboardButton[0];
  var processorButton = addProcessorButton[0];
  var keyboardButton = addKeyboardButton[0];
  var laptopButton = addLaptopButton[0];
  var monitorButton = addMonitorButton[0];
  var desktopPCButton = addDesktopPCButton[0];

  motherboardButton.addEventListener("click", addMotherboard);
  processorButton.addEventListener("click", addProcessor);
  keyboardButton.addEventListener("click", addKeyboard);
  laptopButton.addEventListener("click", addLaptop);
  monitorButton.addEventListener("click", addMonitor);
  desktopPCButton.addEventListener("click", addDesktopPC);

  function addMotherboard(event) {
    var motherboardClicked = true;
    var motherboardButton = event.target;
    var motherboard = motherboardButton.parentElement.parentElement.parentElement;
    var motherboardTitle = motherboard.getElementsByClassName("item-title");
    var motherboardPrice = motherboard.getElementsByClassName("item-price");
    if (motherboardClicked == true) {
      var title = (motherboardTitle[0].innerText);
      var price = (motherboardPrice[0].innerText.replace("$", ""));
      console.log(title, price);
      addItemToCart(title, price);
    }
  }

function addProcessor(event) {
    var processorClicked = true;
    var processorButton = event.target;
    var processor = processorButton.parentElement.parentElement.parentElement;
    var processorTitle = processor.getElementsByClassName("item-title");
    var processorPrice = processor.getElementsByClassName("item-price");
    if (processorClicked == true) {
    var title = (processorTitle[1].innerText);
    var price = (processorPrice[1].innerText.replace("$", ""));
      console.log(title, price);
    }
  }

  function addItemToCart(title, price){
    var cartRow = document.createElement("div");
    cartRow.innerText = title;
    var cartItems = document.getElementsByClassName("cart")[0];
    cartItems.append(cartRow);

  }

function addKeyboard(event) {
    var keyboardClicked = true;
    var keyboardButton = event.target;
    var keyboard = keyboardButton.parentElement.parentElement.parentElement;
    var keyboardTitle = keyboard.getElementsByClassName("item-title");
    var keyboardPrice = keyboard.getElementsByClassName("item-price");
      if (keyboardClicked == true) {
    var title = (keyboardTitle[2].innerText);
      var price = (keyboardPrice[2].innerText.replace("$", ""));
        console.log(title, price);
      }
    }

    function addLaptop(event) {
        var laptopClicked = true;
        var laptopButton = event.target;
        var laptop = laptopButton.parentElement.parentElement.parentElement;
        var laptopTitle = laptop.getElementsByClassName("item-title");
        var laptopPrice = laptop.getElementsByClassName("item-price");
          if (laptopClicked == true) {
          var title=(laptopTitle[0].innerText);
          var price=(laptopPrice[0].innerText.replace("$", ""));
            console.log(title, price);
          }
        }

        function addMonitor(event) {
            var monitorClicked = true;
            var monitorButton = event.target;
            var monitor = monitorButton.parentElement.parentElement.parentElement;
            var monitorTitle = monitor.getElementsByClassName("item-title");
            var monitorPrice = monitor.getElementsByClassName("item-price");
              if (monitorClicked == true) {
              var title=(monitorTitle[1].innerText);
            var price=  (monitorPrice[1].innerText.replace("$", ""));
              console.log(title, price);
              }
            }

            function addDesktopPC(event) {
                var desktopPCClicked = true;
                var desktopPCButton = event.target;
                var desktopPC = desktopPCButton.parentElement.parentElement.parentElement;
                var desktopPCTitle = desktopPC.getElementsByClassName("item-title");
                var desktopPCPrice = desktopPC.getElementsByClassName("item-price");
                  if (desktopPCClicked == true) {
                  var title = (desktopPCTitle[2].innerText);
                var price = (desktopPCPrice[2].innerText.replace("$", ""));
                console.log(title, price);
                  }
           }
  */
var carts = document.querySelectorAll(".add-cart");
var products = [
  {
    name: "laptop",
    image: "laptop",
    price: "1299.99",
    inCart: 0
  },
  {
    name: "monitor",
    image: "monitor",
    price: "239.99",
    inCart: 0
  },
  {
    name: "desktopPC",
    image: "desktopPC",
    price: "749.99",
    inCart: 0
  },
  {
    name: "motherboard",
    image: "motherboard",
    price: "159.99",
    inCart: 0
  },
  {
    name: "processor",
    image: "processor",
    price: "384.99",
    inCart: 0
  },
  {
    name: "keyboard",
    image: "keyboard",
    price: "215.46",
    inCart: 0
  }
];

for(var i = 0; i < carts.length; i++){
  carts[i].addEventListener("click", () =>{
    cartNumbers(products[i]);
    console.log("added to cart");
  })
}

function onLoadCartNumbers(){
  var productNumbers = localStorage.getItem("cartNumbers");
  if(productNumbers)
  document.querySelector(".navigation span").textContent = productNumbers;
}

function cartNumbers(products){
  console.log("The product clicked is", products)
  var productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if(productNumbers){
  localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".navigation span").textContent = productNumbers + 1;
  }
  else{
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".navigation span").textContent = 1;
  }
}


onLoadCartNumbers();



}
