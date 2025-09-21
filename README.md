# Juspay Assignment - Admin Dashboard

A modern, responsive admin dashboard built with React and Material-UI, featuring a comprehensive order management system and analytics dashboard.

## 🚀 Features

### Dashboard Analytics

- **Interactive Statistics Cards** - Key metrics display with visual indicators
- **Revenue Analytics** - Comprehensive revenue tracking and visualization
- **Projections vs Actuals** - Performance comparison charts
- **Revenue by Location** - Geographic revenue distribution
- **Top Selling Products** - Product performance analytics
- **Total Sales Overview** - Complete sales metrics

### Order Management System

- **Order List View** - Comprehensive table with all order details
- **Advanced Search & Filtering** - Real-time search and status-based filtering
- **Bulk Operations** - Multi-select functionality for batch actions
- **Status Management** - Visual status indicators (In Progress, Complete, Pending, Approved, Rejected)
- **User Profiles** - Avatar and user information display
- **Pagination** - Efficient data navigation
- **Sorting Options** - Multiple sorting criteria

### UI/UX Features

- **Dark/Light Mode Toggle** - Complete theme switching
- **Responsive Design** - Mobile-first approach with Material-UI Grid system
- **Collapsible Panels** - Left and right sidebar panels
- **Sticky Navigation** - Fixed header with breadcrumb navigation
- **Smooth Animations** - Transition effects and hover states
- **Professional Icons** - Lucide React and Material-UI icons

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **UI Library**: Material-UI (MUI) 7.3.2
- **Charts**: MUI X-Charts 7.29.1
- **Icons**:
  - Material-UI Icons 7.3.2
  - Lucide React 0.544.0
- **Styling**:
  - Emotion (React/Styled) 11.14.0
  - Roboto Font 5.2.8
- **Development Tools**:
  - ESLint 9.35.0
  - Vite React Plugin 5.0.2

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Step-by-Step Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd juspay-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Home.jsx                    # Main dashboard page
│   ├── Orderlist.jsx              # Order management page
│   ├── navbar/
│   │   ├── navbar.jsx              # Top navigation bar
│   │   └── breadcrumb.jsx          # Breadcrumb navigation
│   ├── leftpanel/
│   │   ├── leftpanel.jsx           # Left sidebar panel
│   │   └── dashboard/
│   │       ├── dashboard.jsx       # Dashboard layout
│   │       └── sections/
│   │           ├── cards-sections1.jsx  # Statistics cards
│   │           ├── cards-sections2.jsx  # Projections & location data
│   │           └── cards-sections3.jsx  # Revenue & products charts
│   └── rightpanel/
│       └── rightpanel.jsx          # Right sidebar panel
├── assets/                         # Images and static assets
├── App.jsx                         # Main application component
├── main.jsx                        # Application entry point
├── App.css                         # Global styles
└── index.css                       # Base CSS styles
```

## 🎨 Key Components

### Dashboard Features

- **Multi-section Layout**: Organized grid system with responsive breakpoints
- **Real-time Data Visualization**: Charts and graphs using MUI X-Charts
- **Interactive Cards**: Clickable statistics with navigation capabilities
- **Theme Consistency**: Unified dark/light mode across all components

### Order Management Features

- **Advanced Table**: Sortable columns with custom renderers
- **Status Chips**: Color-coded status indicators with theme support
- **User Avatars**: Profile images with fallback initials
- **Action Menus**: Dropdown menus for row-specific actions
- **Bulk Selection**: Checkbox-based multi-select functionality

## 🎯 Usage

### Navigation

- Use the hamburger menu to toggle the left panel
- Click on dashboard cards to navigate between sections
- Use the back arrow in Order List to return to dashboard
- Toggle dark/light mode using the theme switcher in the navbar

### Order Management

- Search orders using the search bar
- Filter by status using the filter dropdown
- Sort by different criteria using the sort menu
- Select multiple orders for bulk operations
- Navigate through pages using pagination controls

## 🔧 Customization

### Adding New Dashboard Cards

1. Create new components in `src/components/leftpanel/dashboard/sections/`
2. Import and add to the dashboard grid layout
3. Implement theme support using the `isDarkMode` prop

### Extending Order Management

1. Modify the `orderData` array in `Orderlist.jsx`
2. Add new status types in the `StatusChip` component
3. Implement additional filtering/sorting options

### Theme Customization

- Modify color schemes in individual components
- Update Material-UI theme configuration
- Add new theme variants beyond dark/light mode

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 600px (xs)
- **Tablet**: 600px - 960px (sm/md)
- **Desktop**: > 960px (lg/xl)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📄 License

This project is part of the Juspay assignment and is for demonstration purposes.

## 🤝 Contributing

This is an assignment project. For any questions or suggestions, please reach out to the development team.
