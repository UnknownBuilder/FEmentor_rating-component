//------------------- Global Variables -------------------

let ratingSelection;
let counter = 0;
let colorState;

function ratingUpdate() {

// Function Variables
    let rating = document.getElementById("rating");
    let secondContainer = document.getElementById("secondary");
    let mainContainer =document.getElementById("main");

// Update rating on secondary page
    if (ratingSelection <= 5 || ratingSelection >=1) {

        rating.innerText = ratingSelection;

        // hide and view logic for multi-page HTML doc
        secondContainer.style.visibility = "visible";
        secondContainer.style.display = "flex";
        mainContainer.style.visibility = "hidden";
        mainContainer.style.display = "none";
    } else {

        alert("Error");
    };
};

function saveElement(y) {

//Fuction Variables

    let btnSelected = document.getElementsByClassName("btn-choice")[y-1];
    let orange = "hsl(25, 97%, 53%)";
    let white = "hsl(0, 0%, 100%)";

//Color Logic

    if(colorState === undefined) {

        btnSelected.style.backgroundColor = orange;
        btnSelected.style.color = white;
        colorState = btnSelected;

    } else {

        colorState.style.backgroundColor = "";
        colorState.style.color = "";

        btnSelected.style.backgroundColor = orange;
        btnSelected.style.color = white;
        colorState = btnSelected;
    };

// State management
    ratingSelection = y;
};
