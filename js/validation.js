const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const agree = document.getElementById("agree").checked;

    if (name === "") {
        alert("Введите ФИО");
        event.preventDefault();
        return;
    }

    if (phone === "") {
        alert("Введите телефон");
        event.preventDefault();
        return;
    }

    if (email === "") {
        alert("Введите email");
        event.preventDefault();
        return;
    }

    if (!agree) {
        alert("Необходимо согласие на обработку данных");
        event.preventDefault();
        return;
    }

});