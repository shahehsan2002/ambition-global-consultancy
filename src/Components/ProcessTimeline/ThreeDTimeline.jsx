import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, useScroll, ScrollControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const W = 10;
const H = 10;

const Timeline3D = ({ steps }) => {
    return (
        <div className="h-[800px] w-full bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <ScrollControls pages={3} damping={0.2}>
                    <TimelineScene steps={steps} />
                </ScrollControls>
            </Canvas>
        </div>
    );
};

const TimelineScene = ({ steps }) => {
    const scroll = useScroll();
    const lineRef = useRef();
    
    // Create a curved path
    const curve = useMemo(() => {
        const points = [];
        for (let i = 0; i < steps.length; i++) {
            points.push(new THREE.Vector3((i % 2 === 0 ? -1 : 1) * 4, -i * 8, 0));
        }
        return new THREE.CatmullRomCurve3(points);
    }, [steps]);

    const linePoints = useMemo(() => curve.getPoints(50), [curve]);

    useFrame((state) => {
        // Scroll along the y-axis
        state.camera.position.y = -scroll.offset * (steps.length * 8) + 5;
    });

    return (
        <group position={[0, 5, 0]}>
            <Line points={linePoints} color="orange" lineWidth={3} dashed={false} />
            
            {steps.map((step, index) => (
                <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <group position={[(index % 2 === 0 ? -1 : 1) * 4, -index * 8, 0]}>
                        <mesh>
                             <sphereGeometry args={[1, 32, 32]} />
                             <meshStandardMaterial color={index % 2 === 0 ? "#6366f1" : "#ec4899"} />
                        </mesh>
                         <Text
                            position={[index % 2 === 0 ? 2.5 : -2.5, 0, 0]}
                            fontSize={0.8}
                            color="#334155" // Slate-700
                            anchorX={index % 2 === 0 ? "left" : "right"}
                            anchorY="middle"
                            maxWidth={5}
                        >
                            {step.title}
                        </Text>
                         <Text
                            position={[index % 2 === 0 ? 2.5 : -2.5, -1, 0]}
                            fontSize={0.4}
                            color="#64748b" // Slate-500
                            anchorX={index % 2 === 0 ? "left" : "right"}
                            anchorY="top"
                            maxWidth={5}
                        >
                            {step.description}
                        </Text>
                    </group>
                </Float>
            ))}
        </group>
    );
};

export default Timeline3D;
