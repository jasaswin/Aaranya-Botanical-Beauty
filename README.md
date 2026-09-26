# AARANYA — Botanical Beauty, Thoughtfully Made.

A premium, responsive frontend e-commerce website for a fictional botanical
beauty brand, built with React, Vite and Tailwind CSS. This is a
frontend-only project — there is no backend, and checkout is a UI-only
demo (no real payments are processed).

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router
- Lucide React icons
- React Context + localStorage for cart/wishlist persistence
- Plain CSS keyframes + IntersectionObserver for scroll animations (no
  external animation library, kept intentionally simple)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build (outputs to /dist)
npm run preview    # preview the production build
```

## Project Structure

```
src/
  components/   Reusable UI components (Navbar, Footer, ProductCard, etc.)
  pages/        Route-level pages (Home, Shop, ProductDetails, etc.)
  data/         Static product, category, journal and testimonial data
  context/      CartContext, WishlistContext, ToastContext
  utils/        localStorage + currency formatting helpers
  assets/       Product and editorial images
```

## Features

- Home, Shop, Product Details, About, Journal (+ article pages),
  Sustainability, Contact, Wishlist, Cart, Checkout and a 404 page
- Functional search, category/price/rating filters, and sorting on Shop
- Cart and Wishlist with localStorage persistence and navbar counts
- Frontend-only checkout with form validation and a fictional order
  confirmation (e.g. `AAR-20260925-4821`)
- Responsive layout (375px – 1440px+), keyboard-accessible focus states,
  and semantic HTML throughout

## Notes

- All product and article content is original, fictional demo content.
- Sustainability statistics are illustrative demo figures, not real claims.

