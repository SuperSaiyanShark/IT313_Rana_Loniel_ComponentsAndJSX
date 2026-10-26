# IT313 - Student Roster Card Renderer (React Components & JSX)

## Problem Description
This application builds an Expo (React Native) screen for the IT313 registrar that renders student records as reusable UI cards. It demonstrates fundamental React concepts, including functional component architecture, prop destructuring, JSX expressions, conditional rendering with logical `&&`, and list rendering using stable keys.

## Component Structure
* **`App.js`**: The primary application entry point wrapped in a `SafeAreaView` hosting the `StudentRoster` component.
* **`StudentRoster` (Parent Component)**: Manages student array state, computes total enrollment numbers dynamically via template literals, provides reordering controls, and maps data items to child components.
* **`StudentCard` (Child Component)**: A reusable UI component that accepts student properties via destructuring, displays details, and conditionally renders the `"Full Load"` badge when `isFullLoad` evaluates to true.

## How to Run the App

### Prerequisites
* **Node.js** and **npm** installed on your system.
* **Expo Go** mobile application installed on your iOS/Android device or an active emulator.

### Execution Steps
1. Clone or download the repository to your local machine.
2. Install project dependencies:
   ```bash
   npm install