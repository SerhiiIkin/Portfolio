var downBtn = document.querySelector(".btn--tocontact");
var contact = document.querySelector(".footer__copy");
if (downBtn) {
    downBtn.addEventListener("click", function() {
        contact.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    })
}