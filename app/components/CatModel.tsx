"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { SoftShadows } from "../lib/softShadow";

interface CatProps {
    isDragging: React.MutableRefObject<boolean>;
    targetRotation: React.MutableRefObject<{ x: number; y: number }>;
}

const Cat = ({ isDragging, targetRotation }: CatProps) => {
    const { scene } = useGLTF("/cat/scene.gltf");
    const groupRef = useRef<THREE.Group>(null);

    useEffect(() => {
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                child.castShadow = true;
            }
        });
    }, [scene]);

    useFrame((_, delta) => {
        if (!groupRef.current) return;

        if (!isDragging.current) {
            targetRotation.current.y -= delta * 0.5;
        }

        // Smooth interpolation
        const dampingFactor = 0.1;
        groupRef.current.rotation.x +=
            (targetRotation.current.x - groupRef.current.rotation.x) * dampingFactor;
        groupRef.current.rotation.y +=
            (targetRotation.current.y - groupRef.current.rotation.y) * dampingFactor;
    });

    return (
        <group ref={groupRef}>
            <primitive object={scene} scale={0.6} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[500, 500]} />
                <shadowMaterial transparent opacity={0.3} />
            </mesh>
        </group>
    );
};

interface CatModelProps {
    className?: string;
}

const CatModel = ({ className = "" }: CatModelProps) => {
    const isDragging = useRef(false);
    const previousMousePosition = useRef({ x: 0, y: 0 });
    const targetRotation = useRef({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        setDragging(true);
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;

        const deltaX = e.clientX - previousMousePosition.current.x;
        const deltaY = e.clientY - previousMousePosition.current.y;

        targetRotation.current.y += deltaX * 0.008;
        targetRotation.current.x += deltaY * 0.008;

        previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
        isDragging.current = false;
        setDragging(false);
    };

    return (
        <div
            className={`relative z-10 h-full w-full ${className}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{
                touchAction: "none",
                cursor: dragging ? "grabbing" : "grab",
            }}
        >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 1.5, 12], fov: 40 }} shadows>
                <SoftShadows size={40} samples={16} focus={0.5} />

                <ambientLight intensity={0.8} />
                <directionalLight
                    position={[-15, 20, 30]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={256}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                    shadow-radius={6}
                    shadow-blurSamples={25}
                />
                <directionalLight position={[-10, 5, -10]} intensity={0.4} />
                <Suspense fallback={null}>
                    <group position={[0, -1, 0]}>
                        <Cat isDragging={isDragging} targetRotation={targetRotation} />
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
};

useGLTF.preload("/cat/scene.gltf");

export default CatModel;
