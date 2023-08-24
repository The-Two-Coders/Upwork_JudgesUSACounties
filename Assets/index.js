document.addEventListener("DOMContentLoaded",function(){
    var navLinks = document.querySelectorAll("#navList .list-items");

    navLinks = forEach(function(link){
        link.addEventListener('click',function(event){
            event.preventDefault(); // Prevent the default link behavior

            removeActiveClass(); //Remove active class from all links

            link.classList.add("active"); //Add active class to the clicked link
        });
    });
    function removeActiveClass(){
        navLinks.forEach(function(link){
            link.classList.remove("active");
        });
    }
});

















// document.addEventListener("DOMContentLoaded",function(){
//     var navLinks = document.querySelectorAll("#navList li");

//     navLinks.forEach(function(link){
//         link.addEventListener("click",function(event){
//             event.preventDefault(); //Prevent the default link behavior

//             removeActiveClass(); //Remove active class from all links

//             link.classList.add("active"); //Add active class to the clicked link
//         });
//     });

//     function removeActiveClass(){
//         navLinks.forEach(function(link){
//             link.classList.remove("active");
//         });
//     }

// });