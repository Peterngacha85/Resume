const menu_bar = document.getElementById('menu_bar');
      navLinks = document.getElementById('navLinks');
    const  menu = document.getElementById('menu');
    const  logo = document.getElementById('logo');
    let abitraryNumber = 1;
 function closeMenu(){
        navLinks.style.display = 'none';
        menu.innerHTML = "MENU";
        logo.innerHTML = "  LOGO";
        logo.style.color = " rgb(9, 230, 9)"
        abitraryNumber = 1;
       }
function show_nav_link(){
   if (abitraryNumber == 1){
    navLinks.style.display = 'block';
    menu.innerHTML = "CLOSE";
    logo.innerHTML = "X";
    abitraryNumber = 2;
   }
   else{
    closeMenu();
   }
}
function hide_link(){
    closeMenu();
}