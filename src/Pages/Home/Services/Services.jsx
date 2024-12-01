
import { useInView } from "react-intersection-observer"; // For scroll animations

const Services = () => {
  const services = [
    {
      _id: "1",
      service_name: "Employee Travel Services",
      icon: "airplane",
      short_description: "Corporate travel solutions for businesses.",
      full_description:
        "Our Employee Travel Services cater exclusively to the corporate world, providing comprehensive solutions for all business-related travel needs. We understand the intricacies of corporate travel, offering tailored services for executive trips, team-building excursions, seminars, and conferences. From arranging flights and accommodations to coordinating ground transportation, our services ensure convenience, cost-effectiveness, and comfort.",
    },
    {
      _id: "2",
      service_name: "Student Consultancy",
      icon: "graduation-cap",
      short_description: "Expert guidance for studying abroad.",
      full_description:
        "Our Student Consultancy services are designed to guide aspiring students through the entire process of studying abroad. We offer personalized consultations, assisting students in choosing suitable courses, selecting universities, and navigating the intricacies of the application process. We equip students with the necessary information and resources to make informed decisions about their academic pursuits abroad.",
    },
    {
      _id: "3",
      service_name: "Student Visa Services",
      icon: "passport",
      short_description: "Visa services for students.",
      full_description:
        "Navigating the complexities of obtaining a student visa is a crucial step for international students. Our Student Visa Services streamline this process, providing comprehensive support and guidance throughout. We assist in preparing visa applications, ensuring they meet all requirements and documentation standards. With our support, students can confidently embark on their educational journey abroad.",
    },
    {
      _id: "4",
      service_name: "Work Permit Visa Services",
      icon: "briefcase",
      short_description: "Visa services for work permits.",
      full_description:
        "For individuals seeking employment opportunities abroad, our Work Permit Visa Services simplify the process of obtaining necessary work permits. We assist in understanding visa requirements, preparing the required documentation, and navigating the application process. Our consultants offer insights into specific work visa categories, employer sponsorship, and compliance with immigration regulations. We aim to streamline the process, ensuring a smooth transition for individuals pursuing career opportunities overseas.",
    },
    {
      _id: "5",
      service_name: "Visit Visa Services",
      icon: "map-marker-alt",
      short_description: "Visas for tourism and family visits.",
      full_description:
        "Our Visit Visa Services cater to individuals seeking visas for tourism, family visits, or leisure travel. We simplify the visa application process, offering guidance on required documentation, eligibility criteria, and embassy procedures. Whether it's planning a holiday, visiting family or friends, or exploring new destinations, our services provide a hassle-free visa application experience.",
    },
    {
      _id: "6",
      service_name: "Air Ticket Booking",
      icon: "ticket-alt",
      short_description: "Effortless air ticket bookings.",
      full_description:
        "Our Air Ticket Booking services cover both domestic and international travel, offering a seamless booking experience. We provide access to a wide range of flight options, competitive prices, and convenient reservation processes. Our platform simplifies the flight booking process, allowing travelers to compare options, select preferred seats, and make secure reservations.",
    },
  ];

  return (
    <div className="py-10 px-5">
      <h2 className="text-center text-4xl font-bold mb-16">Our Services</h2>
      <div className="space-y-12">
        {services.map((service) => (
          <Service
            key={service._id}
            service_name={service.service_name}
            icon={service.icon}
            short_description={service.short_description}
            full_description={service.full_description}
          />
        ))}
      </div>
    </div>
  );
};

const Service = ({
  service_name,
  icon,
  short_description,
  full_description,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger the animation when 30% of the component is in view
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        inView
          ? "opacity-100 scale-100 translate-y-0 rotate-0"
          : "opacity-0 scale-90 translate-y-10 rotate-5"
      }`}
    >
      <div className="flex items-start gap-8 max-w-4xl mx-auto group">
        <div className="flex justify-center items-center w-20 h-20 bg-gray-500 text-white rounded-full shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl">
          <Icon name={icon} />
        </div>
        <div className="space-y-4 group-hover:text-blue-500 transition-all duration-300">
          <h3 className="text-2xl font-semibold">{service_name}</h3>
          <p className="text-lg">{short_description}</p>
          <p>{full_description}</p>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ name }) => {
  const icons = {
    airplane: (
      <svg
        className="w-10 h-10 transition-transform duration-300 transform group-hover:scale-125"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7 3V7l-7 3V5L5 9v6L12 5v9z" />
      </svg>
    ),
    "graduation-cap": (
      <svg
        className="w-10 h-10 transition-transform duration-300 transform group-hover:scale-125"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3L2 7l10 4 10-4-10-4z" />
        <path d="M12 14l-10 4v6l10-4 10 4v-6l-10-4z" />
      </svg>
    ),
    passport: (
      <svg
        className="w-10 h-10 transition-transform duration-300 transform group-hover:scale-125"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 0H5c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V2c0-1.104-.896-2-2-2zm-7 16H8v-2h4v2zm5-4h-9V8h9v4z" />
      </svg>
    ),
    briefcase: (
      <svg
        className="w-10 h-10 transition-transform duration-300 transform group-hover:scale-125"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 4h-4V2h-2v2h-4V2H9v2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM12 2h4v2h-4V2zm-4 0h4v2H8V2z" />
      </svg>
    ),
    "map-marker-alt": (
      <svg
        className="w-10 h-10 transition-transform duration-300 transform group-hover:scale-125"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C8.5 2 6 4.5 6 7c0 3 6 10 6 10s6-7 6-10c0-2.5-2.5-5-6-5zm0 8c-1.4 0-2.5-1.1-2.5-2.5S10.6 5 12 5s2.5 1.1 2.5 2.5S13.4 10 12 10z" />
      </svg>
    ),
    "ticket-alt": (
      <svg
        className="w-10 h-10 transition-transform duration-300 transform group-hover:scale-125"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 3H6c-1.1 0-1.99.9-1.99 2L4 19c0 1.1.89 2 1.99 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 12h-2v-2h2v2zm0-4h-2V7h2v4z" />
      </svg>
    ),
  };

  return icons[name];
};

export default Services;
