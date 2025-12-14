# AppScrip Assignment – Product Listing Page (React + Vite)

**Live Demo (Vercel):** _<PASTE_YOUR_VERCEL_LINK_HERE>_  
**Repository:** _[https://github.com/MananBagadi100/Appscrip-task-MananBagadi](https://github.com/MananBagadi100/Appscrip-task-MananBagadi)_

This project is an AppScrip assignment implementing a responsive Product Listing Page (PLP) UI with:
- Desktop layout with persistent sidebar filters + product grid
- Mobile layout with a filter **drawer** + responsive product grid
- Sorting support via a dedicated utility

---

## Tech Stack

- **React** (functional components + hooks)
- **Vite** (dev server + build)
- **CSS** (component-scoped stylesheets)
- **SVG assets** for icons

---

## Features

- Responsive PLP (desktop + mobile behaviors differ as per design)
- Filter sidebar (desktop) with show/hide toggle
- Mobile filter drawer (kept separate from desktop behavior)
- Sort dropdown + sorting logic handled in `src/utils/sortProducts.js`
- Footer: separate mobile and desktop implementations (desktop styles inside media query)

---

## Project Structure

> Matches the current structure in `src/` (key files shown)

```
src/
  assets/
    icons/
      StarBulletPoint.svg
      TopbarMobile.svg
      USA_Flag.svg
      react.svg
      ...other icons
  components/
    FilterContent.jsx
    Footer.jsx
    HeroOffer.jsx
    Navbar.jsx
    ProductGrid.jsx
    SortDropdown.jsx
  data/
    productsApi.js
  pages/
    ProductListingPage.jsx
  styles/
    FilterContentStyles.css
    FooterStyles.css
    HeroOfferStyles.css
    NavbarStyles.css
    ProductGridStyles.css
    ProductListingStyles.css
    SortDropdownStyle.css
  utils/
    sortProducts.js
  App.css
```

---

## Getting Started (Local Setup)

### 1) Clone the repository
```bash
git clone https://github.com/MananBagadi100/Appscrip-task-MananBagadi.git
cd <YOUR_PROJECT_FOLDER>
```

### 2) Install dependencies
```bash
npm install
```

### 3) Run the development server
```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

---

## Build & Preview

### Build for production
```bash
npm run build
```

### Preview the production build locally
```bash
npm run preview
```

---

## Notes / Implementation Details

- **Desktop vs Mobile behavior is intentionally different**, so the layout and controls are handled with responsive CSS and separate sections where required.
- The **sorting logic** is centralized in:
  - `src/utils/sortProducts.js`
- Product fetching / data source logic lives in:
  - `src/data/productsApi.js`
- PLP composition is in:
  - `src/pages/ProductListingPage.jsx`

---

## Deployment (Vercel)

1. Push your repo to GitHub
2. Import the project in **Vercel**
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

---

## Author

Manan Bagadi
