import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ip01f7p', 'template_eprmst6', form.current, '2Nawt8tvddfdcFPvx')
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire('Success', 'Message sent successfully!', 'success');
        },
        (error) => {
          console.log(error.text);
          Swal.fire('Error', 'Message failed to send.', 'error');
        }
      );
    form.current.reset();
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-5xl pt-28 text-center">Contact</p>
      <div className="border rounded-md p-4 w-full md:w-3/4 lg:w-1/2 mb-8">
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter your name" className="border rounded-md py-2 px-4 w-full" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Enter your email" className="border rounded-md py-2 px-4 w-full" />
          <label>Phone Number</label>
          <input type="tel" name="user_phone" placeholder="Enter your phone number" className="border rounded-md py-2 px-4 w-full" />
          <label>Message</label>
          <textarea name="message" placeholder="Enter your message" className="border rounded-md py-2 px-4 w-full resize-none focus:outline-none" rows="4"></textarea>
          <input type="submit" value="Send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
        </form>
      </div>

      {/* Contact Information */}
      <div className="border rounded-md p-4 w-full md:w-3/4 lg:col-span-3 mb-8 grid sm:grid-cols-1 lg:grid-cols-3">
        <h2 className="text-2xl font-bold mb-4 col-span-full">Contact Details</h2>
        <div className="flex items-center space-x-4">
          <MdEmail className="text-blue-500" size={24} />
          <span>Email: ambitionconsultancy21@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <MdPhone className="text-blue-500" size={24} />
          <span>
            Phone:+8801718-148790
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <MdLocationOn className="text-blue-500" size={24} />
          <span>Address: 348, Manru Shopping City, 2nd Floor, Chowhatta, Sylhet-3100, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
