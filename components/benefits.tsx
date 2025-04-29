import { Shield, TrendingUp, Clock, Gift, Landmark, Users } from "lucide-react"

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-red-600">FlashFund</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer secure, high-yield investment opportunities backed by valuable assets, providing you with peace of
            mind and excellent returns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Investments</h3>
            <p className="text-gray-600">
              All investments are secured by valuable assets like gold, mobile phones, and laptops, providing tangible
              collateral backing.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">High Returns</h3>
            <p className="text-gray-600">
              Earn up to 15% interest on your investments, significantly higher than traditional savings accounts.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible Terms</h3>
            <p className="text-gray-600">
              Choose from 6, 12, or 24-month investment terms to match your financial goals and liquidity needs.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Gift className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Cashback Offer</h3>
            <p className="text-gray-600">
              Receive ₹250 cashback when you invest ₹5,000 or more, giving you an immediate return on investment.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Landmark className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
            <p className="text-gray-600">
              We maintain complete transparency in our lending process, ensuring you know exactly how your money is
              being used.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
            <p className="text-gray-600">
              Our team of investment experts is available to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
