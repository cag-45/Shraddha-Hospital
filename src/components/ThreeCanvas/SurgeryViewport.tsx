import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sun, Trees, RotateCw, Sparkles, CheckCircle2 } from 'lucide-react';

interface SpatialViewportProps {
  className?: string;
}

export const SurgeryViewport: React.FC<SpatialViewportProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<'suite' | 'courtyard'>('suite');
  const [sunlightActive, setSunlightActive] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 460;

    // 1. Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5EFE6); // Soft warm linen background

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(4.5, 3.2, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 2. Warm Natural Lighting (Circadian Daylight)
    const ambientLight = new THREE.AmbientLight(0xFFF7EC, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFE8CA, 3.2);
    sunLight.position.set(6, 7, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const skyFill = new THREE.DirectionalLight(0xD8E8F5, 1.2);
    skyFill.position.set(-5, 4, -3);
    scene.add(skyFill);

    // 3. Architectural Room Model Group
    const roomGroup = new THREE.Group();
    scene.add(roomGroup);

    // Oak Wood Floor
    const floorGeo = new THREE.BoxGeometry(4.2, 0.15, 4.2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xC8B89F,
      roughness: 0.4,
      metalness: 0.05,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.075;
    floor.receiveShadow = true;
    roomGroup.add(floor);

    // Back Wall (Warm White Plaster)
    const backWallGeo = new THREE.BoxGeometry(4.2, 2.8, 0.15);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xFAF6EF,
      roughness: 0.8,
    });
    const backWall = new THREE.Mesh(backWallGeo, wallMat);
    backWall.position.set(0, 1.4, -2.1);
    backWall.receiveShadow = true;
    roomGroup.add(backWall);

    // Side Wall with Large Panoramic Window
    const leftWallGeo = new THREE.BoxGeometry(0.15, 2.8, 1.2);
    const leftWall = new THREE.Mesh(leftWallGeo, wallMat);
    leftWall.position.set(-2.1, 1.4, -1.5);
    roomGroup.add(leftWall);

    const leftWallFront = new THREE.Mesh(leftWallGeo, wallMat);
    leftWallFront.position.set(-2.1, 1.4, 1.5);
    roomGroup.add(leftWallFront);

    // Window Glass Frame
    const windowFrameGeo = new THREE.BoxGeometry(0.08, 2.4, 1.8);
    const windowFrameMat = new THREE.MeshStandardMaterial({
      color: 0x4A6B5B, // Forest Sage Frame
      roughness: 0.3,
    });
    const windowFrame = new THREE.Mesh(windowFrameGeo, windowFrameMat);
    windowFrame.position.set(-2.1, 1.4, 0);
    roomGroup.add(windowFrame);

    // Translucent Window Glass Pane
    const glassGeo = new THREE.PlaneGeometry(1.7, 2.3);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xEAF3F7,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      transmission: 0.9,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.rotation.y = Math.PI / 2;
    glass.position.set(-2.05, 1.4, 0);
    roomGroup.add(glass);

    // Modern Ergonomic Recovery Bed / Lounger
    const bedBaseGeo = new THREE.BoxGeometry(2.1, 0.45, 1.1);
    const bedBaseMat = new THREE.MeshStandardMaterial({
      color: 0x5C4638, // Rich walnut wood
      roughness: 0.6,
    });
    const bedBase = new THREE.Mesh(bedBaseGeo, bedBaseMat);
    bedBase.position.set(0.3, 0.225, 0);
    bedBase.castShadow = true;
    bedBase.receiveShadow = true;
    roomGroup.add(bedBase);

    // Mattress & White Duvet
    const mattressGeo = new THREE.BoxGeometry(2.0, 0.35, 1.05);
    const mattressMat = new THREE.MeshStandardMaterial({
      color: 0xFCFAF6,
      roughness: 0.9,
    });
    const mattress = new THREE.Mesh(mattressGeo, mattressMat);
    mattress.position.set(0.3, 0.55, 0);
    mattress.castShadow = true;
    roomGroup.add(mattress);

    // Terracotta Throw Blanket
    const throwGeo = new THREE.BoxGeometry(0.7, 0.36, 1.06);
    const throwMat = new THREE.MeshStandardMaterial({
      color: 0xD97757, // Warm Terracotta Clay
      roughness: 0.8,
    });
    const throwBlanket = new THREE.Mesh(throwGeo, throwMat);
    throwBlanket.position.set(-0.3, 0.56, 0);
    roomGroup.add(throwBlanket);

    // Bed Pillow
    const pillowGeo = new THREE.BoxGeometry(0.4, 0.15, 0.8);
    const pillowMat = new THREE.MeshStandardMaterial({
      color: 0xF3ECE1,
      roughness: 0.9,
    });
    const pillow = new THREE.Mesh(pillowGeo, pillowMat);
    pillow.position.set(1.0, 0.75, 0);
    pillow.rotation.z = -0.15;
    roomGroup.add(pillow);

    // Bedside Table
    const tableGeo = new THREE.BoxGeometry(0.6, 0.65, 0.6);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0xFAF6EF,
      roughness: 0.5,
    });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.set(1.0, 0.325, -1.2);
    table.castShadow = true;
    roomGroup.add(table);

    // Indoor Healing Plant (Ceramic Planter & Green Foliage)
    const potGeo = new THREE.CylinderGeometry(0.22, 0.16, 0.45, 24);
    const potMat = new THREE.MeshStandardMaterial({
      color: 0xD97757, // Terracotta pot
      roughness: 0.5,
    });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.set(-1.4, 0.225, -1.4);
    pot.castShadow = true;
    roomGroup.add(pot);

    const plantGroup = new THREE.Group();
    plantGroup.position.set(-1.4, 0.45, -1.4);
    roomGroup.add(plantGroup);

    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x2A5940, // Deep botanical green
      roughness: 0.3,
    });

    for (let i = 0; i < 7; i++) {
      const leafGeo = new THREE.ConeGeometry(0.14, 0.6, 6);
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      const angle = (i / 7) * Math.PI * 2;
      leaf.position.set(Math.cos(angle) * 0.1, 0.25, Math.sin(angle) * 0.1);
      leaf.rotation.z = Math.cos(angle) * 0.4;
      leaf.rotation.x = Math.sin(angle) * 0.4;
      leaf.castShadow = true;
      plantGroup.add(leaf);
    }

    // Soft Ambient Floating Golden Dust Particles (Healing Qi)
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 3.5;
      particlePositions[i + 1] = Math.random() * 2.5 + 0.2;
      particlePositions[i + 2] = (Math.random() - 0.5) * 3.5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xD4A373,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    roomGroup.add(particles);

    // 4. Mouse Interactive Camera Orbit
    let targetCameraX = 4.5;
    let targetCameraY = 3.2;
    let targetCameraZ = 5.5;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetCameraX = 4.5 + x * 1.5;
      targetCameraY = 3.2 - y * 1.0;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation
      camera.position.x += (targetCameraX - camera.position.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.position.z += (targetCameraZ - camera.position.z) * 0.05;
      camera.lookAt(0.1, 0.9, 0);

      // Subtle plant sway
      plantGroup.rotation.y = Math.sin(elapsed * 1.2) * 0.05;
      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      backWallGeo.dispose();
      wallMat.dispose();
      bedBaseGeo.dispose();
      bedBaseMat.dispose();
      mattressGeo.dispose();
      mattressMat.dispose();
      throwGeo.dispose();
      throwMat.dispose();
      potGeo.dispose();
      potMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [activeView]);

  return (
    <div
      className={`relative w-full rounded-3xl bg-[#F5EFE6] border border-[#E5DFD3] overflow-hidden shadow-haven-lg ${className}`}
    >
      {/* Top Architectural Badge */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E0D8CB] text-xs text-[#142820] font-medium shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#2A5940] animate-pulse"></span>
          <span className="tracking-wide">CIRCADIAN DAYLIGHT SUITE • 3D SPATIAL TOUR</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#526258] bg-white/80 px-2.5 py-1 rounded-full border border-[#E0D8CB]">
          <RotateCw className="w-3.5 h-3.5 text-[#D97757]" />
          <span>Move Cursor to Rotate</span>
        </div>
      </div>

      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-[380px] sm:h-[440px] cursor-grab active:cursor-grabbing" />

      {/* Bottom Floating Spatial Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white/95 border border-[#E0D8CB] backdrop-blur-md shadow-haven-md">
        <div>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-[#D97757]" />
            <h4 className="text-sm font-bold text-[#142820]">Natural Light &amp; Quiet Healing</h4>
          </div>
          <p className="text-xs text-[#526258] mt-0.5">
            Private day rooms equipped with acoustic sound damping and circadian circadian daylight infusion.
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={() => setActiveView('suite')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeView === 'suite'
                ? 'bg-[#142820] text-white shadow-sm'
                : 'bg-[#F5EFE6] text-[#142820] hover:bg-[#EAE2D5]'
            }`}
          >
            Private Suite
          </button>
          <button
            onClick={() => setActiveView('courtyard')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeView === 'courtyard'
                ? 'bg-[#142820] text-white shadow-sm'
                : 'bg-[#F5EFE6] text-[#142820] hover:bg-[#EAE2D5]'
            }`}
          >
            Zen Garden
          </button>
        </div>
      </div>
    </div>
  );
};
