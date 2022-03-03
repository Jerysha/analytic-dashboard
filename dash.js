const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.querySelector("aside");
const closeBtn = document.getElementById("close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
//Cambiar a modo oscuro
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  /*Manera larga*/
  themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");
  themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");
  /*Manera corta
    themeToggler.querySelector("i").classList.toggle("active");*/
});

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent =`
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping ===
                        'Declined' ? 'danger' : order.
                        shipping === 'pending' ? 'warning'
                        : 'primary'}">${order.shipping}</
                        td>
                        <td class="primary">Details</td>`
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
