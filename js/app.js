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
const fragment = document.createDocumentFragment()
const sectionList = document.querySelectorAll('section')
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavItemHTML(id, name){
    const itemHTML = `<a class ="menu__link" href='#${id}'>${name}</a>`;
    return itemHTML;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function buildNavigation(){
    for (let i=0; i < sectionList.length; i++){
        const newMenuItem = document.createElement('li');
        const sectionName = sectionList[i].getAttribute('data-nav')
        const sectionId = sectionList[i].getAttribute('id')

        newMenuItem.innerHTML = createNavItemHTML(sectionId, sectionName)
        fragment.appendChild(newMenuItem);
    }
    const navBarList = document.getElementById('navbar__list')
    navBarList.appendChild(fragment);
}




// build the nav
buildNavigation()

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


