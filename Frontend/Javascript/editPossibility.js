// const currentLocation = location.href;
// const navItems =   document.querySelectorAll(".nav_link");
// const navLength = navItems.length
//
// for (let i = 0; i < navLength; i++){
//     if (navItems[i].href === currentLocation){
//         navItems[i].className = "navActive"
//     }
// };
//


    // Get the buttons from the navigation bar
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');

    // Check the window location on page load
    window.onload = function() {
    if (window.location.href === 'http://localhost:63342/pages.css/Frontend/Pages/editPossibility.html') {
    button1.classList.add('active2');
} else if (window.location.href === 'http://localhost:63342/pages.css/Frontend/Pages/editPossibilitySlowingDown.html') {
    button2.classList.add('active2');
}
};

    // Listen for hash changes in the window location
    window.addEventListener('hashchange', function() {
    // Remove the 'active' class from all the buttons
    button1.classList.remove('active2');
    button2.classList.remove('active2');

    // Check the window location and add the 'active' class to the corresponding button
    if (window.location.href === 'http://localhost:63342/pages.css/Frontend/Pages/editPossibility.html') {
    button1.classList.add('active2');
} else if (window.location.hash === 'http://localhost:63342/pages.css/Frontend/Pages/editPossibilitySlowingDown.html') {
    button2.classList.add('active2');
}
});
    