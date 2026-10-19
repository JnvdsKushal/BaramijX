import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ServiceSchemaData {
  name: string;
  description: string;
  url: string;
}

interface SEOProps {
  /** Just the page name — "| BaramijX" is added automatically unless already present */
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  /** Optional breadcrumb trail for BreadcrumbList JSON-LD */
  breadcrumbs?: BreadcrumbItem[];
  /** Optional Service schema data for Service JSON-LD */
  serviceSchema?: ServiceSchemaData;
}

const SITE_NAME = 'BaramijX';
const DEFAULT_IMAGE = 'https://baramijx.com/assets/og-image.jpg';

/** Upsert a <meta> tag by CSS selector */
function setMeta(selector: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    const match = selector.match(/\[([^=]+)="([^"]+)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

/** Upsert a JSON-LD <script> tag by data-schema-type attribute */
function setJsonLd(schemaType: string, data: object) {
  const selector = `script[data-schema-type="${schemaType}"]`;
  let el = document.querySelector<HTMLScriptElement>(selector);
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-schema-type', schemaType);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Remove a JSON-LD <script> tag by data-schema-type */
function removeJsonLd(schemaType: string) {
  const el = document.querySelector(`script[data-schema-type="${schemaType}"]`);
  if (el) el.remove();
}

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  breadcrumbs,
  serviceSchema,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = canonical ?? `https://baramijx.com${location.pathname}`;
  // Avoid double branding
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    // ── Document title ────────────────────────────────────
    document.title = fullTitle;

    // ── Meta description ──────────────────────────────────
    setMeta('meta[name="description"]', description);

    // ── Canonical link ────────────────────────────────────
    let linkCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // ── Open Graph ────────────────────────────────────────
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', currentUrl);
    setMeta('meta[property="og:type"]', type);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[property="og:image:width"]', '1200');
    setMeta('meta[property="og:image:height"]', '630');
    setMeta('meta[property="og:site_name"]', SITE_NAME);

    // ── Twitter Card ──────────────────────────────────────
    setMeta('meta[name="twitter:card"]', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);

    // ── BreadcrumbList JSON-LD ────────────────────────────
    if (breadcrumbs && breadcrumbs.length > 0) {
      setJsonLd('BreadcrumbList', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    } else {
      removeJsonLd('BreadcrumbList');
    }

    // ── Service JSON-LD ──────────────────────────────────
    if (serviceSchema) {
      setJsonLd('Service', {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceSchema.name,
        description: serviceSchema.description,
        url: serviceSchema.url,
        provider: {
          '@type': 'Organization',
          name: 'BaramijX',
          url: 'https://baramijx.com',
        },
        areaServed: 'US',
      });
    } else {
      removeJsonLd('Service');
    }
  }, [fullTitle, description, currentUrl, image, type, breadcrumbs, serviceSchema]);

  return null;
}
