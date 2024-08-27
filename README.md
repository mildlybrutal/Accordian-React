# React Accordion Component

A simple and responsive accordion component built with React and styled using Tailwind CSS.

## Project Overview

This project demonstrates the implementation of an accordion (collapsible content) component using React. It's built with Vite for fast development and uses Tailwind CSS for styling.

## Features

- Expandable/collapsible sections
- Smooth transitions
- Responsive design
- Customizable content

## Technologies Used

- React
- Vite
- Tailwind CSS
- ESLint for code quality

## Project Structure

The main components of the project are:

- `src/components/Accordian.jsx`: The main accordion component
- `src/constants/mockData.js`: Mock data for the accordion sections
- `src/App.jsx`: The main application component
- `tailwind.config.js`: Tailwind CSS configuration

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

## Usage

The `Accordian` component can be used as follows:

```jsx
import Accordian from "./components/Accordian";
const App = () => {
    return <App />
}
```

## Customization

To customize the accordion content, modify the `mockData.js` file in the `src/constants` directory. Each section should have an `id`, `title`, and `content`.

## Contributing

This project is for practice purposes. Feel free to fork and modify as needed.

## License

This project is open-source and available under the MIT License.
