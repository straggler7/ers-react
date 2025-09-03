# IRS Error Resolution System - Work Records

A modern React TypeScript application for managing IRS work records with advanced table functionality and responsive design.

## Features

- **React Table Integration**: Advanced sorting, filtering, and pagination
- **TypeScript**: Full type safety and IntelliSense support
- **Tailwind CSS**: Modern, responsive styling matching the original design
- **Production-Ready**: Structured for scalability and maintainability
- **Reusable Components**: Modular UI components for consistency

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Sidebar)
│   ├── ui/              # Reusable UI components (Button, Input, Select)
│   └── workRecords/     # Work records specific components
├── data/                # Mock data and constants
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Key Components

### WorkRecordsTable
- Built with @tanstack/react-table
- Supports sorting, filtering, and pagination
- Row selection with bulk actions
- Responsive design

### StatusBadge
- Reusable status indicator
- Consistent styling across the app
- Type-safe status values

### SearchFilters
- Global search functionality
- Assignee and status filtering
- Real-time filtering

### ActionsDropdown
- Bulk actions for selected records
- Assignment and status management
- Confirmation dialogs

## Styling

The application uses Tailwind CSS with custom color palette matching the original IRS design:

- **Primary Blue**: `#0066cc` (irs-blue-500)
- **Dark Blue**: `#003d6b` (irs-blue-700)
- **Status Colors**: Matching original badge colors

## Data Management

- Mock data structure matching real work records
- TypeScript interfaces for type safety
- Custom hooks for data filtering and state management

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for desktop and tablet
- Optimized for professional use

## Development

This project follows React best practices:
- Functional components with hooks
- TypeScript for type safety
- Modular component architecture
- Custom hooks for business logic
- Consistent naming conventions
