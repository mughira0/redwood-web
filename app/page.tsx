import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import ServiceSlider from "@/components/service-slider";
import GallerySection from "@/components/gallery-section";
import HeroCarousel from "@/components/hero-carousel";
import SpecialTreatments from "@/components/special-treatments";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-bodyBg text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center text-sm font-secondary">
            <span>
              We are creative, ambitious and ready for challenges! Hire Us
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-secondary">
                info@redwoodkwellness.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-secondary">(001) 123-456-7890</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white py-4 px-4 border-b border-borderColor2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-center">
              <span className="text-2xl font-primary tracking-wide text-primaryCustom">
                Redwood
              </span>
              <span className="text-xs tracking-[0.3em] text-tertiaryCustom font-secondary">
                K-WELLNESS
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#home"
              className="uppercase text-sm font-medium hover:text-primaryCustom transition-colors font-secondary"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="uppercase text-sm font-medium hover:text-primaryCustom transition-colors font-secondary"
            >
              Services
            </Link>
            <Link
              href="#blog"
              className="uppercase text-sm font-medium hover:text-primaryCustom transition-colors font-secondary"
            >
              Blog
            </Link>
            <Link
              href="#categories"
              className="uppercase text-sm font-medium hover:text-primaryCustom transition-colors font-secondary"
            >
              Categories
            </Link>
            <Link
              href="#products"
              className="uppercase text-sm font-medium hover:text-primaryCustom transition-colors font-secondary"
            >
              Products
            </Link>
            <Link
              href="#shop"
              className="uppercase text-sm font-medium hover:text-primaryCustom transition-colors font-secondary"
            >
              Shop
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 7h-9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"></path>
                <path d="M5 22V2"></path>
                <path d="M12 17v-5"></path>
                <path d="M5 12H2"></path>
                <path d="M5 7H3"></path>
                <path d="M5 17H4"></path>
              </svg>
            </button>
            <Link
              href="#book"
              className="bg-primaryCustom hover:bg-primaryCustom/90 text-white px-6 py-3 text-sm uppercase tracking-wider transition-colors font-secondary"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Tagline Section */}
        <section className="py-20 bg-bgLight">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-primary font-light mb-6">
                Where beauty begins at the roots.
              </h2>
              <p className="text-blackCustom text-lg leading-relaxed font-secondary">
                Redwood K-Wellness is dedicated to promoting scalp and hair
                wellness through natural, science-backed approaches that nurture
                your hair from the roots up. Our founders have traveled the
                world, studying ancient and modern hair care techniques to bring
                you the most effective treatments.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-bgDark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-primary font-light mb-4">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-primaryCustom mx-auto"></div>
              <p className="text-blackCustom max-w-2xl mx-auto mt-6 font-secondary">
                We offer a range of specialized treatments designed to address
                various hair and scalp needs, from essential care to premium
                rejuvenation.
              </p>
            </div>

            <ServiceSlider />
          </div>
        </section>

        {/* Special Treatments Section */}
        <SpecialTreatments />

        {/* About Us with Image */}
        <section className="py-20 bg-bgLight">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden border border-borderColor2">
                <Image
                  src="/images/massage-5.jpg"
                  alt="Spa treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-primary font-light mb-4">
                  About Our Approach
                </h2>
                <div className="w-24 h-1 bg-primaryCustom"></div>
                <p className="text-blackCustom leading-relaxed font-secondary">
                  At Redwood K-Wellness, we believe that true hair beauty comes
                  from a healthy foundation. Our approach combines natural
                  ingredients with scientific research to create treatments that
                  nourish your scalp and strengthen your hair from the roots.
                </p>
                <p className="text-blackCustom leading-relaxed font-secondary">
                  Each treatment is personalized to address your specific needs,
                  whether you're dealing with dryness, thinning, or simply want
                  to maintain healthy hair. Our expert practitioners use
                  techniques gathered from around the world to provide you with
                  the most effective care.
                </p>
                <Link
                  href="#learn-more"
                  className="inline-block border-2 border-primaryCustom text-primaryCustom hover:bg-primaryCustom hover:text-white px-6 py-3 uppercase tracking-wider text-sm transition-colors mt-4 font-secondary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 bg-bgDark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-primary font-light mb-4">
                Our Wellness Space
              </h2>
              <div className="w-24 h-1 bg-primaryCustom mx-auto"></div>
              <p className="text-blackCustom max-w-2xl mx-auto mt-6 font-secondary">
                Experience the tranquil environment of our spa, designed to help
                you relax and rejuvenate.
              </p>
            </div>

            <GallerySection />
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 bg-bgLight">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-primary font-light mb-4">
                Our Treatment Packages
              </h2>
              <div className="w-24 h-1 bg-primaryCustom mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Essential Package */}
              <div className="border border-borderColor2 p-8 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-2xl font-primary mb-4">
                  Essential Package
                </h3>
                <div className="w-16 h-1 bg-primaryCustom mx-auto mb-6"></div>
                <ul className="space-y-3 mb-8 font-secondary">
                  <li className="text-blackCustom">Sensitive Care</li>
                  <li className="text-blackCustom">Detox Care</li>
                  <li className="text-blackCustom">Destress Care</li>
                </ul>
                <Link
                  href="#book"
                  className="inline-block border-2 border-primaryCustom text-primaryCustom hover:bg-primaryCustom hover:text-white px-6 py-3 uppercase tracking-wider text-sm transition-colors font-secondary"
                >
                  Book Now
                </Link>
              </div>

              {/* Premium Package */}
              <div className="border border-borderColor2 p-8 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-2xl font-primary mb-4">Premium Package</h3>
                <div className="w-16 h-1 bg-primaryCustom mx-auto mb-6"></div>
                <ul className="space-y-3 mb-8 font-secondary">
                  <li className="text-blackCustom">Root Rejuvenate</li>
                  <li className="text-blackCustom">Pure Crown</li>
                  <li className="text-blackCustom">Full Blossom</li>
                </ul>
                <Link
                  href="#book"
                  className="inline-block border-2 border-primaryCustom text-primaryCustom hover:bg-primaryCustom hover:text-white px-6 py-3 uppercase tracking-wider text-sm transition-colors font-secondary"
                >
                  Book Now
                </Link>
              </div>

              {/* Special Occasion Package */}
              <div className="border border-borderColor2 p-8 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-2xl font-primary mb-4">Special Occasion</h3>
                <div className="w-16 h-1 bg-primaryCustom mx-auto mb-6"></div>
                <ul className="space-y-3 mb-8 font-secondary">
                  <li className="text-blackCustom">Exclusive Retreat</li>
                  <li className="text-blackCustom">Luxury Group</li>
                  <li className="text-blackCustom">Custom Experience</li>
                </ul>
                <Link
                  href="#book"
                  className="inline-block border-2 border-primaryCustom text-primaryCustom hover:bg-primaryCustom hover:text-white px-6 py-3 uppercase tracking-wider text-sm transition-colors font-secondary"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Hours */}
        <section id="contact" className="py-20 bg-bgDark">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-primary font-light mb-4">
                  Business Hours
                </h2>
                <div className="w-24 h-1 bg-primaryCustom mb-8"></div>

                <div className="space-y-4 font-secondary">
                  <div className="flex justify-between items-center border-b border-borderColor2 pb-2">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-borderColor2 pb-2">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-borderColor2 pb-2">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <h2 className="text-3xl font-primary font-light mt-12 mb-4">
                  Contact Us
                </h2>
                <div className="w-24 h-1 bg-primaryCustom mb-8"></div>

                <div className="space-y-4 font-secondary">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primaryCustom" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primaryCustom" />
                    <span>info@redwoodkwellness.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primaryCustom" />
                    <span>123 Wellness Way, Redwood City, CA 94063</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-primary font-light mb-4">
                  Find Us
                </h2>
                <div className="w-24 h-1 bg-primaryCustom mb-8"></div>

                <div className="h-[400px] rounded-lg overflow-hidden border border-borderColor2">
                  {/* Google Map would be embedded here */}
                  <div className="w-full h-full bg-bgLight flex items-center justify-center">
                    <span className="text-tertiaryCustom font-secondary">
                      Google Map Embed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Appointment */}
        <section id="book" className="py-20 bg-bodyBg text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-primary font-light mb-6">
              Ready to experience the Redwood difference?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-tertiaryCustom font-secondary">
              Book your appointment today and take the first step towards
              healthier, more beautiful hair.
            </p>
            <Link
              href="#contact-form"
              className="inline-block bg-primaryCustom text-white hover:bg-primaryCustom/90 px-8 py-4 text-sm uppercase tracking-wider transition-colors font-secondary"
            >
              Book an Appointment
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bodyBg text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex flex-col items-start">
                <span className="text-2xl font-primary tracking-wide text-primaryCustom">
                  Redwood
                </span>
                <span className="text-xs tracking-[0.3em] text-tertiaryCustom font-secondary">
                  K-WELLNESS
                </span>
              </div>
              <p className="text-tertiaryCustom font-secondary">
                Where beauty begins at the roots.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-primaryCustom font-primary">
                Quick Links
              </h3>
              <ul className="space-y-2 font-secondary">
                <li>
                  <a
                    href="#home"
                    className="text-tertiaryCustom hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-tertiaryCustom hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-tertiaryCustom hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-tertiaryCustom hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-tertiaryCustom hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-primaryCustom font-primary">
                Services
              </h3>
              <ul className="space-y-2 font-secondary">
                <li>
                  <a
                    href="#"
                    className="text-tertiaryCustom hover:text-white transition-colors"
                  >
                    Essential Package
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-tertiaryCustom hover:text-white transition-colors"
                  >
                    Premium Package
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-tertiaryCustom hover:text-white transition-colors"
                  >
                    Special Occasion
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-primaryCustom font-primary">
                Contact
              </h3>
              <div className="space-y-2 text-tertiaryCustom font-secondary">
                <p>123 Wellness Way</p>
                <p>Redwood City, CA 94063</p>
                <p>(123) 456-7890</p>
                <p>info@redwoodkwellness.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-borderColor1 mt-8 pt-8 text-center text-tertiaryCustom">
            <p className="font-secondary">
              © {new Date().getFullYear()} Redwood K-Wellness. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
