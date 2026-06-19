import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Franklin - Business inquiries & Brand Collaborations",
  description: "Get in touch with Franklin (F_BLOCK_14) for brand promotions, campaigns, and media bookings. Reach out via Call, WhatsApp, or Email.",
};

export default function Contact() {
  const contactDetails = {
    phone: "+1 (234) 567-890",
    phoneUrl: "tel:+1234567890",
    email: "franklin@fblock14.com",
    emailUrl: "mailto:franklin@fblock14.com",
    whatsapp: "Message on WhatsApp",
    whatsappUrl: "https://wa.me/1234567890",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    instagram: "@f_block_14",
    instagramUrl: "https://instagram.com/f_block_14",
    youtube: "Franklin F_BLOCK_14",
    youtubeUrl: "https://youtube.com/@f_block_14",
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-12">
        {/* Contact Hero */}
        <section className="py-16 text-center max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-3">
            Let's Connect
          </h1>
          <p className="text-white/50 text-sm font-brier mt-4 max-w-lg mx-auto">
            Ready to secure campaign dates or discuss custom media packages? Choose your preferred channel to establish contact with Franklin.
          </p>
        </section>

        {/* Contact Cards Grid */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Phone Card */}
            <a
              href={contactDetails.phoneUrl}
              className="group bg-card-dark border border-white/5 p-8 rounded-3xl flex flex-col justify-between h-80 hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent/20 group-hover:bg-accent transition-colors duration-300" />
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <div className="mt-8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-1">
                  Voice &amp; Audio Call
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                  Call Now
                </h3>
                <p className="text-base font-bold text-accent mb-4 tracking-wide">
                  {contactDetails.phone}
                </p>
              </div>
              <div className="flex items-center gap-2 border-t border-white/5 pt-4 text-[10px] text-white/40 font-brier">
                <Clock className="w-3.5 h-3.5" />
                <span>{contactDetails.hours}</span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={contactDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card-dark border border-white/5 p-8 rounded-3xl flex flex-col justify-between h-80 hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent/20 group-hover:bg-accent transition-colors duration-300" />
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.016 14.1 1.02 11.999 1.02c-5.444 0-9.866 4.372-9.87 9.802 0 1.714.452 3.393 1.312 4.88L2.435 21.93l6.212-1.61zM17.18 14.93c-.282-.142-1.67-.82-1.93-.915-.258-.095-.447-.142-.635.142-.189.284-.73.915-.895 1.103-.165.188-.33.213-.612.07-.282-.142-1.192-.438-2.27-1.401-.839-.747-1.406-1.67-1.57-1.953-.165-.283-.018-.435.123-.575.127-.126.282-.33.424-.495.142-.165.189-.283.283-.472.094-.189.047-.354-.024-.495-.071-.142-.635-1.53-.87-2.095-.23-.553-.483-.477-.66-.486-.17-.008-.364-.01-.56-.01-.197 0-.518.073-.79.37-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.063 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.67-.682 1.905-1.34.235-.657.235-1.22.165-1.34-.07-.122-.258-.19-.54-.332z" />
                  </svg>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <div className="mt-8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-1">
                  Direct Messaging
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                  WhatsApp
                </h3>
                <p className="text-base font-bold text-accent mb-4 tracking-wide">
                  {contactDetails.whatsapp}
                </p>
              </div>
              <div className="flex items-center gap-2 border-t border-white/5 pt-4 text-[10px] text-white/40 font-brier">
                <span>Fastest response channel</span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={contactDetails.emailUrl}
              className="group bg-card-dark border border-white/5 p-8 rounded-3xl flex flex-col justify-between h-80 hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent/20 group-hover:bg-accent transition-colors duration-300" />
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <div className="mt-8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-1">
                  Official Correspondence
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                  Email
                </h3>
                <p className="text-base font-bold text-accent mb-4 tracking-wide">
                  {contactDetails.email}
                </p>
              </div>
              <div className="flex items-center gap-2 border-t border-white/5 pt-4 text-[10px] text-white/40 font-brier">
                <span>Direct response within 24 hours</span>
              </div>
            </a>

          </div>

          {/* Social Links List below Cards */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">
              Also active on:
            </span>
            <div className="flex items-center gap-8">
              <a
                href={contactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors group"
              >
                <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="font-semibold uppercase tracking-wider text-xs">
                  {contactDetails.instagram}
                </span>
              </a>
              <a
                href={contactDetails.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors group"
              >
                <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-semibold uppercase tracking-wider text-xs">
                  YouTube
                </span>
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
