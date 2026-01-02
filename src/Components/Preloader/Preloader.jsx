
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Tetrahedron, MeshDistortMaterial, Float } from '@react-three/drei';

const SpinningShape = () => {
    const ref = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = t;
        ref.current.rotation.y = t / 2;
    });

    return (
        <Float speed={5} rotationIntensity={2} floatIntensity={1}>
            <Tetrahedron args={[1.5]} ref={ref}>
                 <MeshDistortMaterial
                    color="#3b82f6"
                    speed={2}
                    distort={0.4}
                    transparent
                    opacity={0.8}
                    wireframe
                />
            </Tetrahedron>
        </Float>
    );
};

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="relative text-center w-full h-full flex flex-col items-center justify-center">
                 {/* 3D Scene */}
                <div className="w-64 h-64">
                    <Canvas camera={{ position: [0, 0, 4] }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <SpinningShape />
                    </Canvas>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="mt-4 text-3xl font-bold font-serif text-slate-800 dark:text-white tracking-widest uppercase">
                        Ambition
                    </h2>
                    <span className="text-primary text-sm font-sans font-medium tracking-[0.4em] block mt-2">GLOBAL CONSULTANCY</span>
                    
                    {/* Loading Bar */}
                    <div className="w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mt-6 overflow-hidden">
                        <motion.div 
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Preloader;

