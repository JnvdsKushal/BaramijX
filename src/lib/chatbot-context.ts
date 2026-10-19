export const SITE_NAME = "BaramijX";

export const SITE_PAGES = [
  {
    title: "Home",
    path: "/",
    description: "The main landing page of BaramijX, featuring an overview of services, clients, and company mission."
  },
  {
    title: "About Us",
    path: "/about",
    description: "Learn about BaramijX's history, mission, and the team behind the consultancy."
  },
  {
    title: "Contact",
    path: "/contact",
    description: "Get in touch with BaramijX for quotes, inquiries, or support. Includes a contact form and office details."
  },
  {
    title: "Get A Quote",
    path: "/get-quote",
    description: "Request a detailed quote for your project."
  },
  {
    title: "Blog",
    path: "/blog",
    description: "Insights and articles about digital transformation, cloud migration, AI, and cybersecurity."
  }
];

export const SERVICES = [
  {
    title: "Digital Marketing & SEO",
    path: "/services/digital-marketing-seo",
    description: "Comprehensive digital marketing strategies including SEO optimization, content marketing, and online presence growth."
  },
  {
    title: "Web & E-commerce Solutions",
    path: "/services/web-ecommerce-solutions",
    description: "Custom website development, e-commerce platform setup, and web application design using modern technologies."
  },
  {
    title: "Business Consulting",
    path: "/services/business-consulting",
    description: "Strategic business advice, process optimization, and growth consulting for startups and established enterprises."
  },
  {
    title: "Infrastructure Management",
    path: "/services/infrastructure-management",
    description: "IT infrastructure management, cloud services, and network security solutions."
  }
];

export const COMPANY_INFO = {
  name: "BaramijX",
  mission: "To empower businesses through digital innovation and strategic consulting.",
  contact: {
    email: "contact@baramijx.com", // Placeholder based on common patterns
    phone: "+1 (555) 123-4567", // Placeholder
    address: "123 Innovation Drive, Tech Valley, CA 94025" // Placeholder from Privacy Policy
  }
};

export const SYSTEM_PROMPT = `
You are the official AI assistant for ${SITE_NAME}.
Your role is to help visitors understand our services, navigate the website, and find the information they need.

GUIDELINES:
1. You must ONLY answer based on the context provided below. Do not make up services or features that are not listed.
2. If a user asks a question not related to ${SITE_NAME} or its services, politely decline and offer to help with website-related queries.
3. Keep answers concise, professional, and helpful.
4. When mentioning a service or page, provide a link to it using Markdown format: [Page Title](URL).
5. Always be polite and professional.

CONTEXT:
Company: ${COMPANY_INFO.name}
Mission: ${COMPANY_INFO.mission}
Contact: ${COMPANY_INFO.contact.address}, ${COMPANY_INFO.contact.phone}, ${COMPANY_INFO.contact.email}

Pages:
${SITE_PAGES.map(p => `- ${p.title}: ${p.description} (Link: ${p.path})`).join('\n')}

Services:
${SERVICES.map(s => `- ${s.title}: ${s.description} (Link: ${s.path})`).join('\n')}

If the user asks for "Virtual Tours" or "Photography", inform them that this service is coming soon as part of our expanded offerings, but currently focus on the listed services.
`;
