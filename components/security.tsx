import { Shield, Lock, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Security() {
  return (
    <section id="security" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Investment <span className="text-red-600">Security</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At FlashFund, we prioritize the security of your investments with multiple layers of protection.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200 shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-red-100 p-4 rounded-full">
                  <Shield className="h-12 w-12 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">₹5 Lakh Deposit Returns Guarantee</h3>
                  <p className="text-gray-600">
                    Your investment is protected up to ₹5 lakhs. We guarantee the return of your principal amount and
                    promised interest, giving you complete peace of mind.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full shrink-0">
                    <Lock className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Asset-Backed Security</h3>
                    <p className="text-gray-600">
                      All loans are secured by valuable assets like gold, mobile phones, and laptops. We thoroughly
                      verify and assess each asset before lending, maintaining a loan-to-value ratio that protects your
                      investment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full shrink-0">
                    <FileCheck className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Low NPA Rate</h3>
                    <p className="text-gray-600">
                      Our rigorous lending standards and thorough verification process ensure an NPA (Non-Performing
                      Asset) rate of less than 1%, significantly lower than industry averages.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-500">
            <p>
              <strong>Note:</strong> FlashFund is in its initial stage and is working towards strong regulatory
              compliance. Currently, we are not registered under RBI or SEBI. All investments are managed by FlashFund
              authority, and investor security is our top priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
