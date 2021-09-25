const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const navsani = document.getElementById('navsani');

document.onclick = function (e) {
    if (e.target.id !== 'navsani' && e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        navsani.classList.remove('active');
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
     navsani.classList.toggle('active');
}

// ---------scrolltop---------
// window.scroll({
//     top:0,
//     left:0,
//     behavior: 'smooth'
// });
// window.scroll({
//     top:0,
//     left:0,
//     behavior:'smooth'
// });

let btncl = document.getElementById('btnjs');
        btncl.addEventListener('click', function run(){
        confirm("The source code pdf will be downloaded!");
        });



const faqvar = document.getElementsByClassName('content-bx');

for(i = 0; i<faqvar.length; i++){
    faqvar[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}
