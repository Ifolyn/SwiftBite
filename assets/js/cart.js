const cart = document.getElementById("cartPanel");

const openBtn = document.getElementById("openCart");

const closeBtn = document.getElementById("closeCart");

openBtn.onclick = () => {

    cart.classList.add("active");

};

closeBtn.onclick = () => {

    cart.classList.remove("active");

};