let el = document.getElementById('mob-btn');

el.addEventListener('click',function (e) {
    let ico = document.getElementsByClassName('fa-ellipsis-v')[0];
    ico.classList.toggle('btn-anim');
    let menu = document.getElementsByClassName('nav-menu')[0];
    menu.classList.toggle('d-none');
});