# Portfolio Application

## Overview

This is a modern, full-stack portfolio application built with React (frontend) and Express.js (backend). The application showcases a personal portfolio with sections for about, skills, projects, experience, and contact information. It features a sophisticated dark theme design with animations and a contact form that stores submissions to a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database Schema
Uses Drizzle ORM with PostgreSQL containing two main tables:
- **users**: Basic user authentication (id, username, password)
- **contacts**: Contact form submissions (id, firstName, lastName, email, subject, message, createdAt)

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with scroll spy functionality
- **Hero Section**: Animated introduction with floating elements
- **About Section**: Personal information and description
- **Skills Section**: Categorized technical skills with progress indicators
- **Projects Section**: Portfolio projects with images and descriptions
- **Experience Section**: Timeline-based work experience display
- **Contact Section**: Contact form with validation and social links

### Backend Routes
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contacts`: Retrieve all contact submissions
- `GET /api/download-resume`: Resume download endpoint

### Storage Layer
- **Production**: PostgreSQL with Drizzle ORM and Neon Database serverless driver
- **Development**: PostgreSQL database implementation with DatabaseStorage class (replaced MemStorage)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schema
   - Data sent to backend via POST request
   - Backend validates and stores in database
   - Success/error feedback shown to user

2. **Portfolio Content**:
   - Static content defined in constants file
   - Rendered directly on frontend
   - No database queries required for main portfolio content

3. **Navigation**:
   - Scroll spy tracks current section
   - Smooth scrolling between sections
   - Mobile-responsive hamburger menu

## External Dependencies

### Frontend
- **UI Framework**: React with TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Animation**: Framer Motion
- **HTTP Client**: Native fetch API with custom wrapper
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React, Font Awesome (CDN)

### Backend
- **Database**: PostgreSQL via Neon Database (@neondatabase/serverless)
- **ORM**: Drizzle ORM with Zod integration
- **Validation**: Zod for request validation
- **Development**: Vite for development server and HMR

### Development Tools
- **Build Tool**: Vite for frontend, esbuild for backend
- **Package Manager**: npm
- **TypeScript**: Full TypeScript support across stack
- **Linting/Formatting**: TypeScript compiler for type checking

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` script

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution, Vite dev server
- **Production**: Node.js serves bundled Express app with static files
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Scripts
- `dev`: Start development server with hot reload
- `build`: Build both frontend and backend for production
- `start`: Start production server
- `check`: TypeScript type checking
- `db:push`: Apply database schema changes

The application follows a monorepo structure with shared types and schemas between frontend and backend, ensuring type safety across the entire stack. The design emphasizes performance, user experience, and maintainability with modern web development practices.