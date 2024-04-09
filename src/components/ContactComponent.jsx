import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactComponent = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500" id="contact">
      <section className=" max-w-[1200px] mx-auto pt-48 flex">
        <div className="w-1/2 space-y-3">
          <h1 className="text-7xl font-bold p-10">Contact</h1>
          <p className="text-3xl">Feel free to contact me</p>
          <div className="text-2xl space-y-2">
            <p>
              <MdEmail className="inline mr-2" />
              email: 9kqGv@example.com
            </p>
            <p>
              <FaPhoneAlt className="inline mr-2" />
              phone: +385 98 123 456
            </p>
          </div>
        </div>
        <div className="bg-white p-10 w-1/2 shadow-lg flex flex-col rounded-md space-y-5">
          <p className="text-3xl">Contact me</p>
          <p className="text-2xl">Or send me an email</p>
          <input
            type="text"
            placeholder="Email"
            className="my-2 border border-black p-4 rounded-md"
          />
          <textarea
            placeholder="Message"
            rows="5"
            cols="30"
            className="my-2 border border-black p-4 rounded-md resize-none"
          />
          <button className="bg-black text-white p-2 hover:animate-pulse hover:bg-black hover:text-white transition duration-200 ease-in-out rounded-md">
            Send
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
