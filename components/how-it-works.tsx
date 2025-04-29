import { ArrowRight, Wallet, Smartphone, Calculator, BadgeCheck } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Your <span className="text-red-600">Investment Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding how your money grows with FlashFund's asset-backed lending model
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">You Invest</h3>
              <p className="text-gray-600 text-sm">
                You invest your money with FlashFund at attractive interest rates of 7-15%.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-red-600 hidden md:block" />
              <div className="h-8 w-1 bg-red-600 md:hidden mx-auto"></div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">We Lend</h3>
              <p className="text-gray-600 text-sm">
                We lend to borrowers who pledge valuable assets like gold, mobile phones, and laptops as collateral.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-red-600 hidden md:block" />
              <div className="h-8 w-1 bg-red-600 md:hidden mx-auto"></div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Interest Grows</h3>
              <p className="text-gray-600 text-sm">
                Borrowers pay interest on their loans, which funds the returns on your investment.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-red-600 hidden md:block" />
              <div className="h-8 w-1 bg-red-600 md:hidden mx-auto"></div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">You Profit</h3>
              <p className="text-gray-600 text-sm">
                You receive your principal plus interest at maturity, or according to your chosen payout schedule.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Asset-Backed Security Model</h3>
            <p className="text-gray-600 mb-4">
              Your investment is secured by the valuable assets pledged by borrowers. If a borrower fails to repay,
              FlashFund can liquidate the pledged asset to recover the loan amount, protecting your investment.
            </p>
            <p className="text-gray-600 mb-4">
              We maintain a low loan-to-value ratio, meaning we lend less than the actual value of the pledged asset.
              This creates a buffer that protects your investment even if asset values fluctuate.
            </p>
            <p className="text-gray-600">
              Our rigorous assessment process and strict lending criteria have helped us maintain an NPA (Non-Performing
              Asset) rate of less than 1%, significantly lower than industry averages.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
