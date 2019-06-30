var cartLinks = document.querySelectorAll(".add-to-cart");
var cartModal = document.querySelector(".cart-modal");
var modals = document.querySelectorAll(".modal");
var modalCloseButtons = document.querySelectorAll(".close-button");

Array.prototype.forEach.call(cartLinks, function (cartLink) {
    cartLink.addEventListener("click", function (evt) {
        evt.preventDefault();

        cartModal.classList.add("modal-show");
    });
})

function closeCartModal(evt) {
    evt.preventDefault();
    cartModal.classList.remove("modal-show");
}

Array.prototype.forEach.call(modalCloseButtons, function (modalClose) {
    modalClose.addEventListener("click", closeCartModal);

})