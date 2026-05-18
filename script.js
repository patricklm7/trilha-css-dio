const modal = document.getElementById("videoModal");
const iframe = document.getElementById("videoFrame");
const buttons = document.querySelectorAll(".btn");
const close = document.querySelector(".close");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const video = button.getAttribute("data-video");

        iframe.src = video;
        modal.style.display = "flex";

    });

});

close.addEventListener("click", () => {

    modal.style.display = "none";
    iframe.src = "";

});
