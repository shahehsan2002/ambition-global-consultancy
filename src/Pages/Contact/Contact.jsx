// // import { useState } from 'react';
// // import Swal from 'sweetalert2';

// // const ContactForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: ''
// //   });

// //   const { name, email, message } = formData;

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         console.log('Server response:', data);
// //         Swal.fire('Success', 'Message sent successfully!', 'success');
// //         setFormData({ name: '', email: '', message: '' });
// //       } else {
// //         throw new Error('Message failed to send.');
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //       Swal.fire('Error', 'Message failed to send.', 'error');
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center">
// //       <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

// //       <div className="border rounded-md p-4 w-full md:w-3/4 lg:w-1/2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             name="name"
// //             value={name}
// //             onChange={handleChange}
// //             className="border rounded-md py-2 px-4 w-full"
// //             required
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             name="email"
// //             value={email}
// //             onChange={handleChange}
// //             className="border rounded-md py-2 px-4 w-full"
// //             required
// //           />
// //           <div className="border rounded-md p-2">
// //             <textarea
// //               placeholder="Message"
// //               name="message"
// //               value={message}
// //               onChange={handleChange}
// //               className="w-full resize-none focus:outline-none"
// //               rows="4"
// //               required
// //             ></textarea>
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// //           >
// //             Send Message
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactForm;


// import { useState } from 'react';
// import Swal from 'sweetalert2';
// import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; // Import necessary icons

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const { name, email, message } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Server response:', data);
//         Swal.fire('Success', 'Message sent successfully!', 'success');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         throw new Error('Message failed to send.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Swal.fire('Error', 'Message failed to send.', 'error');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

//       <div className="border rounded-md p-4 w-full md:w-3/4 lg:w-1/2 mb-8">
//         <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             className="border rounded-md py-2 px-4 w-full"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             className="border rounded-md py-2 px-4 w-full"
//             required
//           />
//           <div className="border rounded-md p-2">
//             <textarea
//               placeholder="Message"
//               name="message"
//               value={message}
//               onChange={handleChange}
//               className="w-full resize-none focus:outline-none"
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//         {/* Additional section with contact details */}
//         <div className="border rounded-md p-4 w-full md:w-3/4 lg:col-span-3 mb-8 grid sm:grid-cols-1 lg:grid-cols-3">
//         <h2 className="text-2xl font-bold mb-4 col-span-full">Contact Details</h2>
//         <div className="flex items-center space-x-4">
//           <MdEmail className="text-blue-500" size={24} />
//           <span>Email: ambitionconsultancy21@gamil.com</span>
//         </div>
//         <div className="flex items-center space-x-4">
//           <MdPhone className="text-blue-500" size={24} />
//           <span>Phone: +8801788-895718 <br />
//                        +8801718-148790
//           </span>
//         </div>
//         <div className="flex items-center space-x-4">
//           <MdLocationOn className="text-blue-500" size={24} />
//           <span>Address:348,Manru Shoping City,
//             2nd Floor,Chowatta,Sylhet
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import { useState } from 'react';
import Swal from 'sweetalert2';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: ''
  });

  const { name, email, message, phoneNumber } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Server response:', data);
        Swal.fire('Success', 'Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '', phoneNumber: '' });
      } else {
        throw new Error('Message failed to send.');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('Error', 'Message failed to send.', 'error');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Helmet>
                <title>Ambition |Contact</title>
            </Helmet>
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="border rounded-md p-4 w-full md:w-3/4 lg:w-1/2 mb-8">
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            className="border rounded-md py-2 px-4 w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            className="border rounded-md py-2 px-4 w-full"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            className="border rounded-md py-2 px-4 w-full"
            required
          />
          <div className="border rounded-md p-2">
            <textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={handleChange}
              className="w-full resize-none focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="border rounded-md p-4 w-full md:w-3/4 lg:col-span-3 mb-8 grid sm:grid-cols-1 lg:grid-cols-3">
        <h2 className="text-2xl font-bold mb-4 col-span-full">Contact Details</h2>
        <div className="flex items-center space-x-4">
          <MdEmail className="text-blue-500" size={24} />
          <span>Email: ambitionconsultancy21@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <MdPhone className="text-blue-500" size={24} />
          <span>Phone: +8801788-895718 <br />
            +8801718-148790
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <MdLocationOn className="text-blue-500" size={24} />
          <span>Address: 348, Manru Shopping City, 2nd Floor, Chowatta, Sylhet</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
