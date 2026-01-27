# Professional Experience Tabs

A modern, responsive React application showcasing professional experience through an interactive tabbed interface. Built with TypeScript, featuring smooth animations, accessibility compliance, and a clean, professional design.

![React](https://img.shields.io/badge/React-19.2.4-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

### 🎨 **Modern UI/UX Design**

- **Gradient backgrounds** and subtle shadows for depth
- **Smooth animations** and micro-interactions
- **Professional color scheme** with excellent contrast
- **Responsive design** that works on all devices

### ♿ **Accessibility First**

- **ARIA labels** and semantic HTML structure
- **Keyboard navigation** support (← → arrow keys)
- **Focus management** with visible focus indicators
- **Screen reader** compatible

### 🚀 **Performance Optimized**

- **Component separation** following DRY principles
- **TypeScript** for type safety and better DX
- **Modern React patterns** with hooks
- **Optimized bundle** with Vite

### 📱 **Responsive Layout**

- **Mobile-first** approach
- **Flexible grid system** that adapts to screen sizes
- **Touch-friendly** button sizes
- **Consistent spacing** across all devices

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.4 with TypeScript
- **Build Tool:** Vite 7.3.1
- **Styling:** Custom CSS with CSS Variables
- **Icons:** React Icons (FontAwesome)
- **HTTP Client:** Axios 1.13.4
- **Code Quality:** ESLint with TypeScript rules

## 📁 Project Structure

```bash
src/
├── components/          # Reusable React components
│   ├── JobButtons.tsx   # Tab navigation component
│   └── JobInfo.tsx      # Job details display component
├── data/               # Static data files
│   └── jobs.ts         # Job experience data
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles and CSS variables
└── vite-env.d.ts       # Vite type definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tabs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   ```bash
   Navigate to http://localhost:5173
   ```

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build the project for production         |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint to check code quality         |

## 🎯 Usage

### Navigation

- **Click** on company names to switch between job experiences
- **Keyboard**: Use ← → arrow keys for navigation
- **Visual feedback** shows the currently active tab

### Features Overview

- **Smooth transitions** between job details
- **Responsive design** adapts to different screen sizes
- **Accessibility compliant** with proper ARIA labels
- **Professional styling** with modern design patterns

## 🏗️ Architecture

### Component Design

The application follows a **component-based architecture** with clear separation of concerns:

- **`JobButtons`**: Handles tab navigation and user interaction
- **`JobInfo`**: Displays detailed job information with animations
- **`App`**: Main container managing state and layout

### State Management

- **Local state** using React hooks (`useState`, `useEffect`)
- **Props drilling** for component communication
- **Type-safe** state management with TypeScript

### Styling Approach

- **CSS Variables** for consistent theming
- **Utility-first** approach with custom properties
- **Responsive breakpoints** for different screen sizes
- **Animation keyframes** for smooth transitions

## 🎨 Customization

### Color Theme

Modify the CSS variables in `src/index.css`:

```css
:root {
  --clr-primary-5: #2caeba; /* Main brand color */
  --clr-grey-1: hsl(209, 61%, 16%); /* Text color */
  --clr-white: #fff; /* Background color */
  /* ... other variables */
}
```

### Adding New Jobs

Edit `src/data/jobs.ts` to add new job experiences:

```typescript
export const jobsData: IJOB[] = [
  // ... existing jobs
  {
    id: "new-job",
    order: 5,
    title: "New Position",
    dates: "2024 - Present",
    duties: ["New responsibility"],
    company: "NEW COMPANY",
  },
];
```

### Component Styling

Each component has dedicated CSS classes for easy customization:

- `.job-btn` - Tab button styling
- `.job-info` - Job details container
- `.btn-container` - Tab navigation container

## 🔧 Development

### Code Quality

- **ESLint** configuration for code consistency
- **TypeScript** strict mode enabled
- **Prettier** integration (if configured)
- **Git hooks** for pre-commit quality checks

### Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌟 Key Highlights

### ✨ **Modern React Patterns**

- Functional components with hooks
- TypeScript for type safety
- Component composition
- Custom hooks for reusable logic

### 🎭 **Smooth Animations**

- CSS transitions for state changes
- Keyframe animations for entrance effects
- Reduced motion support for accessibility
- Performance-optimized animations

### 📱 **Mobile Excellence**

- Touch-friendly interface
- Responsive typography
- Optimized button sizes
- Cross-device compatibility

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Test on multiple screen sizes
- Ensure accessibility compliance
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Icons** for the beautiful icon set
- **Vite** for the lightning-fast build tool
- **TypeScript** for excellent developer experience
- **CSS Variables** for maintainable styling

## 📞 Support

If you have any questions or need help:

- **Open an issue** on GitHub
- **Check the documentation** in this README
- **Review the code** for implementation details

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**</content>
