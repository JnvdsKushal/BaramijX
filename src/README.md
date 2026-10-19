# BaramijX Website - SEO Optimized

This project is a React-based corporate consultancy website for "BaramijX", fully optimized for SEO and performance.

## Project Structure

*   `/components`: Reusable UI components (Navbar, Footer, Hero, etc.)
*   `/pages`: Page-level components (Home, About, Services, Contact, Blog)
*   `/public`: Static assets (images, icons, `sitemap.xml`, `robots.txt`)
*   `/imports`: SVG assets

## Key SEO Features

1.  **Meta Tags:** Every page includes optimized `<title>`, `<meta name="description">`, and canonical tags via the `components/SEO.tsx` component.
2.  **Sitemap & Robots:** Automatically generated `sitemap.xml` listing all pages, services, and blog posts.
3.  **Performance:**
    *   **Lazy Loading:** Images below the fold are lazy-loaded.
    *   **LCP Optimization:** The Hero image uses `fetchPriority="high"` and `loading="eager"`.
    *   **Code Splitting:** React Router handles page-based routing.
4.  **Accessibility:**
    *   Semantic HTML (`<main>`, `<nav>`, `<footer>`).
    *   ARIA labels on interactive elements.
    *   High contrast color scheme.

## How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Build for production:
    ```bash
    npm run build
    ```

## Content Management

*   **Blog:** Blog posts are located in `pages/blog/`. To add a new post, create a new file there and add a route in `App.tsx`.
*   **Services:** Service pages are in `pages/`.

## License

© 2025 BaramijX. All rights reserved.