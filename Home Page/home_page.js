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

/*Review Cards Sort

(function() {
    let reviewCard = document.getElementsByClassName('.card');
    let postImage = document.querySelector('.postImage');
    let postTitle = document.getElementsByClassName('.postTitle');
    let postDate = document.querySelector('.postPlatform');

    let cardObjects = [
        {
            title: 'Spiritfarer: Farewell Edition',
            date: 'July 21, 2022'
        },
        {
            title: "Marvel's Guardians of the Galaxy",
            date: 'July 19, 2022'
        },
        {
            title: 'Mass Effect Legendary Edition',
            date: 'July 15, 2022'
        }
    ];

    let titleItems = "";

    for (card of cardObjects) {
        titleItems += "<h2>" + card.title + "</h2>";
        
    }
    console.log(titleItems);
    postTitle.innerHTML = titleItems;
    })();*/