
# Property listing page for a vacation home in Juneau, Alaska





This project involves creating a responsive web page to display property details. The page should be functional on both desktop and mobile devices, adapting seamlessly to different screen sizes. The design is based on provided reference images for desktop and mobile views.

This README provides a description of  HTML5 and CSS3 files used in a web project. Below, you'll find details about each file's purpose and structure.

Here is the live link :
    https://m-e-u-e.github.io/Assignment-1/
## Author

- [Md. Emtiyaj Uddin Emon](https://github.com/M-E-U-E)
    (Software Engineer Intern @W3 Engineers Ltd.)
## Features

    1.Responsive Design: The layout is optimized to work on both mobile and desktop devices, ensuring a user-friendly experience across all screen sizes.

    2.Technology: Built with HTML5 and CSS3 to meet the requirements for structure and styling.

    3.Attractive UI: Emphasis on a clean and visually appealing design to enhance user experience. Custom icons and color schemes are used, though they may not exactly match the provided mockups.

    4.Color Scheme: Uses a neutral and inviting color palette designed to maintain focus on the content.

    5.Flexbox-Based Layouts: For handling responsive, side-by-side sections on larger screens, with stacking on smaller screens.
## Acceptance Criteria
1.Technology Stack:

    HTML5 for markup structure.

    CSS3 for styling and responsiveness.

2.Mobile-Friendly Design:

    Ensures that the layout is fully responsive.

    The page should adapt gracefully between mobile and desktop screen sizes.

3.Code Submission:

    This project is hosted on a public GitHub repository.
    The repository contains a README.md file (this file) to provide an overview of the project.

4.Integrity:

    Adherence to original work, without any form of plagiarism.




## Installation

    1.Clone the repository 
        git clone https://github.com/M-E-U-E/Assignment-1

    2.Open the index.html file in a web browser to view the project.

    3.Link the CSS File: Add the following line in the <head> section of your HTML file to link the stylesheet: 
    
    <link rel="stylesheet" href="path/to/styles.css">

## Documentation
The page includes the following key sections:

    Header: Includes navigation links for the website, such as "United States", "Trip Boards", "List your property", "Help", "My Trips", and a "Sign In" button.

    Property Header: Displays a back link to "See all properties", as well as sharing and saving actions.

    Gallery: A grid of six images showcasing the property.

    Navigation Tabs: Allows the user to switch between "Overview", "Amenities", and "Policies" sections.

    Main Content: Divided into a left column and a right column:

    Left Column: Includes the property's title, an "Exceptional" badge, property statistics, amenities, and a detailed description.

    Right Column: Contains a banner for members, a booking card with pricing and date selection, and sections for "Rooms & Beds" and "Spaces".

    Points of Interest: Provides information about nearby shopping centers, parks and recreation, and hospitals, including their distance and travel time from the property.

    Similar Properties: Displays a grid of four similar properties with images, titles, and ratings.

    House Rules: Lists the check-in and check-out times, as well as rules for children, events, pets, and smoking.

    Damage and Incidentals: Information about responsibility for any damage or incidents during the stay.

    Cancellation Policy: Details the refund policy based on the cancellation timeline.
    Important Information: Includes additional details about the property, such as extra-person charges, check-in requirements, and safety features.

    Frequently Asked Questions: Answers common questions about the property, such as pet-friendliness and check-in time.

    Review Section: Displays the property's overall rating, label, and number of reviews, as well as a grid of individual reviews.

    Host Information: Provides details about the host, including their name and the languages they speak.
    

Here’s a breakdown of the main CSS classes in styles.css:

    .points-container: Wrapper container for the sections, with flexbox settings for responsive alignment.

    .points-section: Main section styling, applied to each category (e.g., "Shopping Centers", "Parks and Recreation"). Sets width, padding, background, and border properties.

    .subsection-title: Styles for the section title, with font size adjustments for emphasis.

    .point-item: Wrapper for individual items within each section, such as specific shopping centers or parks.

    .point-title: Styles for item titles, using a slightly smaller font than the section title.

    .point-info: Provides style for additional information, such as travel time and distance.

    .point-note: Additional notes or details, usually displayed at the bottom of a section.
I add comments in my CSS code to clarify the structure and explain specific styles, making it easier to maintain and understand.
## Responsive Design
The design includes media queries to ensure optimal layout across different devices:

    Large Screens: The .points-container uses flexbox to display sections side-by-side.

    Medium to Small Screens: Media queries adjust the layout so sections stack vertically, ensuring readability on smaller screens.\

Key breakpoints:

    768px and above: Sections are displayed side-by-side.

    Below 768px: Sections stack vertically for easy reading on mobile devices.

Example Media Query: 

    @media (max-width: 768px) {
    .property-details {
        flex-direction: column;
        }
    }
Hover Effects and Transitions for Interactivity:


    Example:  .gallery-item img:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

Custom Scrollbar Styling (for Webkit Browsers):

    *::-webkit-scrollbar {
    display: none;
    }

 Overlay Banners with Flex Alignment:

    .banner {
    display: flex;
    align-items: center;
    background-color: #4a4a4a;
    color: #fff;
    }
Auto-Fit Grid for Dynamic Columns:

    .highlights-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }









## Customization
To adapt this stylesheet to your project’s design, consider:

    Adjusting Colors: Update colors to match your brand.

    Modifying Spacing: Change padding and margin values to alter the spacing between elements.

    Typography: Modify font sizes and weights in .subsection-title3, .point-title3, and other classes to achieve the desired text appearance.
    
    Additional Classes: You can create more classes based on the existing structure if you need more specific styling.
## Browser Compatibility
The styles have been tested for compatibility with modern browsers, including:

    Chrome

    Firefox

    Safari
    
    Edge
