
# Property listing page for a vacation home in Juneau, Alaska(HTML5, CSS3, JavaScript)

This project is a responsive web page designed to display property details, adapting seamlessly for both desktop and mobile views. The page layout and elements are structured according to the provided reference images for both screen sizes, ensuring consistent and functional design across devices.

Files Overview
This project utilizes HTML5, CSS3, and JavaScript (including DOM manipulation) to create an interactive and responsive experience. Below is an outline of each file's role and structure:

    HTML5 File: Defines the page structure, including essential elements for displaying property details.

    CSS3 File: Contains styling rules that adjust layout, colors, and spacing, ensuring that the page is visually appealing and responsive on various screen sizes.

    JavaScript File: Provides interactivity and dynamic functionality, with occasional DOM manipulation to enhance user engagement.

Here is the live link : https://m-e-u-e.github.io/Assignment-2/


## Authors

- [Md. Emtiyaj Uddin Emon](https://github.com/M-E-U-E) (Software Engineer Intern @W3 Engineers Ltd.)


## Features
    Responsive Design: The layout adjusts smoothly between mobile and desktop views for an accessible, user-friendly experience across all devices.

    JavaScript Functionality: JavaScript is extensively used for dynamic content updates and interactivity, enhancing the user experience. Key features include:

    DOM Manipulation: JavaScript is employed to update and manage content dynamically based on user actions.

    Event Handling: Button clicks, form submissions, and other user interactions trigger various responses, making the interface more engaging.
    Responsive Behavior: JavaScript ensures optimal layout and functionality adjustments on different screen sizes.
    
    HTML5 & CSS3 Basics: The project is built on a streamlined HTML5 structure with CSS3 for foundational styling, supporting an organized and consistent look.

    UI Design: A clean, attractive interface uses a neutral color scheme to keep the focus on content. While custom icons and colors are used, they may vary slightly from the initial mockups.
## Acceptance Criteria
#Technology

    1. HTML5: Provides the basic markup structure for the web page, organizing content into a clear, semantic layout.

    2. CSS3: Adds styling and responsiveness, ensuring the page is visually appealing and adapts smoothly to different screen sizes.

    3. JavaScript: Enables dynamic functionality, such as interactive elements and DOM manipulation, to enhance the user experience and responsiveness.


#Mobile-Friendly Design:
    Ensures that the layout is fully responsive.

    The page should adapt gracefully between mobile and desktop screen sizes.

    JavaScript adds interactivity to the page, making it fully workable by dynamically updating content and elements in response to user actions through DOM manipulation. It also handles events such as clicks, form submissions, and other inputs to provide an engaging, responsive experience. Additionally, JavaScript fine-tunes the layout and functionality across different devices to ensure smooth adaptation between screen sizes.

#Code Submission:
    This project is hosted on a public GitHub repository.
    The repository contains a README.md file (this file) to provide an overview of the project.
## Installation
    1.Clone the repository 
    git clone https://github.com/M-E-U-E/Assignment-2

    2.Open the index.html file in a web browser to view the project.

    3.Link the CSS File: Add the following line in the <head> section of your HTML file to link the stylesheet and javascript: 

        <link rel="stylesheet" href="styles.css">

        <link rel="stylesheet" href="css/united-states.css">

        <link rel="stylesheet" href="share.css">

        script src="script.js"></script>

        <script src="united-states.js"></script>

        <script src="share.js"></script>
## Documentation

#HTML Structure (<nav> Section)

    The HTML <nav> section provides a navigation menu with links for different sections of the website. The main elements in this structure include:

    Menu Icon (<div class="menu-icon">): A hamburger-style icon (☰) to symbolize a collapsible menu, typically used for responsive designs on mobile devices.

    Navigation Links (<ul class="nav-links">): A list of clickable links, such as United States, Trip Boards, List your property, Help, My Trips, and Sign In. Each link (<li><a href="#">...</a></li>) directs the user to a specified page or action, with some links marked as placeholders (e.g., href="#").

#JavaScript for Functionality
    
    1.  DOM Content Loaded Event: This listener (DOMContentLoaded) ensures the code executes only after the HTML content is fully loaded.

    2.  DOM Manipulation: The script updates the Region button dynamically to display the selected region's flag and name.

            updateRegionButton: This function sets the regionButton text with a flag and name based on the selected region. It retrieves these values from the data-flag and data-currency attributes in the <select> dropdown options.

    3.  Event Handling:

    Region Selection: When the user changes the region dropdown, an change event triggers the following:
    The updateRegionButton function displays the selected region’s flag and name.
    The currency is auto-updated in the currencySelect dropdown based on the region choice.
    Save Button: When clicked, this button:
    Calls the showToast function, which displays a brief notification to confirm that changes were saved.
    Uses window.history.back() to navigate back after a 1.5-second delay.
    Back Button: Clicking the back button also triggers window.history.back(), returning the user to the previous page.

    4.    Toast Notification: This is a brief message that appears when the user clicks Save, indicating that the action was successful. The notification disappears after 1 second.

    5.  Initialization: The updateRegionButton function is called on page load to initialize the button with the current region setting.

#CSS Styling and Responsiveness

Although not provided in the code snippet, CSS would be used to style the navigation menu, layout, and responsiveness. Key CSS concepts likely applied here are:

    1.    Responsiveness: CSS media queries might toggle the visibility or layout of the .menu-icon and .nav-links depending on screen size (for mobile vs. desktop).
    2.  Menu Styling: CSS would style the .menu-icon, .nav-links, and the <nav> container to align with the intended design and ensure it remains user-friendly on various devices.
    3.  Toast Notification: CSS likely controls the appearance and positioning of the toast notification, including fade-in/out effects and display timing.


## Contributing

    1.Removed Unnecessary Elements in Design: 

        Streamlined Layout: Identified and removed redundant sections and elements that were cluttering the interface. This made the design cleaner and allowed for a better user experience.

        Focused on Required Sections: Cross-checked the design requirements to ensure all essential elements were included and removed anything that did not align with the project specifications.

    2.JavaScript Code Structuring:

        Refactored JavaScript Code: Improved the organization of JavaScript code by grouping related functions and adding comments. This makes the code more modular and easier to maintain.

        Removed Redundant Code: Identified and eliminated duplicate or unnecessary code to improve the efficiency and performance of the JavaScript.

    3.Improved HTML Structure and Class Naming:

        Semantic HTML: Replaced generic div tags with meaningful tags like <header>, <footer>, <main>, and <section> to improve accessibility and document structure.

        Single H1 Tag Usage: Limited to one <h1> per page, with headings structured hierarchically (<h2>, <h3>, etc.) for clarity and SEO.

        Consistent Class Naming: Adopted a standardized naming convention, such as BEM (Block Element Modifier), using lowercase and hyphens for uniformity, making the CSS more modular and readable.
## Browser Compatibility
The styles have been tested for compatibility with modern browsers, including:

    Chrome

    Firefox

    Safari

    Edge
