
#  BazarDor (বাজার দর)

### A Smart Daily Market Price Tracker

BazarDor is a responsive web application that helps users explore and compare the prices of daily essential products in Bangladesh. Users can check current market prices, track price changes, browse products by category, and view detailed market information.

The project is built with Next.js, TypeScript, and modern web technologies, focusing on a clean user interface, smooth navigation, and a user-friendly experience across all devices.

##  Technologies Used

- **Next.js 16** – React framework with App Router
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS v4** – Responsive styling
- **DaisyUI** – UI components
- **Better Auth** – User authentication
- **MongoDB Atlas** – Database management
- **React Hot Toast** – Notifications
- **Vercel** – Deployment platform

##  Key Features

### 1. Responsive User Interface
A clean, modern, and Figma-inspired design that works smoothly across mobile, tablet, and desktop devices.

### 2. Daily Market Price Tracking
Users can explore essential product prices, view price increases and decreases, and compare today's prices with previous records.

### 3. Category Filtering and Sorting
Products are organized into categories. Users can browse specific categories and sort products by price from low to high or high to low.

### 4. Detailed Product Information
Each product has a dedicated details page displaying price statistics, historical comparisons, and market-wise minimum and maximum prices.

### 5. Authentication and User Profile
Secure user registration and login using Better Auth, including social login options, protected routes, profile management, and profile updates.

##  API Integration

The application uses the BazarDor API to fetch product and category information.

**Base URL:**
https://api.api-store.workers.dev/api/bazardor

**API Endpoints:**
- `/products` – Get all products
- `/products/:id` – Get a single product
- `/products?category=chal` – Filter products
- `/categories` – Get all categories
- `/categories/:slug` – Get category details

##  Live link: https://bazar-dor-v8o1.vercel.app/

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/bazardor.git
```

Navigate to the project directory:

```bash
cd bazardor
```

Install dependencies:

```bash
npm install
```

Configure the required environment variables in `.env.local`.

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📱 Responsive Design

The application is designed to support:

- Mobile devices
- Tablets
- Laptops
- Desktop screens


