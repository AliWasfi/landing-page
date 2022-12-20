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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
    function buildNav(){
        let fragment = document.createDocumentFragment();
        sections.forEach(function (section){
            
            let name = section.getAttribute('id');
            let listElement = document.createElement('li');
            let listLink = document.createElement('a');
            
            listLink.textContent= name;
            listLink.setAttribute('class' , 'menu__link');
            
            listElement.appendChild(listLink);
            fragment.appendChild(listElement);
            
            listLink.addEventListener('click',function(event){
                event.preventDefault();
                section.scrollIntoView({behavior: "smooth"});
            });
            document.querySelector('#navbar__list').appendChild(fragment);
        });
}

// Add class 'active' to section when near top of viewport

    function addClassActive(){
        document.addEventListener('scroll',function(){
            
            sections.forEach(function(section,index){
            let rect = section.getBoundingClientRect().y;
            const listLink = document.querySelectorAll('.menu__link');
            if (rect<=250 && rect>=-470){
                section.classList.add('your-active-class');
                
                listLink[index].classList.add('active-link');
            }
            else{
                section.classList.remove('your-active-class');
                listLink[index].classList.remove('active-link');
            }
        
        
        });
            
        });
    }
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click

// Set sections as active
addClassActive();

