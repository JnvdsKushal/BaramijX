::: {align="center"}
# BaramijX

### Digital Consultancy & Technology Services Website

A responsive corporate website for showcasing BaramijX services,
publishing technology insights, and capturing client inquiries through
contact, quote-request, and newsletter forms.

**Frontend:** React · TypeScript · Vite\
**Backend:** PHP · PDO\
**Database:** MySQL
:::Table of Contents
- Overview
- Features
- Technology Stack
- Architecture
- Project Structure
- Getting Started
- Environment Configuration
- Backend and Database Setup
- API Reference
- Available Routes
- Build and Deployment
- SEO and Performance
- Security Notes
- Development Workflow
- Troubleshooting
- Future Improvements
- License
Overview
BaramijX is a corporate digital consultancy website built as a React
single-page application (SPA). It presents the agency's services and
company information, provides a technology-focused blog, and gives
prospective clients ways to contact the team or request a project quote.

The frontend is built with React and TypeScript and is bundled by Vite.
A small PHP API handles form submissions, while MySQL stores contact
inquiries, quote requests, and newsletter subscriptions.
Primary goals
- Present the BaramijX brand and service offerings professionally.
- Help prospective clients explore services and request project
  estimates.
- Publish educational articles about technology and digital
  transformation.
- Support responsive layouts and search-engine metadata.
- Persist submitted inquiries in a relational database.
Features
Website and content
- Home page with hero and service highlights.
- About page and company information.
- Service catalogue and dedicated service pages.
- Blog listing and individual article pages.
- Contact form and project quote form.
- Newsletter subscription form.
- Cookie banner and cookie policy.
- Privacy policy, terms of service, and disclaimer.
- Shared navigation, footer, notifications, and not-found page.
Lead capture
- Contact submissions: name, email, optional
  phone/company/referral, and message.
- Quote requests: contact details, project name, service category,
  description, budget range, timeline, and optional additional
  information.
- Newsletter subscriptions: email address.
- JSON request/response format between the React frontend and PHP API.
- Server-side validation and PDO prepared statements in the PHP
  endpoints.
- Honeypot fields and basic file-based rate limiting in the contact
  and quote endpoints.
User experience
- React Router client-side navigation.
- Reusable UI components built with Radix UI primitives.
- Iconography through Lucide React.
- Toast notifications through Sonner.
- Motion and interactive visual components.
- Responsive styling and reusable layout components.
Technology Stack
  Area                                Technologies
  UI framework                        React 18, React DOM

  Language                            TypeScript

  Build tool and development server   Vite 6, React SWC plugin

  Routing                             React Router DOM

  UI primitives                       Radix UI

  Styling utilities                   Tailwind-related utility classes,
                                      project CSS, clsx,
                                      tailwind-merge

  Icons                               Lucide React

  Motion and visuals                  Motion, Three.js

  Forms and components                React Hook Form and supporting UI
                                      libraries

  Backend                             PHP

  Database access                     PDO

  Database                            MySQL

  Database encoding                   utf8mb4
  Web server configuration            Apache .htaccess rules
The repository does not currently define dedicated lint, unit-test, or
preview scripts in package.json. Use the scripts that are actually
present rather than assuming those commands are configured.
Architecture
Visitor's browser
       |
       v
React + TypeScript SPA
(Vite build output: build/)
       |
       | JSON POST requests
       v
PHP API endpoints
       |
       | PDO + prepared statements
       v
MySQL database
  ├── contact_submissions
  ├── quote_requests
  └── newsletter_subscribers
Frontend
The React application renders pages and shared components. React Router
handles client-side navigation. The API client in src/lib/api.ts
centralizes requests to the PHP endpoints.
Backend
The PHP scripts accept JSON POST requests, validate input, and write
accepted submissions to MySQL. They return JSON responses and HTTP
status codes to the frontend.
Database
The SQL schema in php/schema.sql defines the three primary tables used
by the current form endpoints. The schema also includes fields for
inquiry status and supporting-document paths on quote requests; the
current README does not imply that an admin dashboard or file-upload
workflow is implemented.
Project Structure
baramijX/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── .env.production                 # Local/deployment configuration; do not commit
├── .gitignore
├── build/                          # Generated by `npm run build`
├── src/
│   ├── App.tsx                     # Application shell and route definitions
│   ├── main.tsx                    # Frontend entry point
│   ├── index.css
│   ├── styles/
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                     # Reusable UI primitives
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Pricing.tsx
│   │   ├── Team.tsx
│   │   ├── Blog.tsx
│   │   ├── CookieBanner.tsx
│   │   └── SEO.tsx
│   ├── pages/                      # Route-level pages
│   │   └── blog/                   # Individual blog article pages
│   ├── data/
│   │   └── blogData.ts             # Blog-related data
│   ├── lib/
│   │   ├── api.ts                  # Centralized PHP API client
│   │   ├── chatbot-context.ts
│   │   ├── three.ts
│   │   └── utils.ts
│   └── public/
│       ├── image/                  # Website imagery
│       ├── robots.txt
│       └── sitemap.xml
└── php/
    ├── api/
    │   ├── submit_contact.php
    │   ├── submit_quote.php
    │   └── subscribe_newsletter.php
    ├── private/
    │   └── db_config.php           # Server-side DB credentials; never commit
    ├── schema.sql                  # MySQL schema
    └── .htaccess                   # Intended for the Apache web root
node_modules/ and build/ are generated directories. Install
dependencies from the lockfile and rebuild the frontend when required;
do not use the uploaded node_modules/ directory as a source of
truth.

Getting Started
Prerequisites
Install the following tools:
- Node.js compatible with the installed Vite version (Node.js 20 or
  newer is a sensible baseline).
- npm.
- PHP with PDO MySQL support for the backend.
- MySQL or a compatible MySQL server.
- An Apache environment if you want to use the included .htaccess
  rules as written.
Check your versions:
node --version
npm --version
php --version
1. Clone or open the repository
git clone <YOUR_REPOSITORY_URL>
cd baramijX
If you already have the project locally, open a terminal in the
directory containing package.json.
2. Install frontend dependencies
npm ci
npm ci installs the versions recorded in package-lock.json. If you
intentionally update dependencies, use npm install and commit the
resulting lockfile changes.
3. Configure the frontend API URL
Create a local .env file in the project root, or configure the
appropriate environment file for the mode you are running:
VITE_API_BASE_URL=http://localhost/api
This is only an example. The base URL must point to the directory where
your PHP API endpoints are served. If your local PHP server exposes the
endpoints at another path, update the URL accordingly.

Vite exposes variables prefixed with VITE_ to browser code. Never
place database passwords, private keys, or other server secrets in a
VITE_ variable.
4. Start the frontend
npm run dev
The Vite configuration uses port 3000 and is configured to open the
browser automatically. If the port is occupied, Vite may offer another
port.
5. Build the frontend
npm run build
Vite writes the production bundle to build/.
Environment Configuration
Frontend
The API client reads:
  Variable                Purpose                 Example
  VITE_API_BASE_URL     Base URL for the PHP    https://example.com/api
                          API endpoints           
The code falls back to the production API URL configured in
src/lib/api.ts when the variable is not set. For local development,
explicitly set the URL to avoid accidentally sending test submissions to
production.

Vite environment values are embedded in the frontend bundle at build
time. Set the correct value before running the production build.
Backend
Configure the PHP database connection in php/private/db_config.php on
the server. The file defines:
- DB_HOST
- DB_NAME
- DB_USER
- DB_PASS
- DB_CHARSET
- ALLOWED_ORIGIN
Use the credentials and database host supplied by your hosting provider.
Set ALLOWED_ORIGIN to the exact trusted website origin, including the
scheme and without a trailing slash.

Do not commit real database credentials. Keep the production
configuration outside the publicly served document root whenever
possible.
Backend and Database Setup
1. Create a database
Create a MySQL database and a dedicated database user. Grant that user
only the permissions required by the application.
2. Import the schema
From a MySQL client, run the schema file against the intended database:
mysql -u <DB_USER> -p <DB_NAME> < php/schema.sql
Alternatively, import php/schema.sql using your hosting control panel
or database administration tool.

The schema defines:

  Table                      Purpose
  contact_submissions      Stores contact form inquiries
  quote_requests           Stores project quote requests and their status
  newsletter_subscribers   Stores newsletter email subscriptions

If the database already contains these tables, review the SQL comments
and existing schema before running migrations.
CREATE TABLE IF NOT EXISTS does not automatically add new columns to
an existing table.
3. Configure PHP
Set the database constants in the server-side db_config.php. Ensure
PHP has the PDO MySQL extension enabled.

The PHP endpoint files currently include the configuration using a
relative path equivalent to a private directory located outside the
public web root. Preserve that relationship when deploying; do not place
database credentials in a publicly accessible directory.
4. Verify API deployment paths
The frontend API client calls these paths relative to
VITE_API_BASE_URL:
- submit_contact.php
- submit_quote.php
- subscribe_newsletter.php
For example, if the base URL is https://example.com/api, the contact
endpoint is expected at https://example.com/api/submit_contact.php.

The source .htaccess file is intended for the Apache document root.
Review the actual directory layout on your hosting provider before
copying it into place.
API Reference
All three endpoints expect JSON POST requests and return JSON
responses shaped like:
{
  "success": true,
  "message": "Request processed."
}
The exact message and HTTP status depend on the endpoint and outcome.
POST /api/submit_contact.php
Accepts a contact inquiry.

Example request:
{
  "name": "Alex Morgan",
  "email": "alex@example.com",
  "phone": "+1 555 010 0200",
  "company": "Example Co.",
  "message": "I'd like to discuss a website project.",
  "referral": "Search",
  "website": ""
}
Required fields:
- name
- email
- message
Optional fields include phone, company, and referral. The
website field is a honeypot and should remain empty.
POST /api/submit_quote.php
Accepts a project quote request.

Example request:
{
  "name": "Alex Morgan",
  "email": "alex@example.com",
  "phone": "+1 555 010 0200",
  "company": "Example Co.",
  "projectName": "Company website",
  "serviceCategory": "web-development",
  "description": "A responsive company website with a contact form.",
  "budgetRange": "$5,000 - $10,000",
  "timeline": "standard",
  "additionalInfo": "",
  "website": ""
}
The backend validates required fields and checks service category,
budget, and timeline values against allowlists. Use the values expected
by the current PHP endpoint when wiring up or modifying the form.
POST /api/subscribe_newsletter.php
Accepts an email address for newsletter subscription.

Example request:
{
  "email": "alex@example.com",
  "website": ""
}
The website property is the honeypot field and should remain empty.
Response and error handling
The API uses standard HTTP statuses for outcomes such as successful
creation, invalid JSON, validation errors, unsupported methods, rate
limiting, and server errors. The frontend API client treats 422 as a
response whose JSON body should still be parsed, and throws for other
non-success statuses.

Do not rely on a successful HTTP response alone; check the returned
success property before showing a success state.
Available Routes
The current route definitions are in src/App.tsx.

  Route                                   Page
  /                                     Home
  /about                                About
  /services                             All services
  /services/digital-marketing-seo       Digital marketing and SEO
  /services/web-ecommerce-solutions     Web and e-commerce solutions
  /services/business-consulting         Business consulting
  /services/infrastructure-management   Infrastructure management
  /blog                                 Blog listing
  /blog/digital-transformation-2025     Digital transformation article
  /blog/cloud-migration-guide           Cloud migration article
  /blog/ai-practical-applications       AI applications article
  /blog/cybersecurity-best-practices    Cybersecurity article
  /blog/data-analytics-roi              Data analytics article
  /blog/remote-work-technology          Remote work technology article
  /contact                              Contact
  /get-quote                            Request a quote
  /privacy-policy                       Privacy policy
  /terms-of-service                     Terms of service
  /cookie-policy                        Cookie policy
  /disclaimer                           Disclaimer
  *                                     Not-found page

The legacy /preview_page.html path redirects to the home page.
Build and Deployment
Frontend deployment
1. Set VITE_API_BASE_URL to the correct production API base URL.
2. Install locked dependencies with npm ci.
3. Build with npm run build.
4. Deploy the contents of build/ to the public web root.
5. Configure the web server to serve index.html for frontend routes
   that are not real files or API endpoints.
6. Confirm that static assets load and that direct navigation to nested
   routes works.
Do not deploy node_modules/ as part of the public website.
PHP deployment
A typical Apache hosting layout for the current PHP include paths is:
account-root/
├── private/
│   └── db_config.php
└── public_html/
    ├── index.html
    ├── assets/
    ├── .htaccess
    └── api/
        ├── submit_contact.php
        ├── submit_quote.php
        └── subscribe_newsletter.php
This is an example layout, not a guarantee of your hosting provider's
exact filesystem structure. Ensure the require_once path in each
endpoint resolves to the private configuration file after deployment.
Upload the contents of php/api/ into the public api/ directory, and
place the private configuration outside the public document root.

Review the included php/.htaccess before using it. It contains HTTPS
redirects, SPA routing, security headers, compression, and cache rules.
Apache modules and hosting policies may vary; test the rules on staging
before applying them to production. In particular, ensure the Content
Security Policy permits every external resource the site actually uses.
Production checklist
- [ ] Production API URL is configured before the build.
- [ ] PHP endpoints are reachable at the paths expected by the
  frontend.
- [ ] Database schema is imported and credentials are correct.
- [ ] Private configuration is outside the public document root.
- [ ] HTTPS is enabled and working.
- [ ] SPA routes work when opened directly.
- [ ] Contact, quote, and newsletter submissions are tested
  end-to-end.
- [ ] CORS origin matches the production domain.
- [ ] Error logs do not expose secrets or sensitive user input.
- [ ] node_modules/, local environment files, and credentials are
  not deployed publicly.
SEO and Performance
The project includes several SEO-related assets and components:
- src/components/SEO.tsx updates the document title, meta
  description, canonical URL, Open Graph tags, Twitter card tags, and
  optional JSON-LD structured data.
- src/public/robots.txt provides crawler guidance.
- src/public/sitemap.xml lists URLs for search engines.
- Page-level components use the shared SEO component.
- The Vite production build bundles the frontend assets.
After adding or renaming pages, review src/App.tsx, page-level
metadata, canonical URLs, and src/public/sitemap.xml. Because this is
a client-rendered SPA, verify how important pages appear to search
engines and social link previews after deployment rather than assuming
metadata is available in every crawler's initial HTML response.
Security Notes
- Keep database credentials in a private server-side file and out of
  Git.
- Do not put secrets in frontend environment variables. VITE_*
  values are public in the built JavaScript.
- Use prepared SQL statements and validate all data on the server.
- Keep ALLOWED_ORIGIN restricted to the intended website origin.
- Review rate-limiting behavior and storage permissions. The current
  contact and quote endpoints use file-based rate-limit markers, which
  may behave differently on multi-server or ephemeral hosting.
- Keep PHP, MySQL, Node.js, and frontend dependencies patched.
- Use HTTPS in production.
- Do not expose PHP errors, stack traces, configuration files, or
  database details to visitors.
- Review privacy and retention requirements for stored contact
  details, IP addresses, user-agent strings, and newsletter addresses.
- The included .htaccess rules should be reviewed and tested against
  the actual hosting environment and external resources used by the
  site.
This README documents the existing implementation; it is not a claim
that a formal security audit has been performed.
Development Workflow
Edit a page
1. Find the page component under src/pages/.
2. Update its content and layout.
3. Check route registration in src/App.tsx.
4. Verify its SEO metadata and canonical URL.
5. Run the local development server and test desktop and mobile
   layouts.
Add a blog article
1. Create the article component under src/pages/blog/.
2. Add its route in src/App.tsx.
3. Add it to the blog listing/data where appropriate, including
   src/data/blogData.ts.
4. Add the appropriate image and metadata.
5. Update the sitemap if it contains explicit page URLs.
6. Test the article route directly after deployment.
Update an API integration
1. Review the matching payload interface and function in
   src/lib/api.ts.
2. Update the relevant form component.
3. Keep the request field names and allowed values aligned with the PHP
   endpoint.
4. Test valid submissions, invalid submissions, rate limiting, and
   server/database failures.
5. Check server logs without exposing private data.
Common commands
# Install exactly the locked dependencies
npm ci

# Run the Vite development server
npm run dev

# Create a production build
npm run build
Troubleshooting
Frontend form fails to submit
- Confirm VITE_API_BASE_URL points to the API directory, not to an
  individual PHP file.
- Restart Vite after changing environment variables.
- Check the browser Network panel for the request URL, status code,
  CORS errors, and response body.
- Confirm the PHP endpoint is deployed and the server supports PHP.
- Verify that the backend database connection works.
CORS errors
- Ensure the request's browser origin exactly matches
  ALLOWED_ORIGIN.
- Check that the server responds correctly to OPTIONS preflight
  requests where applicable.
- Avoid using wildcard origins for credentialed or sensitive
  integrations.
- Confirm the API base URL uses the intended scheme and domain.
Database connection errors
- Verify the database host, name, username, and password in the
  private server configuration.
- Confirm the database user has access to the configured database.
- Confirm PHP's PDO MySQL extension is enabled.
- Check server-side logs for details; do not send database credentials
  to the browser.
Nested routes return 404 after deployment
- Verify the Apache SPA rewrite rules are active and that
  mod_rewrite is enabled.
- Ensure the rule sends frontend routes to index.html while leaving
  real files and /api/ requests untouched.
- Check the hosting provider's rules if .htaccess overrides are
  disabled.
Changes do not appear in production
- Rebuild the frontend after source or environment changes.
- Upload the latest contents of build/.
- Check browser and CDN caches.
- Remember that Vite environment values are baked into the build.
Future Improvements
Potential enhancements that are not represented as completed
features in the current codebase:
- Automated unit, integration, and end-to-end tests.
- Linting and type-check scripts in the package scripts.
- Centralized, scalable rate limiting.
- A protected admin dashboard for managing inquiries and content.
- Transactional email notifications for new submissions.
- Newsletter confirmation and unsubscribe workflows.
- Automated database migrations and backups.
- CI/CD checks for build, tests, dependency vulnerabilities, and
  deployment.
- A documented staging environment and API monitoring.
License
The repository currently does not declare an open-source license in
package.json. Unless the project owner adds a license, treat the code
and assets as proprietary and obtain permission before redistribution or
reuse.
Maintained by: BaramijX
Website: https://baramijx.com