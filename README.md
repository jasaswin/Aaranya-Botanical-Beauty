# 🌿 AARANYA — Botanical Beauty, Thoughtfully Made

> A premium, responsive frontend e-commerce experience for a fictional botanical beauty brand inspired by nature, Indian botanicals, and modern editorial design.

**Live Demo:** https://aaranya-botanical-beauty.vercel.app/
**GitHub Repository:** https://github.com/jasaswin/Aaranya-Botanical-Beauty

---

## ✨ Overview

**AARANYA** is a modern frontend e-commerce website designed for a fictional botanical beauty and wellness brand.

The project combines a premium editorial aesthetic with practical e-commerce functionality such as product discovery, search, filtering, product details, cart management, wishlist persistence, and a frontend-only checkout experience.

The design focuses on:

* 🌿 Botanical and earthy visual language
* ✨ Premium editorial aesthetics
* 📱 Responsive layouts
* 🛍️ E-commerce interactions
* 🎨 Consistent design system
* ⚡ Smooth frontend interactions
* ♿ Accessible and keyboard-friendly UI

The application is intentionally built as a **frontend-only project**. It does not currently use a backend, database, authentication system, or real payment gateway.

---

## 🚀 Live Demo

### 🌐 [Visit AARANYA Live](https://aaranya-botanical-beauty.vercel.app/)

The application is deployed using **Vercel** and can be accessed directly from the browser.

---

## 🎯 Project Goals

The main goal of this project was to create a realistic e-commerce frontend that goes beyond a static landing page.

The application demonstrates how a modern React application can handle:

* Product browsing
* Dynamic product details
* Search
* Filtering
* Sorting
* Cart management
* Wishlist management
* Persistent client-side state
* Form validation
* Responsive navigation
* Frontend checkout flow
* Reusable component architecture

---

## 🎨 Design & Branding

AARANYA follows a **modern botanical luxury** design direction.

### Brand

**AARANYA**

**Tagline:**
*Botanical Beauty, Thoughtfully Made.*

### Visual Direction

The interface combines:

* Warm cream backgrounds
* Forest green
* Sage green
* Muted rose
* Antique gold
* Editorial typography
* Botanical photography
* Generous whitespace
* Minimal borders
* Soft transitions
* Asymmetrical editorial compositions

### Color Palette

| Color        | Hex       | Usage               |
| ------------ | --------- | ------------------- |
| Forest Green | `#304B3A` | Primary brand color |
| Sage         | `#71846A` | Secondary elements  |
| Warm Cream   | `#F5F0E6` | Main background     |
| Soft Sand    | `#E8DDCA` | Cards and sections  |
| Muted Rose   | `#C98F82` | Accent              |
| Antique Gold | `#B8945A` | Premium details     |
| Charcoal     | `#252824` | Primary text        |
| Off White    | `#FCFAF5` | Light surfaces      |

---

## 🛠️ Tech Stack

### Frontend

* **React 18**
* **Vite**
* **JavaScript / JSX**
* **Tailwind CSS**
* **React Router**
* **Lucide React**

### State Management

* React Context API
* Browser `localStorage`

### UI & Interaction

* CSS animations
* CSS transitions
* Intersection Observer
* Responsive Tailwind utilities
* Accessible focus states

### Deployment

* GitHub
* Vercel

---

## ⭐ Features

### 🏠 Homepage

The homepage includes:

* Full-screen editorial hero section
* Brand introduction
* Featured product collection
* Shop-by-ritual categories
* Featured product showcase
* Brand philosophy
* Journal/editorial section
* Testimonials
* Newsletter signup
* Premium footer

---

### 🛍️ Product Catalog

The Shop page provides:

* Product grid
* Category filtering
* Price filtering
* Rating filtering
* Search
* Sorting
* Product count
* Responsive product cards

Available sorting options include:

* Featured
* Price: Low to High
* Price: High to Low
* Rating
* Newest

---

### 🔎 Product Search

The application includes a functional product search experience.

Products can be searched using:

* Product name
* Category
* Description
* Product tags

The search interface is designed to work smoothly across desktop and mobile layouts.

---

### 🧴 Product Details

Each product has a dedicated product details page containing:

* Product image
* Product name
* Category
* Rating
* Review count
* Price
* Description
* Ingredients
* Benefits
* Usage instructions
* Quantity selector
* Add to Cart
* Buy Now
* Add to Wishlist
* Related products

---

### 🛒 Shopping Cart

The cart supports:

* Add to cart
* Remove product
* Increase quantity
* Decrease quantity
* Clear cart
* Subtotal calculation
* Shipping calculation
* Total calculation

Cart state is persisted using `localStorage`.

---

### 🤍 Wishlist

Users can:

* Add products to wishlist
* Remove products from wishlist
* View saved products
* Track wishlist count from the navbar

Wishlist data is persisted using `localStorage`.

---

### 💳 Frontend Checkout

A complete frontend checkout flow is included.

The checkout contains:

* Contact information
* Shipping address
* Delivery method
* Payment method selection
* Order summary
* Form validation
* Order confirmation

Supported demo payment options:

* UPI
* Card
* Cash on Delivery

> **Important:** No real payment is processed. This is a frontend demonstration only.

---

### 📖 Journal

The Journal section follows an editorial/magazine-style layout.

Content categories include:

* Botanical Knowledge
* Rituals
* Ingredients
* Sustainability

Each article includes:

* Cover image
* Category
* Title
* Excerpt
* Reading time
* Dedicated article page

---

### 🌱 Sustainability

The sustainability section communicates the fictional brand's design philosophy through:

* Thoughtful packaging
* Botanical ingredients
* Small-batch production
* Conscious consumption

Any numerical sustainability statistics displayed in the project are **illustrative demo content**.

---

### 📱 Responsive Design

The application is designed to work across:

* Mobile — 375px+
* Mobile — 425px+
* Tablet — 768px+
* Laptop — 1024px+
* Desktop — 1440px+

The interface adapts:

* Navigation
* Product grids
* Typography
* Images
* Cart experience
* Forms
* Editorial layouts

for different screen sizes.

---

### ♿ Accessibility

The project includes:

* Semantic HTML
* Descriptive image alt text
* Keyboard-accessible controls
* Visible focus states
* Accessible buttons
* Responsive typography
* Appropriate interactive states

---

## 📂 Project Structure

```text
src/
│
├── assets/
│   └── images/
│       ├── editorial/
│       └── products/
│
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── ProductCard
│   ├── ProductGrid
│   ├── SearchOverlay
│   ├── CartDrawer
│   ├── WishlistButton
│   ├── QuantitySelector
│   ├── Rating
│   ├── Newsletter
│   └── ...
│
├── pages/
│   ├── Home
│   ├── Shop
│   ├── ProductDetails
│   ├── About
│   ├── Journal
│   ├── Sustainability
│   ├── Contact
│   ├── Wishlist
│   ├── Cart
│   ├── Checkout
│   └── NotFound
│
├── data/
│   ├── products
│   ├── categories
│   ├── journal
│   └── testimonials
│
├── context/
│   ├── CartContext
│   ├── WishlistContext
│   └── ToastContext
│
├── utils/
│   ├── localStorage
│   └── currency formatting
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧩 Application Routes

| Route             | Description                |
| ----------------- | -------------------------- |
| `/`               | Homepage                   |
| `/shop`           | Product catalog            |
| `/product/:id`    | Product details            |
| `/about`          | Brand story                |
| `/journal`        | Editorial articles         |
| `/journal/:id`    | Individual article         |
| `/sustainability` | Sustainability information |
| `/contact`        | Contact form               |
| `/wishlist`       | Saved products             |
| `/cart`           | Shopping cart              |
| `/checkout`       | Frontend checkout          |
| `*`               | 404 page                   |

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

You can verify your installation with:

```bash
node -v
npm -v
git --version
```

### Clone the repository

```bash
git clone https://github.com/jasaswin/Aaranya-Botanical-Beauty.git
```

### Navigate into the project

```bash
cd Aaranya-Botanical-Beauty
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Deployment

The project is deployed on **Vercel**.

### Deployment flow

```text
Local Development
       ↓
     Git
       ↓
    GitHub
       ↓
    Vercel
       ↓
  Live Website
```

### Deploy your own version

1. Fork or clone the repository.
2. Install dependencies.
3. Make your changes.
4. Push the project to GitHub.
5. Import the repository into Vercel.
6. Vercel automatically builds and deploys the Vite application.

### Build Configuration

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## 💾 Client-Side Data Persistence

AARANYA currently uses browser `localStorage` for client-side persistence.

The following data can be persisted:

```text
Cart
Wishlist
```

This allows users to refresh or revisit the page without immediately losing their current cart and wishlist state.

No user data is currently stored on a backend server.

---

## 🔐 Current Limitations

This is intentionally a frontend-focused project.

The current version does **not** include:

* Backend API
* Database
* User authentication
* Real user accounts
* Real payment processing
* Order persistence on a server
* Admin dashboard
* Inventory management
* Real email notifications

The checkout flow is therefore a **UI/UX demonstration only**.

---

## 🔮 Future Enhancements

Potential future improvements include:

### Backend

* Java Spring Boot REST API
* MySQL database
* Spring Data JPA
* JWT authentication
* User registration and login
* Product management APIs
* Order management APIs

### E-commerce

* Real order management
* Inventory tracking
* Coupon system
* Product reviews
* Customer accounts
* Order history
* Address management

### Admin

* Admin dashboard
* Product CRUD
* Category management
* Inventory management
* Order management
* Customer management
* Sales analytics

### Payments

Integration with a real payment provider such as:

* Razorpay
* Stripe

---

## 🖼️ Assets & Content

AARANYA is a fictional brand created for this frontend project.

The product names, descriptions, prices, testimonials, articles, and sustainability figures are **demo content created for the application** and do not represent real products or claims.

The product visuals are created as fictional brand/product imagery for the project.

---

## 📌 Project Highlights

This project demonstrates practical frontend development concepts including:

```text
React component architecture
        ↓
React Router
        ↓
Reusable components
        ↓
Context API
        ↓
localStorage persistence
        ↓
Dynamic product rendering
        ↓
Search & filtering
        ↓
Cart & wishlist
        ↓
Form validation
        ↓
Responsive UI
        ↓
Production build
        ↓
Vercel deployment
```

---

## 👩‍💻 Author

### Jasaswini Mohanty

Computer Science Engineering Student | Frontend & Full-Stack Development

**GitHub:**
https://github.com/jasaswin

**Project Repository:**
https://github.com/jasaswin/Aaranya-Botanical-Beauty

**Live Project:**
https://aaranya-botanical-beauty.vercel.app/

---

## ⭐ If you like the project

If you find AARANYA useful or interesting, feel free to explore the repository, try the live demo, and share feedback.

---

## 📄 License

This project is created for **educational and portfolio purposes**.

The AARANYA brand, product names, product descriptions, and fictional product content are original demo content created for this project.

Third-party assets, libraries, fonts, and imagery remain subject to their respective licenses and terms.


