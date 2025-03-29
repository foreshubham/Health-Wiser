import { CommonButton } from "@/components/ui/CommonButton";
import Navbar from "@/components/ui/Navbar";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineQrCodeScanner, MdFastfood } from "react-icons/md";
import Testimonial from "@/components/ui/Testimonials";
import Footer from "@/components/ui/Footer";
export default function OfferSection() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 pt-32 min-h-screen flex justify-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase mb-4">
              What we <span className="text-pink-600 italic">Offer</span>
            </h2>
            <h4 className="inline-block relative text-xl pb-5 text-black/70">
              We offer a tailored solution for optimising your health with our
              services.
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-pink-600 h-0.5 w-12"></span>
            </h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex justify-center items-center bg-yellow-500 text-white rounded-full w-20 h-20 mb-6 mx-auto">
                <MdOutlineQrCodeScanner size={30} />
              </div>
              <h4 className="font-semibold text-xl mb-4">Scan & Know</h4>
              <p className="text-black/70 mb-5">
                Scan the barcode and get the full scoop on ingredients,
                allergens, and hidden health risks. Knowledge is power! 🧐📲{" "}
              </p>
              <CommonButton href="/scan" text="Start Scanning" />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex justify-center items-center bg-green-600 text-white rounded-full w-20 h-20 mb-6 mx-auto">
                <FaExchangeAlt size={30} />
              </div>
              <h4 className="font-semibold text-xl mb-4">Better Bite</h4>
              <p className="text-black/70 mb-5">
                Craving something tasty but healthy? Discover perfect food swaps
                that'll keep you on track without compromising flavor. 🍓✨
              </p>
              <CommonButton href="/better-bite" text="Explore Options" />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex justify-center items-center bg-blue-600 text-white rounded-full w-20 h-20 mb-6 mx-auto">
                <MdFastfood size={30} />
              </div>
              <h4 className="font-semibold text-xl mb-4">No More Junkies</h4>
              <p className="text-black/70 mb-5">
                Kick the junk to the curb! Get instant suggestions for
                healthier, tastier alternatives that your body will thank you
                for.🚫🍟
              </p>
              <CommonButton href="/no-more-junk" text="Find Alternatives" />
            </div>
          </div>
        </div>
      </section>
      <div className="-mt-50">
        <Testimonial />
      </div>
      <Footer />
    </>
  );
}
