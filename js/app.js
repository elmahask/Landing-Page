/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//Get all sections from html page
const sections = document.querySelectorAll('section');
//Get navbar header
const navbar = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createMenuItem() {
    sections.forEach((section) => {
        //Get section for naming using attribute name 'data-nav'
        const sectionTitle = section.getAttribute('data-nav');
        //Get section for navigate using attribute name 'id'
        const sectionAnchor = section.getAttribute('id');
        //Create li element
        const item = document.createElement('li');
        //Add the anchor to listItem
        item.innerHTML = `<a class="menu__link" href="#${sectionAnchor}">${sectionTitle}</a>`;
        //Add listItem to the Navbar (Menu)
        navbar.appendChild(item);
    });
}


//Detect if the section is in view
function getSectionTopEdge(element) {
    //this line get element bound for our section
    let section = element.getBoundingClientRect();
    console.log("Left: " + section.left + ", Top: " + section.top + ", Width: " + section.width + ", Height: " + section.height);
    return section.top >= 0;
}

//make the section that being viewed a different appearance
function switchActiveClass() {
    //iterate for every section to apply my logic
    sections.forEach((section) => {
        //check if the section is in the view
        if (getSectionTopEdge(section)) {
            //check if it does'nt contain 'class style' -> 'your-active-class'
            if (!section.classList.contains('your-active-class')) {
                //then add the 'class style' -> 'your-active-class'
                addActiveClass(section);
            } else {
                //this mean is not in the view
                //so remove the class style
                removeActiveClass(section)
            }
        }
    });
}


function addActiveClass(element) {
    element.classList.add('your-active-class');
}

function removeActiveClass(element) {
    element.classList.remove('your-active-class');
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createMenuItem();

// Add class 'active' to section when near top of viewport
// 'a[href^="#"]' for specific anchor with href attribute
// Get all anchor to add click event for navigate
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        //make naviget smooth while scrolling
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
// Scroll to section on link click
// Set sections as active