function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function openResume(){
    window.open('assets/CV-ABOUDOU_Acheraf_Dine-En.pdf');
}
