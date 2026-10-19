// Global TypeScript declarations for BaramijX
// Fixes TypeScript errors for modules that Vite resolves but TS doesn't know about

/// <reference types="vite/client" />

// Allow importing .tsx extensions directly (used in main.tsx)
declare module '*.tsx' {
    import React from 'react';
    const Component: React.ComponentType<unknown>;
    export default Component;
}

// Allow importing CSS files
declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}
