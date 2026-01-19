# Private Dining London

## Overview

A luxury private dining venue discovery platform for London. The application enables users to browse curated private dining spaces, read editorial stories, and submit inquiries for event bookings. Built as a full-stack TypeScript application with a React frontend and Express backend, featuring a dark luxury aesthetic with gold accents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state caching and synchronization
- **Styling**: Tailwind CSS with custom luxury theme (dark charcoal, gold, cream palette)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Typography**: Cormorant Garamond (serif headings) and Montserrat (sans-serif body)
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **API Pattern**: REST API with typed route definitions in `shared/routes.ts`
- **Validation**: Zod schemas for input validation with drizzle-zod integration
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: Vite middleware integration for HMR during development

### Data Storage
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable)
- **Schema Location**: `shared/schema.ts` defines all tables
- **Tables**:
  - `inquiries`: Event booking requests with contact info and event details
  - `subscribers`: Newsletter email subscriptions
  - `spaces`: Private dining venue listings with name, description, capacity, location, and images
  - `stories`: Editorial content/blog posts with title, excerpt, content, and images
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization

### Shared Code Structure
- **Path**: `shared/` directory contains code used by both frontend and backend
- **Schema**: Database table definitions and Zod insert schemas
- **Routes**: API route definitions with method, path, input schema, and response schemas
- **Type Safety**: Full end-to-end type safety from database to API to frontend

### Build System
- **Development**: `tsx` for running TypeScript directly
- **Production Build**: Custom build script using esbuild for server bundling and Vite for client
- **Output**: `dist/` directory with `index.cjs` (server) and `public/` (static assets)

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection string via `DATABASE_URL` environment variable
- **Drizzle ORM**: Database client and query builder
- **connect-pg-simple**: PostgreSQL session store (available but session auth not currently implemented)

### Frontend Libraries
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod resolver for react-hook-form
- **lucide-react**: Icon library
- **wouter**: Client-side routing
- **date-fns**: Date formatting utilities

### UI Component Dependencies
- **Radix UI**: Full suite of accessible UI primitives (dialog, dropdown, tabs, etc.)
- **class-variance-authority**: Variant styling for components
- **tailwind-merge**: Tailwind class merging utility
- **embla-carousel-react**: Carousel component
- **vaul**: Drawer component
- **cmdk**: Command menu component

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **TypeScript**: Type checking across entire codebase
- **Drizzle Kit**: Database migration tooling