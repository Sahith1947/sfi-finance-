import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Invest Smarter with <span className="text-red-600">FlashFund</span>
            </h1>
            <p className="text-2xl font-semibold mb-4 text-red-500">Turning Small Assets into Big Returns</p>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              Earn up to 15% interest on your investments. We lend to borrowers who pledge valuable assets like gold,
              mobile phones, and laptops as collateral, ensuring your investment is always secured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white text-lg py-6" size="lg" asChild>
                <Link href="#calculator">Calculate Returns</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-red-600 rounded-lg blur-md"></div>
              <div className="bg-black border border-gray-800 rounded-lg p-6 relative">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-red-600">Investment Highlights</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center border-b border-gray-800 pb-3">
                    <div className="bg-red-600 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">6M</span>
                    </div>
                    <div>
                      <p className="font-medium">6 Month Plan</p>
                      <p className="text-xl font-bold text-red-500">7% Interest</p>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-800 pb-3">
                    <div className="bg-red-600 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">12M</span>
                    </div>
                    <div>
                      <p className="font-medium">12 Month Plan</p>
                      <p className="text-xl font-bold text-red-500">13% Interest</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-600 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">24M</span>
                    </div>
                    <div>
                      <p className="font-medium">24 Month Plan</p>
                      <p className="text-xl font-bold text-red-500">15% Interest</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
