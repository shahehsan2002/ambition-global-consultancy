import { useInView } from "react-intersection-observer";
import { FaPlane, FaGraduationCap, FaPassport, FaBriefcase, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      _id: "1",
      service_name: "Employee Travel Services",
      icon: <FaPlane />,
      short_description: "Corporate travel corporate solutions.",
      full_description:
        "Our Employee Travel Services cater exclusively to the corporate world, providing comprehensive solutions for all business-related travel needs. We ensure convenience, cost-effectiveness, and comfort.",
    },
    {
      _id: "2",
      service_name: "Student Consultancy",
      icon: <FaGraduationCap />,
      short_description: "Expert guidance for studying abroad.",
      full_description:
        "Our Student Consultancy services guide aspiring students through the entire process of studying abroad, from choosing courses to navigating applications.",
    },
    {
      _id: "3",
      service_name: "Student Visa Services",
      icon: <FaPassport />,
      short_description: "Visa services for students.",
      full_description:
        "We streamline the student visa process, providing comprehensive support and guidance throughout to ensure a smooth journey.",
    },
    {
      _id: "4",
      service_name: "Work Permit Visa Services",
      icon: <FaBriefcase />,
      short_description: "Visa services for work permits.",
      full_description:
        "For individuals seeking employment abroad, we simplify the process of obtaining necessary work permits and navigating immigration regulations.",
    },
    {
      _id: "5",
      service_name: "Visit Visa Services",
      icon: <FaMapMarkerAlt />,
      short_description: "Visas for tourism and family visits.",
      full_description:
        "We simplify the visa application process for tourism or family visits, offering guidance on documentation and procedures.",
    },
    {
      _id: "6",
      service_name: "Air Ticket Booking",
      icon: <FaTicketAlt />,
      short_description: "Effortless air ticket bookings.",
      full_description:
        "Our services cover domestic and international travel, offering a seamless booking experience with competitive prices.",
    },
  ];

  return (
    <div className="py-20 px-5 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-slate-800 dark:text-white font-serif">
            Our Premium <span className="text-primary">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service._id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-8 bg-white dark:bg-slate-800 border-l-4 border-transparent hover:border-primary transition-all duration-300 ease-in-out group ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col h-full text-left">
        <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
            {service.service_name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
            {service.full_description}
        </p>
        <span className="text-primary text-sm font-semibold tracking-wide uppercase group-hover:underline underline-offset-4">
            Learn More
        </span>
      </div>
    </div>
  );
};

export default Services;
