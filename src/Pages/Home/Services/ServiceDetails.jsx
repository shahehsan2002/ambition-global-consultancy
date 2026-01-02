import { useParams, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Float, Text, ContactShadows, PresentationControls } from "@react-three/drei";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Service3DHeader = ({ title }) => {
    return (
        <div className="h-[40vh] w-full bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <PresentationControls
                  global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                    <group position={[0, 0.5, 0]}>
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                             <Text
                                fontSize={1.5}
                                color="#6366f1"
                                anchorX="center"
                                anchorY="middle"
                                outlineWidth={0.02}
                                outlineColor="#ffffff"
                            >
                                {title}
                            </Text>
                             <Text
                                position={[0, -1.2, 0]}
                                fontSize={0.5}
                                color="#94a3b8"
                                anchorX="center"
                                anchorY="middle"
                            >
                                Premium Service
                            </Text>
                        </Float>
                    </group>
                </PresentationControls>
                <ContactShadows position={[0, -1.4, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
            </Canvas>
        </div>
    );
};

const ServiceDetails = () => {
    const { id } = useParams();
    
    // In a real app, fetch data based on ID. For now, we mock.
    const serviceData = {
        title: id ? id.replace(/-/g, " ") : "Service Details",
        description: "We provide top-tier consultancy and support for this requirement. Our team of experts will guide you through every step of the process, ensuring a seamless and successful experience.",
        features: [
            "Dedicated Support Manager",
            "24/7 Assistance",
            "Document Verification",
            "Fast-track Processing"
        ]
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Service3DHeader title={serviceData.title.toUpperCase()} />
            
            <div className="max-w-4xl mx-auto px-6 py-12 -mt-10 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
                    <FaArrowLeft /> Back to Home
                </Link>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-slate-800"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white capitalize font-serif">
                        {serviceData.title}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                        {serviceData.description}
                    </p>

                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">What We Offer</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {serviceData.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center">
                        <h4 className="text-lg font-bold text-primary mb-2">Ready to get started?</h4>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">Book a free consultation with our experts today.</p>
                        <button className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-colors shadow-lg shadow-primary/30">
                            Book Consultation
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetails;
