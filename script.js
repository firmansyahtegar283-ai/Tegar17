document.getElementById("showConfession").addEventListener("click", function() {
    document.getElementById("confessionBox").classList.remove("hidden");
});

// TOMBOL JAWABAN
document.querySelector(".yes").addEventListener("click", function() {
    document.getElementById("responseMessage").innerText =
        "Yeaaay! 🤍 Makasih sudah mau jadi yang spesial buat aku!";
});

document.querySelector(".no").addEventListener("click", function() {
    document.getElementById("responseMessage").innerText =
        "Gapapa… yang penting aku udah jujur. Semoga kamu bahagia ❤️";
});

// ANIMASI BUNGA JATUH
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("falling-flowers").appendChild(flower);

    setTimeout(() => flower.remove(), 8000);
}

setInterval(createFlower, 300);
