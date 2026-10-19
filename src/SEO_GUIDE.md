# BaramijX SEO Optimization Guide

## 1. Title Tags & Meta Descriptions

We have implemented a dynamic `SEO` component (`components/SEO.tsx`) that updates these tags on every route change.

### Best Practices Checklist:
- **Title Tags**: 
  - Length: 50-60 characters.
  - Format: `Primary Keyword - Secondary Keyword | Brand Name`.
  - *Current Status*: Implemented. Example: "Digital Consulting & IT Solutions | BaramijX".
- **Meta Descriptions**:
  - Length: 150-160 characters.
  - Content: Action-oriented summary. Use keywords naturally.
  - *Current Status*: Implemented. Example: "BaramijX empowers businesses with expert IT strategy..."

## 2. Heading Structure (H1, H2, H3)

Search engines use headings to understand page structure.

### Best Practices Checklist:
- **H1**: 
  - Only **one** H1 per page.
  - Must contain the primary keyword for that page.
  - *Current Status*: Verified in `Hero.tsx`, `ContactPage.tsx`, etc.
- **H2 & H3**:
  - Use H2 for main sections (e.g., "Our Services", "Why Choose Us").
  - Use H3 for cards or subsections.
  - *Suggestion*: Review all blog posts to ensure they follow this hierarchy strictly.

## 3. Image Alt Text

Alt text is crucial for accessibility (screen readers) and Image SEO.

### Best Practices Checklist:
- **Descriptive**: Describe the image content (e.g., "Team meeting in a modern office glass conference room").
- **Keywords**: Include relevant keywords if applicable, but do not stuff them.
- **Decorative Images**: Use `alt=""` for purely decorative elements (icons, shapes).
- *Current Status*: The `ImageWithFallback` component passes `alt` props.
- *Action Item*: Audit all `img` tags to ensure meaningful `alt` text is provided.

## 4. Sitemap Submission

Your sitemap is located at `https://baramijx.com/sitemap.xml`.

### Google Search Console (GSC) Submission Steps:
1.  **Log in** to [Google Search Console](https://search.google.com/search-console).
2.  **Select Property**: Choose your domain `baramijx.com`.
3.  **Navigate**: Go to **Sitemaps** in the left sidebar.
4.  **Submit**: Enter `sitemap.xml` in the "Add a new sitemap" field and click **Submit**.
5.  **Verify**: Check back in 24 hours to ensure status is "Success" and URLs are discovered.

## 5. Google Search Console (GSC) Setup

If you haven't verified your domain yet:

### Setup Steps:
1.  **Add Property**: Click "Add Property" in GSC.
2.  **Choose Type**: Select **Domain** (requires DNS) or **URL Prefix** (easier for beginners).
3.  **Verification (URL Prefix)**:
    *   Download the HTML verification file provided by Google.
    *   Place it in the `public/` folder of this project.
    *   Deploy the website.
    *   Click "Verify" in GSC.
4.  **Monitoring**:
    *   Check **Performance** tab for clicks and impressions.
    *   Check **Pages** tab for indexing errors (404s, 500s).

## 6. Additional Suggestions

### Structured Data (Schema Markup)
- **Organization Schema**: Add JSON-LD script to `index.html` or `App.tsx` to tell Google about your logo, address, and social profiles.
- **Local Business Schema**: If you have a physical office, add LocalBusiness schema.

### Performance (Core Web Vitals)
- We have already implemented **Lazy Loading** and **LCP Optimization**.
- monitor **Lighthouse Scores** in Chrome DevTools regularly.
