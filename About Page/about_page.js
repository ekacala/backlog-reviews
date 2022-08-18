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