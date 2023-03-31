const currentLocation = location.href;
const navItems =   document.querySelectorAll(".nav_link");
const navLength = navItems.length

for (let i = 0; i < navLength; i++){
    if (navItems[i].href === currentLocation){
        navItems[i].className = "navActive"
    }
};