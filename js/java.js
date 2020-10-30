function myFunction() {
    var x = document.getElementsByClassName('navigation')[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


var y = document.getElementById('my_nav');
var k = document.getElementById('my_sec');
var sticky = y.offsetTop;
var btn_sticky = y.offsetTop;

function sti() {
    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');
        k.classList.add('btn_sticky');

    } else {
        y.classList.remove('sticky');
        k.classList.remove('btn_sticky');
    }

}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}