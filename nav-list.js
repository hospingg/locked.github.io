let mediaQuery = window.matchMedia('(min-width: 720px)');
let navList = document.querySelector(".nav-list");
let lis = document.querySelectorAll(".nav-list li"); 



function handleScreenSizeChange(event) {
    if (event.matches) {
        navList.classList.remove('nav-list-mobile');
        lis.forEach(function(li) {
            li.id = '';
        });
    }
}

mediaQuery.addListener(handleScreenSizeChange);

handleScreenSizeChange(mediaQuery);

document.querySelector(".hot-bar svg").addEventListener("click", function() {
    
    if(window.getComputedStyle(navList).display === "none"){
        navList.classList.add('nav-list-mobile');
        lis.forEach(function(li) {
            li.id = 'w-100';
        });
    }
    else{
        navList.classList.remove('nav-list-mobile');
        lis.forEach(function(li) {
            li.id = '';
        });
    }
    
});