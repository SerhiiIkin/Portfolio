function burgerMenu() {
    var menuBurger = document.querySelector(".header__burger-menu");
    var linksMenu = document.querySelectorAll(".header__menu a");
    var menu = document.querySelector(".header__menu");
    linksMenu.forEach(closeMenu);
    menuBurger.addEventListener("click", openMenu);

    function closeMenu(item) {
        item.addEventListener("click", function() {
            menuBurger.classList.remove("active");
            document.body.classList.remove("lock");
            menu.classList.remove("active");
        });
    }

    function openMenu() {
        menuBurger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("lock");
    }
    
}
burgerMenu();