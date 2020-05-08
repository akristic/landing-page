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
const fragment = document.createDocumentFragment();
const sectionList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavItemHTML(id, name){
    const itemHTML = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return itemHTML;
}
function isInViewport (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
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

// Add class 'active' to section when near top of viewport
function setActiveClass(){
    for (let i=0; i < sectionList.length; i++){
        if (isInViewport(sectionList[i])){
            sectionList[i].classList.add("your-active-class");
        }else{
            sectionList[i].classList.remove("your-active-class");
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', function(){
    setActiveClass();
});
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(event){
    scrollToElement(event)
})
// Build menu 
buildNavigation()
// Scroll to section on link click

// Set sections as active


