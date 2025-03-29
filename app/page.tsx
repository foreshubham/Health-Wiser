import Image from "next/image";
import Navbar from "@/components/ui/Navbar"
import Hero from "@/components/Hero"
import Service from '@/components/Services'
import AppointmentSection from '@/components/ui/Appointment'
import Footer from '@/components/ui/Footer'
import Testimonial from '@/components/ui/Testimonials'
export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   {/* <Service />Infinite Scroll */}
   <AppointmentSection />
   <Testimonial />
   <Footer />
   </>
  );
}
