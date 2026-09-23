# Tailwind Shoes E-commerce

A modern, responsive e-commerce shoe store built with React 18, TypeScript, Tailwind CSS, and Vite.

## Tech Stack

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.5-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.4-646CFF?logo=vite&logoColor=white)

## Features

- Browse a Nike shoe collection with vibrant colors and detailed descriptions
- Select shoe size and quantity before adding to cart
- View cart items in a slide-out sidebar
- Add/remove items from cart (quantity and size selection)
- Dark/Light mode toggle with local storage persistence
- Fully responsive design for mobile, tablet, and desktop
- Smooth animations and hover effects
- Accessible UI with semantic HTML and ARIA attributes
- Product cards with hover zoom effect
- New arrivals section showcasing featured products

## UI Overview

The application consists of several key sections:

1. **Navigation Bar** - Logo, menu links (Home, About, Services, Pricing, Contact), and cart button
2. **Product Display** - Main shoe image with size/quantity selectors and "Add to bag" button
3. **New Arrivals Section** - Grid of featured shoes with hover effects
4. **Sidebar Cart** - Slide-out cart showing selected items with total price and checkout option
5. **Dark Mode Toggle** - Fixed button at bottom right to switch between light and dark themes

## Project Directory Structure

```
tailwind-shoes/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                 # Static images and SVGs
│   │   ├── nike-logo.svg
│   │   ├── lines.png
│   │   └── shoe images...
│   ├── components/             # Reusable UI components
│   │   ├── Card.tsx
│   │   ├── Cart.tsx
│   │   ├── CartItem.tsx
│   │   ├── Nav.tsx
│   │   ├── NewArrivalsSection.tsx
│   │   ├── Select.tsx
│   │   ├── Sidebar.tsx
│   │   └── ShoeDetail.tsx
│   ├── constants/              # Type-safe constants and data
│   │   └── index.ts
│   ├── App.tsx                 # Main application component
│   ├── index.tsx               # Entry point
│   ├── index.css               # Tailwind CSS directives and custom utilities
│   └── ...                     # Configuration files
├ .gitignore                  # Git ignore rules
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── README.md
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript configuration for Vite config
├── vite.config.ts              # Vite configuration with TypeScript support
└── yarn.lock                   # Dependency lockfile (if using yarn)
```

## Local Setup & Build Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tailwind-shoes.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tailwind-shoes
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the development server with hot reload:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
```
The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

### Linting

To run ESLint:
```bash
npm run lint
```
*(Note: Add a lint script to package.json if not present)*

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


