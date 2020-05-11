window.onload = function() {
    setInterval(function() { verificarCarousel(); }, 200);

}


function verificarCarousel() {
    let alvo = document.getElementsByClassName("carousel-item active")[0].id;
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    console.log(alvo);
    if (alvo == "d1") {
        t1.style.opacity = "1";
        t2.style.opacity = "0";
        t3.style.opacity = "0";
        t1.classList.add("ativo");
        t2.classList.remove("ativo");

    }
    if (alvo == "d2") {
        t1.style.opacity = "0";
        t2.style.opacity = "1";
        t3.style.opacity = "0";
        t2.classList.add("ativo");
        t3.classList.remove("ativo");
    }
    if (alvo == "d3") {
        t1.style.opacity = "0";
        t2.style.opacity = "0";
        t3.style.opacity = "1";
        t3.classList.add("ativo");
        t1.classList.remove("ativo");
    }
}