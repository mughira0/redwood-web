import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SpecialTreatments() {
  return (
    <section className="bg-bodyBg py-16 md:py-24 text-white-color">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-primaryCustom text-lg mb-1 font-primary">
                BODY MASSAGE
              </h3>
              <p className="text-tertiaryCustom text-sm font-secondary">
                A Luxurious Body Massage Awaits
              </p>
              <div className="text-rateColor text-xl mt-4 font-primary">
                $75
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-white text-3xl md:text-4xl font-primary font-light leading-tight">
                SPECIAL TREATMENTS TO RELAX YOUR MIND SOUL AND BODY
              </h2>
              <p className="text-tertiaryCustom font-secondary">
                These special treatments combine a variety of techniques,
                therapies, and holistic practices that focus on relaxation,
                rejuvenation, and emotional well-being.
              </p>
              <Link
                href="#treatments"
                className="inline-block border border-primaryCustom text-primaryCustom hover:bg-primaryCustom hover:text-bodyBg px-6 py-2 uppercase text-sm tracking-wider transition-colors mt-4 font-secondary"
              >
                READ MORE
              </Link>
            </div>

            <div className="relative h-[400px] rounded overflow-hidden mt-8 border border-borderColor1">
              <Image
                src="/images/massage-6.jpg"
                alt="Massage treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative h-[400px] rounded overflow-hidden border border-borderColor1">
              <Image
                src="/images/massage-2.jpg"
                alt="Spa treatment"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-primary font-light">QUESTIONS</h3>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border-b border-borderColor1"
                >
                  <AccordionTrigger className="text-white-color hover:text-primaryCustom transition-colors py-4 text-left">
                    <span className="text-white text-white text-lg font-primary font-light hover:text-primaryCustom hover:text-primaryCustom">
                      HOW OFTEN SHOULD I VISIT A SPA?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-tertiaryCustom pb-4 font-secondary">
                    The frequency of spa visits depends on your personal
                    preferences and needs. Some people go to spas regularly for
                    relaxation and self-care, while others may visit on a more
                    occasional basis for special occasions or specific
                    treatments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-b border-borderColor1"
                >
                  <AccordionTrigger className="text-white-color hover:text-primaryCustom transition-colors py-4 text-left">
                    <span className="text-white text-white text-lg font-primary font-light hover:text-primaryCustom hover:text-primaryCustom">
                      WHAT ARE THE BENEFITS OF SPA TREATMENTS?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-tertiaryCustom pb-4 font-secondary">
                    Spa treatments offer numerous benefits including stress
                    reduction, improved circulation, pain relief, better sleep
                    quality, detoxification, and enhanced mental clarity.
                    Regular treatments can contribute to overall wellness and a
                    balanced lifestyle.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-b border-borderColor1 hover:text-primaryCustom"
                >
                  <AccordionTrigger className="text-white-color hover:text-primaryCustom transition-colors py-4 text-left">
                    <span className="text-white text-lg font-primary font-light hover:text-primaryCustom">
                      WHAT IS THE TYPICAL COST OF SPA TREATMENTS?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-tertiaryCustom pb-4 font-secondary">
                    The cost of spa treatments varies widely depending on the
                    type of service, duration, location, and expertise of the
                    practitioner. Basic treatments may start around $50-75,
                    while premium or specialized services can range from
                    $100-300 or more.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
