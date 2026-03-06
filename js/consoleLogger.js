const formLogger = document.getElementById("contactForm");

formLogger.addEventListener("submit", function() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Данные формы:");
    console.log("ФИО:", name);
    console.log("Телефон:", phone);
    console.log("Email:", email);
    console.log("Сообщение:", message);

});