import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contacts"
      className="w-full px-6 py-24 lg:px-16 lg:py-28 lg:flex flex-row-reverse justify-center items-center gap-5 lg:gap-10"
    >
      <div className="mb-10 basis-1/3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-5 text-secondary dark:text-primary">
          My Contacts
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-medium text-center text-secondary dark:text-primary">
          You can contact me via my email, messenger, or social media.
        </p>
      </div>
      <div className="basis-2/3 grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10 text-secondary dark:text-primary">
        <a
          href="mailto:alfonlai97@gmail.com"
          target="_blank"
          className="font-medium flex flex-col items-center"
        >
          <MdEmail className="text-3xl md:text-4xl lg:text-5xl" />
          Email
        </a>
        <a
          href="https://www.facebook.com/alfon.lai"
          target="_blank"
          className="font-medium flex flex-col items-center"
        >
          <FaFacebook className="text-3xl md:text-4xl lg:text-5xl" />
          Facebook
        </a>
        <a
          href="https://github.com/Alfon5000"
          target="_blank"
          className="font-medium flex flex-col items-center"
        >
          <FaGithub className="text-3xl md:text-4xl lg:text-5xl" />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/alfon_lai/"
          target="_blank"
          className="font-medium flex flex-col items-center"
        >
          <FaInstagram className="text-3xl md:text-4xl lg:text-5xl" />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/alfonso-lai/"
          target="_blank"
          className="font-medium flex flex-col items-center"
        >
          <FaLinkedin className="text-3xl md:text-4xl lg:text-5xl" />
          LinkedIn
        </a>
        <a
          href="https://t.me/Alfon50"
          target="_blank"
          className="font-medium flex flex-col items-center"
        >
          <FaTelegram className="text-3xl md:text-4xl lg:text-5xl" />
          Telegram
        </a>
        <a
          href="https://wa.me/6281236665363"
          target="_blank"
          className="font-medium flex flex-col items-center"
        >
          <FaWhatsapp className="text-3xl md:text-4xl lg:text-5xl" />
          WhatsApp
        </a>
        <a
          href="https://www.x.com/alfon_lai"
          target="_blank"
          className="font-medium flex flex-col items-center"
        >
          <FaXTwitter className="text-3xl md:text-4xl lg:text-5xl" />X
        </a>
      </div>
    </section>
  );
}
