# BaramijX Technical Project Documentation

## 1. Project Overview

**Project Name:** BaramijX Digital Consultancy Platform

**Purpose of the System:**
The BaramijX platform serves as the primary digital presence for a corporate consultancy firm. It is designed to showcase services, expertise, and case studies while facilitating client acquisition through lead generation forms and engagement tools. The system bridges the gap between potential clients and consultancy experts through a seamless, professional web experience.

**Target Users:**
*   **Corporate Clients:** Businesses seeking digital transformation, IT infrastructure, or marketing services.
*   **Consultants:** BaramijX internal team members managing inquiries and content.
*   **General Visitors:** Individuals researching industry trends via the blog or verifying company credibility.

**Business Goals:**
*   Establish brand authority in the digital consultancy space.
*   Increase lead generation through optimized "Get a Quote" and "Contact" workflows.
*   Provide a scalable foundation for future client portal capabilities.
*   Ensure high performance and SEO rankings to drive organic traffic.

**High-Level System Flow:**
1.  **Frontend:** Users interact with a responsive React application (SPA) optimized for performance and accessibility.
2.  **API Layer:** Form submissions and dynamic data requests are sent to a secure PHP API layer hosted on the same server.
3.  **Database:** Data is validated and persisted in a relational MySQL database.

---

## 2. Feature Documentation

### 2.1 Existing Features

| Feature Name | Description | User Type | Input | Output | Business Value |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Responsive Corporate UI** | Fully responsive layout using Tailwind CSS, ensuring accessibility across Desktop, Tablet, and Mobile. | Visitor | Navigation clicks, Scrolls | Visual content, Page transitions | Professional brand image, broad accessibility. |
| **Service Catalog** | Detailed pages for specific services (e.g., Web Solutions, SEO, Infrastructure). | Visitor | Select Service | Service details, Pricing models | Educates clients, filters qualified leads. |
| **Knowledge Hub (Blog)** | A CMS-ready blog section with articles on industry trends (e.g., AI, Cloud Migration). | Visitor | Read, Share | Educational content | Drives SEO traffic, establishes thought leadership. |
| **Lead Generation Forms** | "Contact Us" and "Get a Quote" forms with validation. | Visitor | Name, Email, Service Interest, Message | Success Message, DB Record, Email Notification | Critical for capturing business opportunities. |
| **SEO Optimization** | Integrated `robots.txt`, `sitemap.xml`, and semantic HTML structure. | System | Search Engine Crawling | Indexed pages | Organic visibility on search engines. |
| **Legal Compliance** | Dedicated pages for Privacy Policy, Terms of Service, and Cookie Consent management. | Visitor | Consent Action | Compliance Record | Reduces legal liability, builds trust. |

### 2.2 Future / Recommended Features

| Feature Name | Description | User Type | Input | Output | Business Value |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Client Portal** | Secure login area for clients to view project status and invoices. | Client | Credentials | Dashboard View | Improves client retention and transparency. |
| **Appointment Booking** | Integrated calendar for scheduling consultations directly. | Visitor | Date/Time Selection | Calendar Event, Email Confirmation | Streamlines sales process, reduces admin overhead. |
| **Admin Dashboard** | Internal interface to manage blog posts, view leads, and update services without code. | Admin | Content Updates | Database Updates | Reduces dependency on developers for content. |
| **Newsletter Subscription** | Automated email list management for marketing campaigns. | Visitor | Email Address | Subscription Confirmation | Nurtures leads for future conversion. |

---

## 3. User Roles & Permissions

| Role | Access Level | Actions Allowed |
| :--- | :--- | :--- |
| **Visitor** | Public | • View all public pages (Home, Services, Blog, About)<br>• Submit Contact/Quote forms<br>• Subscribe to newsletter |
| **Client (Future)** | Authenticated | • All Visitor actions<br>• Access secure Client Portal<br>• View Project Status/Documents<br>• Manage Profile |
| **Admin (Future)** | System Owner | • Full access to all modules<br>• Manage Users (Clients, Staff)<br>• CMS capabilities (Edit Blog/Services)<br>• View System Logs and Analytics |

---

## 4. Database Design Documentation

The database utilizes a normalized **MySQL** relational schema designed for data integrity and scalability.

### 4.1 Core Tables

**1. `users`**
*   **Purpose:** Stores authentication and profile details for admins and future client accounts.
*   **Fields:**
    *   `id` (INT, PK, Auto-increment)
    *   `email` (VARCHAR, Unique, Not Null)
    *   `password_hash` (VARCHAR, Not Null)
    *   `role_id` (INT, FK)
    *   `created_at` (TIMESTAMP)

**2. `roles`**
*   **Purpose:** Defines permission levels (Admin, Client, Editor).
*   **Fields:**
    *   `id` (INT, PK)
    *   `name` (VARCHAR) – e.g., 'Admin', 'Client'

**3. `contact_leads`**
*   **Purpose:** Stores submissions from the "Contact Us" and "Get a Quote" forms.
*   **Fields:**
    *   `id` (INT, PK, Auto-increment)
    *   `full_name` (VARCHAR)
    *   `email` (VARCHAR)
    *   `phone` (VARCHAR, Optional)
    *   `service_interest` (VARCHAR)
    *   `message` (TEXT)
    *   `status` (ENUM: 'New', 'Contacted', 'Closed')
    *   `submitted_at` (TIMESTAMP)

**4. `services`**
*   **Purpose:** Manages the catalog of consultancy services.
*   **Fields:**
    *   `id` (INT, PK)
    *   `title` (VARCHAR)
    *   `slug` (VARCHAR, Unique)
    *   `description` (TEXT)
    *   `is_active` (BOOLEAN)

**5. `appointments` (Future)**
*   **Purpose:** Stores booking data for consultations.
*   **Fields:**
    *   `id` (INT, PK)
    *   `lead_id` (INT, FK)
    *   `scheduled_time` (DATETIME)
    *   `status` (ENUM: 'Pending', 'Confirmed', 'Cancelled')

**6. `admin_logs`**
*   **Purpose:** Audit trail for security and troubleshooting.
*   **Fields:**
    *   `id` (INT, PK)
    *   `user_id` (INT, FK, Nullable)
    *   `action` (VARCHAR)
    *   `ip_address` (VARCHAR)
    *   `timestamp` (TIMESTAMP)

### 4.2 Relationships & Schema Design
*   **One-to-Many:** `roles` -> `users` (A role can belong to many users).
*   **One-to-Many:** `users` -> `admin_logs` (A user can generate multiple logs).
*   **Normalization:** The schema follows 3NF (Third Normal Form) to minimize redundancy. For example, user roles are separated into a reference table rather than stored as strings in the user table.

---

## 5. Backend Architecture Documentation

### 5.1 Overview
The backend follows a **RESTful API** pattern using **PHP** scripts running on an Apache/Nginx server (Hostinger environment). This decouples the frontend (React) from the data layer, allowing for independent scaling and maintenance.

### 5.2 Technology Stack
*   **Server Side:** PHP 8.1+ (Strict typing enabled)
*   **Database:** MySQL 8.0
*   **Web Server:** Apache / Nginx
*   **API Format:** JSON

### 5.3 Request-Response Lifecycle
1.  **Request:** React Frontend sends an asynchronous `POST` request (via `fetch` or `axios`) to `https://baramijx.com/api/endpoint.php`.
2.  **Routing & Security:** The PHP script initializes, sets CORS headers, and validates the API key/Origin.
3.  **Validation:** Input data is sanitized and validated against strict rules (e.g., email format, max length).
4.  **Processing:** Valid data is processed (e.g., inserted into MySQL via PDO).
5.  **Response:** The server returns a JSON object with a status code (`200 OK`, `400 Bad Request`, `500 Server Error`).

### 5.4 Folder Structure (Recommended)
```
/public_html
  /api
    /config
      db.php          # Database connection (PDO)
      cors.php        # CORS headers configuration
    /v1
      submit_lead.php # Handles contact forms
      get_services.php
      auth_login.php
  /assets             # Static assets
  /index.html         # React Entry point
```

---

## 6. API Structure (Conceptual)

### 6.1 Submit Contact Lead
*   **Endpoint:** `/api/v1/submit_lead.php`
*   **Method:** `POST`
*   **Purpose:** Captures lead data from frontend forms.
*   **Request Body:**
    ```json
    {
      "fullName": "John Doe",
      "email": "john@example.com",
      "service": "Web Development",
      "message": "I need a quote."
    }
    ```
*   **Response (Success):**
    ```json
    {
      "success": true,
      "message": "Inquiry received successfully.",
      "leadId": 1024
    }
    ```

### 6.2 Fetch Services (Future)
*   **Endpoint:** `/api/v1/get_services.php`
*   **Method:** `GET`
*   **Purpose:** Dynamically load service offerings.

### 6.3 Admin Login (Future)
*   **Endpoint:** `/api/v1/auth_login.php`
*   **Method:** `POST`
*   **Purpose:** Authenticate admin users.

---

## 7. Security & Data Handling

### 7.1 Authentication & Authorization
*   **Backend:** PHP sessions or JWT (JSON Web Tokens) for future authentication.
*   **Database:** Passwords must be hashed using `PASSWORD_BCRYPT` or `Argon2`.
*   **API Security:** CORS policies restricted to the production domain (`baramijx.com`).

### 7.2 Input Validation & Sanitization
*   **Frontend:** React Hook Form / Zod for immediate user feedback.
*   **Backend:** Server-side validation is mandatory. All SQL queries use **Prepared Statements (PDO)** to prevent SQL Injection.
*   **XSS Protection:** Output encoding applied when displaying user-generated content.

### 7.3 Data Protection
*   **HTTPS:** Enforced via SSL certificate on Hostinger.
*   **Sensitive Data:** Database credentials stored in a protected `db_config.php` file outside the public web root where possible.

---

## 8. Deployment Overview

### 8.1 Environments
*   **Development:** Local Node.js environment for React development.
*   **Staging:** Subdomain (e.g., `dev.baramijx.com`) for testing integration.
*   **Production:** Live Hostinger server serving the optimized build.

### 8.2 Deployment Flow
1.  **Build:** Run `npm run build` in the React project to generate the `/dist` folder containing static assets (HTML, CSS, JS).
2.  **Backend Config:** Ensure `db_config.php` on the server points to the live MySQL database.
3.  **Upload:**
    *   Upload contents of `/dist` to `public_html/`.
    *   Upload `/api` folder to `public_html/api`.
4.  **Verification:** Test form submissions and navigation on the live URL.

---

## 9. Conclusion

The BaramijX system is designed as a modern, high-performance digital consultancy platform. By leveraging a decoupled architecture (React Frontend + PHP Backend), the system achieves excellent load times and SEO performance while maintaining the flexibility to scale.

**Key Strengths:**
*   **Scalability:** The database and API structure support adding new modules (Client Portal, Booking) without refactoring the core system.
*   **Security:** Multi-layer validation and industry-standard encryption practices ensure data integrity.
*   **Maintainability:** Clear separation of concerns allows frontend designers and backend developers to work in parallel.

This documentation serves as the blueprint for the current deployment and a roadmap for future development phases.
