// create identifiers for different elements of the navbar
const hamMenu = document.querySelector('#mobile-menu'); //targets toggle for mobile hamburger menu
const menuTabs = document.querySelector('.navbar__menu'); // targets the tabs of the navbar menu that link to each section of the page
const navLogo = document.querySelector('#navbar__logo'); // targets the Vandal logo in the navbar

// Displays mobile menu 
// Creates function that adds a class that is active or is inactive. When the hamburger mobile menu is clicked it toggles 'is-active' and 'active' classes
const mobileMenu = () => {
    hamMenu.classList.toggle('is-active'); //toggle targets class 'is-active' 
    menuTabs.classList.toggle('active');  //toggle targets class 'active' 
}

hamMenu.addEventListener('click', mobileMenu); // EventListener targets hamburger mobile menu icon and requires an input of a 'click' as the action

// Have the navbar menu have an underlined highlight to correspond to the section in the website the user is on
const highlightMenu = () => {
    const highlight = document.querySelector('.highlight'); // targets the highlight class in the CSS document 
    const homeMenu = document.querySelector('#home-page'); // targets the home tab in the navbar menu
    const aboutMenu = document.querySelector('#about-page'); // targets the about tab in the navbar menu 
    const designsMenu = document.querySelector('#designs-page'); // targets the designs tab in the navbar menu 
    const storeMenu = document.querySelector('#store-page'); // targets the store tab in the navbar menu 
    let scrollPosition = window.scrollY; // scrollPosition shows where the user is in the vertical scroll direction of the webpage
    console.log(scrollPosition); 

    // adds the 'highlight' class to each navbar menu item depending on the scroll position in the vertical direction of the user
    // only display these underlined highlights on desktop view (>960 pixels) 

    // before the user scrolls past 600 pixels, display the navbar menu underlined highlight to home
    if(window.innerWidth > 960 && scrollPosition < 600) {
        homeMenu.classList.add('highlight'); // add highlight class to the home menu tab in the navbar menu 
        aboutMenu.classList.remove('highlight'); // remove the highlight class from the about menu tab in the navbar menu 
        storeMenu.classList.remove('highlight'); // remove the highlight class from the store menu tab in the navbar menu 
        designsMenu.classList.remove('highlight'); // remove the highlight class from the designs menu tab in the navbar menu 
        return; 

    // once the user scrolls past 600 pixels but before the user scrolls past 1400 pixels, display the navbar menu underlined highlight to about
    } else if (window.innerWidth > 960 && scrollPosition < 1400) {
        aboutMenu.classList.add('highlight'); // add highlight class to the about menu tab in the navbar menu 
        homeMenu.classList.remove('highlight'); // remove the highlight class from the home menu tab in the navbar menu 
        designsMenu.classList.remove('highlight'); // remove the highlight class from the designs menu tab in the navbar menu 
        storeMenu.classList.remove('highlight'); // remove the highlight class from the store menu tab in the navbar menu 
        return; // removes an error that appears with the underlined highlight after the user clicks on the tab

    // once the user scrolls past 1400 pixels but before the user scrolls past 2350 pixels, display the navbar menu underlined highlight to designs
    } else if (window.innerWidth > 960 && scrollPosition < 2350) {
        designsMenu.classList.add('highlight'); // add highlight class to the designs menu tab in the navbar menu 
        homeMenu.classList.remove('highlight'); // remove the highlight class from the home menu tab in the navbar menu 
        storeMenu.classList.remove('highlight'); // remove the highlight class from the store menu tab in the navbar menu 
        aboutMenu.classList.remove('highlight'); // remove the highlight class from the about menu tab in the navbar menu 
        return; // removes an error that appears with the underlined highlight after the user clicks on the tab
    }
    // once the user scrolls past 2350 pixels but before the user scrolls past 3400 pixels, display the navbar menu underlined highlight to store
    else if (window.innerWidth > 960 && scrollPosition < 3400) {
        storeMenu.classList.add('highlight'); // add highlight class to the store menu tab in the navbar menu 
        designsMenu.classList.remove('highlight'); // remove the highlight class from the designs menu tab in the navbar menu 
        aboutMenu.classList.remove('highlight'); // remove the highlight class from the about menu tab in the navbar menu 
        homeMenu.classList.remove('highlight'); // remove the highlight class from the home menu tab in the navbar menu 
        return; // removes an error that appears with the underlined highlight after the user clicks on the tab
    }

    // when in mobile view, the underlined highlight is gone 
    if((highlight && window.innerWidth < 960 && scrollPosition < 600) || highlight) {
        highlight.classList.remove('highlight'); // remove the underlined highlight
    }

}

window.addEventListener('scroll', highlightMenu); // it shows the underlined highlight for scrolling 
window.addEventListener('click', highlightMenu); // it shows the underlined highlight for clicking

// After the mobile hamburger menu is clicked, once a tab is clicked, the mobile menu interface itself should close as well 

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active') // targets the '.is-active' class
    // when the mobile hamburger menu is opened by the user (active), toggle both the mobile hamburger menu (menu) and the navbar tabs (menuTabs)
    if(window.innerWidth <= 768 && menuBars) {
        hamMenu.classList.toggle('is-active')
        menuTabs.classList.remove('active')
    }
}

menuTabs.addEventListener('click', hideMobileMenu) // when the navbar menu tab is clicked, then the hideMobileMenu function is called
navLogo.addEventListener('click', hideMobileMenu) // when the navbar VAndal logo is clicked, then the hideMobileMenu function is called
