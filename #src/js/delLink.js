window.addEventListener("load", changePL);
window.addEventListener("load", delHomeLink);

function delHomeLink() {
    var adresUrl = window.location.pathname
    var alleLink = document.querySelectorAll("a");
    alleLink.forEach(delLinkInd);

    function delLinkInd(item) {
        if (adresUrl.match("index.html")) {
            if (!item.pathname.match("index.html")) {
                item.classList.remove("_delLink");
            }
            if (item.classList.contains("_delLink")) {
                item.removeAttribute("href");
            }
        } else
        if (adresUrl.match("portfolio.html")) {
            if (!item.pathname.match("portfolio.html")) {
                item.classList.remove("_delLink");
            }
            if (item.classList.contains("_delLink")) {
                item.removeAttribute("href");
            }
        } else
        if (adresUrl.match("about-me.html")) {
            if (!item.pathname.match("about-me.html")) {
                item.classList.remove("_delLink");
            }
            if (item.classList.contains("_delLink")) {
                item.removeAttribute("href");
            }
        } else {
            if (!item.pathname.match("index.html")) {
                item.classList.remove("_delLink");
            }
            if (item.classList.contains("_delLink")) {
                item.removeAttribute("href");
            }
        }
    }
}