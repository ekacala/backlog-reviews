/* Dropdown Menu Button */

function menuDropdownFunction() {
    document.getElementById("dropdownMenu").classList.toggle("show");
    
}  

function searchDropdownFunction() {
    document.getElementById("topnavSmall").classList.toggle("show");

    if (document.getElementById("topnavSmall").classList.contains("show") === true) {
        document.getElementById("dropdownMenu").classList.add("showSearchBarOpen");
    } else if (document.getElementById("topnavSmall").classList.contains("show") === false) {
        document.getElementById("dropdownMenu").classList.remove("showSearchBarOpen");
        
    }
}

/* Jump to Top Button Appear on Scroll */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

/* Jump to Top of Page Button Function */

function jumpToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}