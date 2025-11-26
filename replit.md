# Starn Academy - Educational Platform

## Overview

Starn Academy is a comprehensive educational web application for teaching programming and robotics to children and teenagers. The platform is built as a full-stack application featuring a React frontend with Tailwind CSS styling and an Express backend with PostgreSQL database integration. The application provides information about courses, student projects, trainers, testimonials, and includes enrollment and contact management functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: The frontend uses React with TypeScript, built with Vite as the build tool. The UI is styled using Tailwind CSS with shadcn/ui component library for consistent, accessible components.

**Routing**: Client-side routing is handled by Wouter, a lightweight React router. The application follows a page-based architecture with distinct routes for Home, Courses, Projects, Trainers, Testimonials, FAQ, About, Contact, Login, and Register pages.

**State Management**: React Query (TanStack Query) is used for server state management, handling API requests and caching. Local component state uses React's built-in useState hooks.

**UI Component System**: The application uses shadcn/ui components built on Radix UI primitives, providing accessible and customizable components. Custom theming is applied through CSS variables defined in the Tailwind configuration to match the Starn Academy brand colors (blue, yellow/gold, and purple).

**Internationalization**: The application is designed for Arabic (RTL) and English content, with Arabic as the primary language. The HTML document sets `dir="rtl"` for proper right-to-left text flow.

**Responsive Design**: Mobile-first responsive design with different navigation patterns - a top bar for desktop and a side drawer for mobile devices. The `useIsMobile` hook detects screen size to adapt the UI accordingly.

### Backend Architecture

**Server Framework**: Express.js handles HTTP requests and serves both API endpoints and static frontend assets in production.

**Database Layer**: PostgreSQL database accessed through Drizzle ORM, providing type-safe database queries and migrations. The Neon serverless PostgreSQL driver is used for database connections.

**API Design**: RESTful API endpoints for enrollments and contacts with CRUD operations. Routes are modularized in `server/routes.ts` with validation using Zod schemas derived from Drizzle table definitions.

**Build Process**: Custom build script bundles the server code using esbuild with selective dependency bundling to optimize cold start times. The client is built separately using Vite.

**Development Mode**: In development, Vite middleware is integrated into the Express server for hot module replacement and fast refresh.

### Data Storage Solutions

**Database Schema**: PostgreSQL database with three main tables:
- `users`: User authentication and profile information
- `enrollments`: Student enrollment requests with parent information, preferred courses, and scheduling
- `contacts`: Contact form submissions from visitors

**ORM**: Drizzle ORM provides type-safe database access with schema definitions in TypeScript. Schema validation is handled through drizzle-zod integration, automatically generating Zod schemas from database table definitions.

**Storage Pattern**: A storage interface (`IStorage`) abstracts database operations, implemented by `DatabaseStorage` class. This allows for potential future database swapping or mock implementations for testing.

### Authentication and Authorization

**Current State**: Authentication infrastructure is present but not fully implemented. User schema exists with username/password fields, and login/register pages are created but currently show "coming soon" messages.

**Planned Approach**: The schema and routes suggest a traditional username/password authentication system. Session management dependencies (`express-session`, `connect-pg-simple`) are included for server-side session storage in PostgreSQL.

## External Dependencies

### Third-Party Services

**Neon Database**: Serverless PostgreSQL database hosting using `@neondatabase/serverless` driver. Requires `DATABASE_URL` environment variable for connection.

**WhatsApp Integration**: Direct WhatsApp link integration for customer support using the phone number 01142965661. Not a formal API integration, but uses WhatsApp's URL scheme for direct messaging.

**Google Sheets** (Planned): The attached assets indicate planned integration with Google Sheets API for booking system data export, though not currently implemented in the codebase.

### Key Libraries and Frameworks

**UI Components**: 
- Radix UI primitives for accessible component foundations
- shadcn/ui for pre-built, customizable components
- Lucide React for iconography

**Styling**:
- Tailwind CSS for utility-first styling
- Custom CSS variables for theming
- PostCSS with Autoprefixer

**Data Handling**:
- React Query for server state management
- Zod for runtime type validation
- Drizzle ORM for database operations

**Development Tools**:
- TypeScript for type safety
- Vite for fast development and optimized builds
- ESBuild for server bundling

**Fonts**: Google Fonts integration with Cairo (Arabic), Inter (English), and JetBrains Mono (code) typefaces.

### Replit-Specific Integrations

**Development Plugins**: The application includes Replit-specific Vite plugins:
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment banner
- `@replit/vite-plugin-runtime-error-modal`: Enhanced error display

**Meta Images Plugin**: Custom Vite plugin (`vite-plugin-meta-images.ts`) automatically updates Open Graph and Twitter meta tags with the correct Replit deployment URL for social media sharing.

**Deployment Detection**: The application detects Replit environment through `REPL_ID` environment variable to enable development-specific features.