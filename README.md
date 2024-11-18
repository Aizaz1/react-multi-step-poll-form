A React-based multi-step poll form application that allows users to select options across multiple steps, view a summary of their choices, and submit the data. This project features a dynamic carousel, Redux state management, and a responsive user interface built with Tailwind CSS.

Features:

Multi-step form with a vertical carousel animation.
Configurable steps with options for each step.
Real-time state management using Redux.
Summary view to display user-selected options.
Option to navigate between steps using navigation dots and buttons.
Responsive design with Tailwind CSS.
Mock submission for collected data.
Technologies Used:

React: For building the UI components.
Redux Toolkit: For managing state across components.
Tailwind CSS: For responsive and utility-first CSS styling.
JavaScript (ES6): For implementing functionality.
HTML5: For semantic structure.


Setup Instructions:

Prerequisites:

Node.js installed on your system.
Package manager (npm or yarn).

Clone the Repository:

git clone https://github.com/Aizaz1/react-multi-step-poll-form.git
cd react-multi-step-poll-form

Install Dependencies:

npm install

Run the Development Server:

npm start

The app will be available at http://localhost:3000.

How It Works:

Step Navigation:

Use "Next" and "Previous" buttons to navigate between steps.
Navigation dots on the left side allow jumping to a specific step.
Option Selection:

Click an option to select it for the current step. The selected option is highlighted.
Summary View:

The summary is displayed after the last step, showing all selected options.
A "Submit" button finalizes the selection.
Submission:

Upon clicking "Submit," the data is logged to the console for demonstration purposes. You can connect it to an API for real submissions.
Customization: Styling: Tailwind CSS is used for styling. You can customize the styles directly in the components or by editing the Tailwind configuration.