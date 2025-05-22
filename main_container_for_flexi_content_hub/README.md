# FlexiContent Hub - React CMS Component

FlexiContent Hub is a flexible and user-friendly Content Management System (CMS) designed to empower content creators and administrators with robust publishing tools and seamless content management capabilities.

## Features

- **Modern React-based CMS UI** - Clean, intuitive interface for content management
- **Flexible Content Management** - Handle various content types with ease
- **Responsive Design** - Works on desktops, tablets, and mobile devices
- **User Management** - Role-based access control and permissions
- **Media Library** - Upload and manage images, videos, and files

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd flexicontent-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to http://localhost:3000

## Project Structure

```
src/
├── components/
│   ├── Dashboard/
│   │   ├── Dashboard.js
│   │   └── Dashboard.css
│   ├── FlexiContentHub/
│   │   ├── FlexiContentHub.js
│   │   └── FlexiContentHub.css
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.css
│   └── Sidebar/
│       ├── Sidebar.js
│       └── Sidebar.css
├── context/
│   └── AppContext.js
├── hooks/
│   └── useContentManagement.js
├── utils/
│   └── contentUtils.js
├── App.css
├── App.js
├── index.css
└── index.js
```

## Main Components

### FlexiContentHub

The main container component that orchestrates all the parts of the CMS.

```jsx
import FlexiContentHub from './components/FlexiContentHub/FlexiContentHub';

<FlexiContentHub />
```

### Header

Contains the top navigation bar with app branding, search, and user menu.

### Sidebar

Provides navigation to different sections of the CMS.

### Dashboard

Overview page with content statistics and quick actions.

## Context and State Management

The application uses React Context API for state management. The main context provider is `AppContext`.

```jsx
import { useAppContext } from './context/AppContext';

const MyComponent = () => {
  const { user, contentStats, toggleSidebar } = useAppContext();
  
  return (
    // Component implementation
  );
};
```

## Custom Hooks

### useContentManagement

A custom hook for content management operations.

```jsx
import { useContentManagement } from './hooks/useContentManagement';

const ContentList = () => {
  const {
    contentItems,
    isLoading,
    error,
    fetchContent,
    createContent,
    updateContent,
    deleteContent
  } = useContentManagement();
  
  // Component implementation
};
```

## Utilities

The `contentUtils.js` file contains helper functions for common operations:

- `formatDate(dateString)` - Format dates for display
- `getStatusClass(status)` - Get CSS class for content status
- `truncateText(text, maxLength)` - Truncate text with ellipsis
- `groupContentBy(items, property)` - Group content items by property
- `searchContent(items, searchTerm, fields)` - Search content items
- `sortContent(items, field, direction)` - Sort content items

## Styling

The application uses CSS variables for theming:

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

## Future Development

- Content editor integration
- Media management features
- User authentication and role-based permissions
- Workflow and publishing features
- Analytics dashboard
- API integration for backend services

## License

This project is licensed under the MIT License - see the LICENSE file for details.
