const slider = (anything, titulo, tituloDois, descricao, preco) =>{
    document.querySelector('.one') .src = anything;
    document.getElementById('titulo').innerHTML = titulo
    document.getElementById('tituloDois').innerHTML = tituloDois
    document.getElementById('descricao').innerHTML = descricao
    document.getElementById('preco').innerHTML = preco
};



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}