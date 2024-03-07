# Appointments Frontend

This is the frontend repository for the Appointments project. It provides a user interface to interact with the appointments management system.

## Backend Functionality for this repo is found here with details: https://github.com/zaheenrahman/Clinicians-NPI_RestAPI_Python_Flask_React

### Backend must be running in order to see appointments fetched by axios.

## Description

The Appointments Frontend is built using React.js, a popular JavaScript library for building user interfaces. It communicates with the backend API to fetch appointments data and display it to the user. Users can view appointments, filter them by date range, and perform other actions as necessary.

## Installation

1. Clone this repository to your local machine:

    ```
    git clone 
    ```

2. Navigate to the project directory:

    ```
    cd appointments-frontend
    ```

3. Install the dependencies using npm:

    ```
    npm install
    ```

## Usage

To start the development server:

# npm start
This command runs the app in development mode. Open http://localhost:3000 to view it in the browser.

### Contributing

Acknowledgements
React.js - A JavaScript library for building user interfaces.
Axios - Promise-based HTTP client for the browser and Node.js.
Tailwind CSS - A utility-first CSS framework for rapidly building custom designs.

### Important Files Documentation:

#### AppointmentsList.js

This component is responsible for displaying a list of appointments fetched from the backend API. It includes:

State Management: Uses useState to manage the appointments data and useEffect to fetch the data from the API upon component mount or when the API URL changes.

Data Fetching: Utilizes axios to make GET requests to the backend API to retrieve appointments data.

Rendering Appointments: Maps over the fetched appointments array to display each appointment's details in a table format. It shows the appointment time, clinician ID, patient ID, patient name, and status.

Search Component Integration: Incorporates the Search component to filter appointments based on user input.

#### Home.js

This component serves as the landing page for the application, offering an overview and highlights of the project. It includes:

Project Description: A brief description of the application, its purpose, and capabilities.

Information Sections: Utilizes icons from react-icons to visually complement the information about backend and frontend development, contributing guidelines, and acknowledgements.

Acknowledgements: Lists the main technologies and resources used in the project.

#### NavBar.js

This component serves as the application's navigation bar, allowing users to switch between the Home page and the Appointments List. It uses a prop-based approach to manage active states and navigation, highlighting the current page the user is viewing and providing a user-friendly experience for navigating the app.

##### Props:
currentPage: Indicates the current active page.

onNavigate: A function passed from the parent component (App.js) to change the current page.

#### Search.js
The Search component allows users to filter appointments within a specified date range. It leverages react-datepicker for date selection, providing a straightforward UI for users to pick start and end dates.

### Functionality:
Users can select start and end dates to filter the appointments list.
Upon form submission, it constructs a URL with query parameters based on the selected dates and fetches filtered appointments data from the backend API.
Updates the appointments list in the parent component (AppointmentsList.js) with the fetched data.

### App.js
This is the root component of your React application, orchestrating the navigation and rendering of different pages based on the user's selection. It maintains the current page state and provides the navigation function to the NavBar component.

State Management:
Uses useState to track the current page (home or appointments).

Conditional Rendering:
Renders either the Home component or the AppointmentsList component based on the current page state.

Environment Variable
REACT_APP_API_URL: Sets the base URL for the API endpoints, allowing the application to make requests to the backend. It's used in AppointmentsList.js and Search.js to fetch appointments data.

Application Flow
Navigation: The NavBar component allows users to switch between the home view and the appointments list. It communicates the current page selection back to App.js using the onNavigate callback.

Fetching Appointments: The AppointmentsList component fetches all appointments on mount. It displays them in a table format, showing details like the appointment time, patient name, and status.

Filtering Appointments: The Search component enables users to filter appointments by a date range. It directly updates the appointments list in AppointmentsList.js based on the filter criteria.

Styling: The application uses Tailwind CSS for styling, ensuring a responsive and visually appealing interface.


### Misc - Working images ###

![Image 2](https://github.com/zaheenrahman/Frontend_NPI_AppointmentPicker-React-Tailwind/assets/35182751/4793fc2b-ef30-48e8-80c0-dd4e8952d44f)
![Image 3](https://github.com/zaheenrahman/Frontend_NPI_AppointmentPicker-React-Tailwind/assets/35182751/6e34b5f5-3247-4444-89ff-34e881648903)
![Image 45](https://github.com/zaheenrahman/Frontend_NPI_AppointmentPicker-React-Tailwind/assets/35182751/97d30cb2-4941-4e86-9d9b-3c938e891456)




