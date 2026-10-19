// Centralized API client for BaramijX backend
// VITE_API_BASE_URL is set in .env.production → https://baramijx.com/api

const API_BASE = (import.meta.env.VITE_API_BASE_URL as string) ?? 'https://baramijx.com/api';



// ── Shared response shape ────────────────────────────────────
export interface ApiResponse {
    success: boolean;
    message: string;
}

// ── Internal fetch helper ────────────────────────────────────
async function post<T>(endpoint: string, body: T): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    // 422 (Unprocessable Entity) is a validation error — still parse JSON
    if (!response.ok && response.status !== 422) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();
    return data;
}

// ── Contact form ─────────────────────────────────────────────
export interface ContactPayload {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    referral?: string;
    website?: string; // honeypot — always send as empty string
}

export function submitContact(data: Omit<ContactPayload, 'website'>): Promise<ApiResponse> {
    return post<ContactPayload>('submit_contact.php', { ...data, website: '' });
}

// ── Quote request form ───────────────────────────────────────
export interface QuotePayload {
    name: string;
    email: string;
    phone: string;
    company: string;
    projectName: string;
    serviceCategory: string;
    description: string;
    budgetRange: string;
    timeline: string;
    additionalInfo?: string;
    website?: string; // honeypot
}

export function submitQuote(data: Omit<QuotePayload, 'website'>): Promise<ApiResponse> {
    return post<QuotePayload>('submit_quote.php', { ...data, website: '' });
}

// ── Newsletter subscription ──────────────────────────────────
export interface NewsletterPayload {
    email: string;
    website?: string; // honeypot
}

export function subscribeNewsletter(email: string): Promise<ApiResponse> {
    return post<NewsletterPayload>('subscribe_newsletter.php', { email, website: '' });
}
