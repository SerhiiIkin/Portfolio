function changePL() {
    var adresUrl = window.location.pathname
    var pageLink = document.querySelectorAll(".header__link");
    var pageLang = document.querySelectorAll(".header__btn");
    var langSide = document.getElementsByTagName('html')[0].getAttribute('lang');

    if ((adresUrl.match("portfolio.html"))) {
        pageLink[2].classList.add("current-page");
        portfolioPage();
    } else
    if ((adresUrl.match("index.html"))) {
        pageLink[0].classList.add("current-page");
        indexPage();
    } else
    if ((adresUrl.match("about-me.html"))) {
        pageLink[1].classList.add("current-page");
        aboutMePage();
    } else {
        pageLink[0].classList.add("current-page");
        indexPage();
    }

    function indexPage() {
        if (langSide === "en") {
            pageLang[0].setAttribute("href", "uk/index.html");
            pageLang[1].setAttribute("href", "index.html");
            pageLang[2].setAttribute("href", "dk/index.html");
            pageLang[1].classList.add("current-lang");
        }
        if (langSide === "uk") {
            pageLang[0].setAttribute("href", "../uk/index.html");
            pageLang[1].setAttribute("href", "../index.html");
            pageLang[2].setAttribute("href", "../dk/index.html");
            pageLang[0].classList.add("current-lang");
        }
        if (langSide === "dk") {
            pageLang[0].setAttribute("href", "../uk/index.html");
            pageLang[1].setAttribute("href", "../index.html");
            pageLang[2].setAttribute("href", "../dk/index.html");
            pageLang[2].classList.add("current-lang");
        }
    }

    function portfolioPage() {
        if (langSide === "en") {
            pageLang[0].setAttribute("href", "uk/portfolio.html");
            pageLang[1].setAttribute("href", "portfolio.html");
            pageLang[2].setAttribute("href", "dk/portfolio.html");
            pageLang[1].classList.add("current-lang");
        }
        if (langSide === "uk") {
            pageLang[0].setAttribute("href", "../uk/portfolio.html");
            pageLang[1].setAttribute("href", "../portfolio.html");
            pageLang[2].setAttribute("href", "../dk/portfolio.html");
            pageLang[0].classList.add("current-lang");
        }
        if (langSide === "dk") {
            pageLang[0].setAttribute("href", "../uk/portfolio.html");
            pageLang[1].setAttribute("href", "../portfolio.html");
            pageLang[2].setAttribute("href", "../dk/portfolio.html");
            pageLang[2].classList.add("current-lang");
        }
    }

    function aboutMePage() {
        if (langSide === "en") {
            pageLang[0].setAttribute("href", "uk/about-me.html");
            pageLang[1].setAttribute("href", "about-me.html");
            pageLang[2].setAttribute("href", "dk/about-me.html");
            pageLang[1].classList.add("current-lang");
        }
        if (langSide === "uk") {
            pageLang[0].setAttribute("href", "../uk/about-me.html");
            pageLang[1].setAttribute("href", "../about-me.html");
            pageLang[2].setAttribute("href", "../dk/about-me.html");
            pageLang[0].classList.add("current-lang");
        }
        if (langSide === "dk") {
            pageLang[0].setAttribute("href", "../uk/about-me.html");
            pageLang[1].setAttribute("href", "../about-me.html");
            pageLang[2].setAttribute("href", "../dk/about-me.html");
            pageLang[2].classList.add("current-lang");
        }
    }
}