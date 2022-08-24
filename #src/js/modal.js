var sendBtn = document.querySelector(".modal__btn");
var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
var closeMod = document.querySelector(".modal__close");


if (closeMod) {
    closeMod.addEventListener("click", form.reset())
}




function btnClick() {
    var form = document.getElementById("form");
    var formReq = document.querySelectorAll(".req");
    var openMod = document.querySelector(".top__btn");
    var modalWin = document.querySelector(".modal");
    var modal_btn = document.querySelector(".modal__btn-place");
    for (var index = 0; index < formReq.length; index++) {
        var input = formReq[index];
        formRemoveError(input);
    }
    form.reset();
    sendBtn.addEventListener("click", function () {
        form.addEventListener("submit", formSend);
    });

    function formSend(e) {
        e.preventDefault();
        var error = formValidate(form);
        if (error === 0) {
            doneForm();
            send();
            setTimeout(sub, 6000);
        }
    }

    function formValidate(form) {
        var error = 0;
        if (!formReq[0].value) {
            formAddError(formReq[0]);
            error++;
            var newDiv = document.createElement("div");
            if (lang == "en") {
                var newContent = document.createTextNode("Writte your name!");
            }
            if (lang == "dk") {
                var newContent = document.createTextNode("Skriv dit navn!");
            }
            if (lang == "uk") {
                var newContent = document.createTextNode("Напишите ваше им'я!");
            }
            newDiv.style =
                "position: absolute; color: rgb(245, 117, 117); font-size:12px; padding: 3px 0 0 5px;";
            newDiv.appendChild(newContent);
            formReq[0].insertAdjacentElement("afterend", newDiv);
            setTimeout(() => {
                newDiv.remove();
            }, 3000);
        }
        if (!formReq[1].value) {
            formAddError(formReq[1]);
            error++;
            var newDiv1 = document.createElement("div");
            if (lang == "en") {
                var newContent1 = document.createTextNode("Write your messege!");
            }
            if (lang == "dk") {
                var newContent1 = document.createTextNode("Skriv din besked!");
            }
            if (lang == "uk") {
                var newContent1 = document.createTextNode("Напишите ваше cообщение!");
            }
            newDiv1.style =
                "position: absolute; color: rgb(245, 117, 117); font-size:12px; padding: 3px 0 0 5px;";
            newDiv1.appendChild(newContent1);
            formReq[1].insertAdjacentElement("afterend", newDiv1);
            setTimeout(() => {
                newDiv1.remove();
            }, 3000);
        }
        if (!formReq[2].value && !formReq[3].value) {
            formAddError(formReq[2]);
            formAddError(formReq[3]);
            error++;
            var newDiv2 = document.createElement("div");
            if (lang == "en") {
                var newContent2 = document.createTextNode("Write your mobil phone or e-mail!");
            }
            if (lang == "dk") {
                var newContent2 = document.createTextNode("Skriv dit mobilnummer eller e-mail!");
            }
            if (lang == "uk") {
                var newContent2 = document.createTextNode("Напишите ваш телефон или емеил!");
            }
            newDiv2.style =
                "position: absolute; color: rgb(245, 117, 117); font-size:12px; padding: 3px 0 0 5px;";
            newDiv2.appendChild(newContent2);
            formReq[3].insertAdjacentElement("afterend", newDiv2);
            setTimeout(() => {
                newDiv2.remove();
            }, 3000);
        }
        if (formReq[2].value || formReq[3].value) {
            if (formReq[3].value) {
                if (!emailValid(formReq[3])) {
                    formAddError(formReq[3]);
                    error++;
                    var newDiv4 = document.createElement("div");
                    if (lang == "en") {
                        var newContent4 = document.createTextNode("Write an email in the format test@gmail.com");
                    }
                    if (lang == "dk") {
                        var newContent4 = document.createTextNode("Skriv en e-mail i formatet test@gmail.com");
                    }
                    if (lang == "uk") {
                        var newContent4 = document.createTextNode("Напишіть емейл в форматі test@gmail.com");
                    }
                    newDiv4.style =
                        "position: absolute; color: rgb(245, 117, 117); font-size:12px; padding: 3px 0 0 5px;";
                    newDiv4.appendChild(newContent4);
                    formReq[3].insertAdjacentElement("afterend", newDiv4);
                    setTimeout(() => {
                        newDiv4.remove();
                    }, 3000);
                }
            }
            if (formReq[2].value) {
                if (!telValid(formReq[2])) {
                    formAddError(formReq[2]);
                    error++;
                    var newDiv3 = document.createElement("div");
                    if (lang == "en") {
                        var newContent3 = document.createTextNode("Phone number must be more than 8 digits, only digits");
                    }
                    if (lang == "dk") {
                        var newContent3 = document.createTextNode("Telefonnummer skal være mere end 8 cifre, kun cifre");
                    }
                    if (lang == "uk") {
                        var newContent3 = document.createTextNode("Номер телефона должен быть больше 8 цифр,только цифры");
                    }
                    newDiv3.style =
                        "position: absolute; color: rgb(245, 117, 117); font-size:12px; padding: 3px 0 0 5px;";
                    newDiv3.appendChild(newContent3);
                    formReq[2].insertAdjacentElement("afterend", newDiv3);
                    setTimeout(() => {
                        newDiv3.remove();
                    }, 3000);
                }
            }
        }
        return error;
    }

    function emailValid(input) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input.value);
    }

    function telValid(input) {
        var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,14}(\s*)?$/;
        return re.test(input.value);
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }

    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }

    function doneForm() {
        formReq.forEach(sendInputs);

        function sendInputs(item) {
            item.disabled = true;
            modal_btn.classList.add("overlay");
            setTimeout(() => {
                item.disabled = false;
                modal_btn.classList.remove("overlay");
            }, 5990);
        }
    }

    function sub() {
        if (lang == "en") {
            alert("Your date was sent to test server! Writte me to telegram,mail or mobil phone!");
        }
        if (lang == "dk") {
            alert("Din data blev sendt til test server!Skriv mig til telegram, mail eller mobiltelefon!");
        }
        if (lang == "uk") {
            alert("Ваша дані були відправлені до тестового сервера!Напишіть мені на телеграм, пошту або мобільний телефон!");
        }
        form.submit();
        form.reset();
    }

    function send() {
        var sendBtn = document.querySelector(".modal__btn");
        var modText = document.querySelector(".modal__text");
        var modSnip = document.querySelector(".modal__snip");
        var modReady = document.querySelector(".modal__ready");
        modText.classList.toggle("hid");
        sendBtn.classList.remove("btn--blue");
        sendBtn.classList.toggle("snip");
        modSnip.classList.toggle("visib");
        modSnip.classList.toggle("spinner");
        setTimeout(() => {
            modSnip.classList.toggle("hid");
            modSnip.classList.remove("visib");
            sendBtn.classList.toggle("ready");
            modSnip.classList.remove("visib");
            modReady.classList.toggle("visib");
        }, 5000);
    }

    function closeModalW() {
        modalWin.classList.add("close");
        modalWin.classList.remove("open");
        form.reset();
        document.body.style.overflow = "";
    }

    function openModW() {
        modalWin.classList.remove("close");
        modalWin.classList.add("open");
        document.body.style.overflow = "hidden";
    }

   


    openMod.addEventListener("click", openModW);
    closeMod.addEventListener("click", closeModalW);
}
if (sendBtn) {
    btnClick();
}