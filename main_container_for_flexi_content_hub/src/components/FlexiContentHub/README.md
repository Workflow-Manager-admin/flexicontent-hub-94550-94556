# FlexiContent Hub Component

The FlexiContent Hub is a flexible and user-friendly Content Management System (CMS) designed to empower content creators and administrators with robust publishing tools and seamless content management capabilities.

## Component Structure

The FlexiContent Hub consists of several key components:

1. **FlexiContentHub** - The main container component
2. **Header** - Top navigation bar with search and user menu
3. **Sidebar** - Navigation menu for different sections
4. **Dashboard** - Overview of content statistics and quick actions

## Features

- Responsive layout design
- Collapsible sidebar navigation
- Content statistics dashboard
- Content management interface
- Modern, clean UI following KAVIA design system

## Usage

```jsx
import FlexiContentHub from './components/FlexiContentHub/FlexiContentHub';

function App() {
  return (
    <div className="app">
      <FlexiContentHub />
    </div>
  );
}
```

## Component Structure

```
components/
├── FlexiContentHub/
│   ├── FlexiContentHub.js
│   └── FlexiContentHub.css
├── Header/
│   ├── Header.js
│   └── Header.css
├── Sidebar/
│   ├── Sidebar.js
│   └── Sidebar.css
└── Dashboard/
    ├── Dashboard.js
    └── Dashboard.css
```

## Dependencies

- React
- React Router DOM

## Customization

The component uses CSS variables for easy customization of colors and styling. The main variables are defined in `App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
  --content-bg: #f7f9fc;
  --card-bg: #ffffff;
  /* More variables... */
}
```

## Future Enhancements

- User authentication and permissions
- Content editor integration
- Media management
- Workflow and publishing features
- Analytics dashboard
