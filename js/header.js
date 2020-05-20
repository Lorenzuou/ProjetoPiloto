window.onscroll = function() { myFunction(), medalhas() };


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


var anima = 0;
var premios = document.getElementsByClassName("it");

function myFunction() {


    if (window.pageYOffset >= sticky + 10 && window.screen.width > 800) {
        navbar.classList.add("sticky");
        navbar.classList.add("navbar-muda")


        document.getElementById("logo").classList.add("navbar-brand-wow");


    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("navbar-muda")
        document.getElementById("logo").classList.remove("navbar-brand-wow");

    }


}

function medalhas() {

    if (anima == 0) {
        if (window.pageYOffset >= document.getElementById("desce").offsetTop) {
            for (var i = 0; i < premios.length; i++) {
                premios[i].classList.add("anima");
            }
            anima = 1;
        }

    }
}