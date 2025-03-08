import Benefits from "@/components/Benefits";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Ribbon from "@/components/Ribbon";
import UniversalCoupon from "@/components/UniversalCoupon";





export default function Home() {
  return (
    <div className="lg:mx-[77px]">
     <Hero />
     <Ribbon />
     <HowItWorks />
     <Benefits />
     <Pricing />
     <UniversalCoupon />
     <ContactUs />
    </div>
  );
}
