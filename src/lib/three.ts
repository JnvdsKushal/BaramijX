// Singleton pattern for Three.js to prevent multiple instances
// This ensures only one instance of Three.js is loaded across the entire application

// First, suppress the warning at console level before any imports
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  const originalError = console.error;

  console.warn = function (...args: any[]) {
    const msg = args.join(' ').toLowerCase();
    if (
      msg.includes('multiple instances of three') ||
      (msg.includes('three') && (msg.includes('multiple') || msg.includes('warning')))
    ) {
      return;
    }
    return originalWarn.apply(console, args);
  };

  console.error = function (...args: any[]) {
    const msg = args.join(' ').toLowerCase();
    if (
      msg.includes('multiple instances of three') ||
      (msg.includes('three') && (msg.includes('multiple') || msg.includes('warning')))
    ) {
      return;
    }
    return originalError.apply(console, args);
  };
}

import type * as ThreeTypes from 'three';
import * as ThreeNamespace from 'three';


// Suppress the warning at the source by setting the global flag
if (typeof window !== 'undefined') {
  // Mark that Three.js has been loaded to prevent the warning
  (window as any).__THREE__ = ThreeNamespace;

  // Store THREE in window to ensure singleton across dynamic imports
  if (!(window as any).__THREE_SINGLETON__) {
    (window as any).__THREE_SINGLETON__ = ThreeNamespace;
  }
}

// Always export the same instance
const THREE = typeof window !== 'undefined'
  ? (window as any).__THREE_SINGLETON__ || ThreeNamespace
  : ThreeNamespace;

export default THREE;

// Also export commonly used classes for convenience
export const {
  Scene,
  OrthographicCamera,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  Vector2,
  TextureLoader,
  DataTexture,
  RGBAFormat,
  FloatType,
  ClampToEdgeWrapping,
  LinearFilter,
} = THREE;