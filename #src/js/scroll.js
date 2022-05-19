document.onscroll = function () {
    var scroll = document.querySelector(".scroll");
    scroll.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scroll.classList.add("openS");
    } else {
        scroll.classList.remove("openS");
    }
};
