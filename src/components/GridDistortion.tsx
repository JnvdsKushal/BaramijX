import React, { useRef, useEffect, useState } from 'react';
import THREE from '../lib/three';

interface GridDistortionProps {
  grid?: number;
  mouse?: number;
  strength?: number;
  relaxation?: number;
  imageSrc: string;
  className?: string;
}

const vertexShader = `
uniform vec2 uMouse;
uniform vec2 uSize;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uTexture;
uniform sampler2D uDataTexture;
uniform vec2 uMouse;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  gl_FragColor = texture2D(uTexture, uv - 0.02 * offset.rg);
}
`;

const GridDistortion: React.FC<GridDistortionProps> = ({
  grid = 15,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  imageSrc,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationFrameRef = useRef<number>(0);


  useEffect(() => {
    if (!containerRef.current || !THREE) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    setDimensions({ width, height });

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Data texture for flow field
    const size = grid;
    const data = new Float32Array(4 * size * size);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const index = (i + j * size) * 4;
        data[index] = 0;
        data[index + 1] = 0;
        data[index + 2] = 0;
        data[index + 3] = 1;
      }
    }

    const dataTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    dataTexture.needsUpdate = true;

    // Load image texture
    const textureLoader = new THREE.TextureLoader();
    const imageTexture = textureLoader.load(imageSrc);

    // Material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: imageTexture },
        uDataTexture: { value: dataTexture },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uSize: { value: new THREE.Vector2(width, height) },
      },
      vertexShader,
      fragmentShader,
    });

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse interaction
    const mousePos = { x: 0.5, y: 0.5 };
    const prevMousePos = { x: 0.5, y: 0.5 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.x = (e.clientX - rect.left) / width;
      mousePos.y = 1.0 - (e.clientY - rect.top) / height;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Update data texture based on mouse movement
      const data = dataTexture.image.data;

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const index = (i + j * size) * 4;

          const x = i / (size - 1);
          const y = j / (size - 1);

          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const mouseDx = mousePos.x - prevMousePos.x;
          const mouseDy = mousePos.y - prevMousePos.y;

          if (dist < mouse) {
            const force = (mouse - dist) / mouse;
            data[index] += mouseDx * force * strength;
            data[index + 1] += mouseDy * force * strength;
          }

          // Relaxation
          data[index] *= relaxation;
          data[index + 1] *= relaxation;
        }
      }

      prevMousePos.x = mousePos.x;
      prevMousePos.y = mousePos.y;

      dataTexture.needsUpdate = true;
      material.uniforms.uMouse.value.set(mousePos.x, mousePos.y);

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const newWidth = container.offsetWidth;
      const newHeight = container.offsetHeight;
      setDimensions({ width: newWidth, height: newHeight });

      renderer.setSize(newWidth, newHeight);
      material.uniforms.uSize.value.set(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      dataTexture.dispose();
      imageTexture.dispose();
      renderer.dispose();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [grid, mouse, strength, relaxation, imageSrc]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    />
  );
};

export default GridDistortion;