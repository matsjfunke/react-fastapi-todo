# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start` 
- Runs the app in the development mode on http://localhost:3000

### `npm test` 
- Launches the test runner in the interactive watch mode.

### `npm run build`
- Builds the app for production to the `build` folder.

# React structure explained
└── react-frontend
    │
    ├── Dockerfile
    ├── README.md
    ├── package-lock.json       # Ensures consistent dependencies across different machines.
    ├── package.json            # Metadata and dependencies for the project.
    │
    ├── public  # contains static assets that will be served by your application.
    │   ├── favicon.ico        # Icon displayed in the browser tab.
    │   ├── index.html         # Entry point HTML file for the React application.
    │   ├── manifest.json      # Metadata for web app installation on mobile/desktop.
    │   └── robots.txt         # Rules for web crawlers.
    │
    └── src
        ├── App.js             # Main component of the React application.
        ├── App.test.js        # Tests for the App component.
        ├── api.js             # Sets backend-server address for making API calls.
        ├── components         # Reusable components used throughout the application.
        │   ├── TodoForm.js
        │   └── TodoList.js
        ├── index.css          # CSS file for styling the application.
        ├── index.js           # Entry point of the React application.
        ├── reportWebVitals.js # Code for measuring and reporting web vitals.
        └── setupTests.js      # Setup configurations for running tests.
