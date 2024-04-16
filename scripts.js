// Tab Switching Functionality
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    // Remove 'active-link' class from all tab links
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }

    // Remove 'active-tab' class from all tab contents
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }

    // Add 'active-link' class to the clicked tab link
    event.currentTarget.classList.add('active-link');

    // Add 'active-tab' class to the corresponding tab content
    document.getElementById(tabName).classList.add('active-tab');
}

// Mobile Menu Opening and Closing Functionality
var sideMenu = document.getElementById('menu');

// Function to toggle the mobile menu
function toggleMenu() {
    if (sideMenu.style.right === "0px") {
        sideMenu.style.right = "-120px";
    } else {
        sideMenu.style.right = "0px";
    }
}

// Function to close the mobile menu
function closeMenu() {
    sideMenu.style.right = "-120px";
}

// Form Submission Functionality
const scriptURL = 'https://script.google.com/macros/s/AKfycbx80iZpZD62lJDIzkP90su7TYcozBuH7S2HZSgdZEOsw5VaZdvQ9J7nfW69uSLl2hOd/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

// Event listener for form submission
form.addEventListener('submit', e => {
    e.preventDefault()

    // Fetch data to the specified scriptURL using the POST method
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Display success message in the 'msg' span
            msg.innerHTML = "Message sent successfully!"

            // Reset the form after a delay
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})