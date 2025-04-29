"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvestmentPlans() {
  return (
    <section id="plans" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-red-600">Investment Plans</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the investment plan that suits your financial goals. All plans come with our ₹250 cashback offer on
            investments of ₹5,000 or more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* 6 Month Plan */}
          <Card className="border-2 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Short Term</CardTitle>
              <CardDescription>6 Month Investment</CardDescription>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold">7%</span>
                <span className="ml-1 text-xl text-gray-500">Interest</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Minimum investment: ₹1,000</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>₹250 cashback on ₹5,000+ investment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Monthly interest payout option</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Secured by valuable assets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Early withdrawal available</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => {
                  window.open(
                    "https://wa.me/message/YSQEBEJ5QGICA1?text=I'm interested in the 6-month investment plan with FlashFund.",
                    "_blank",
                  )
                }}
              >
                Invest Now
              </Button>
            </CardFooter>
          </Card>

          {/* 12 Month Plan */}
          <Card className="border-2 border-red-600 shadow-xl relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
              POPULAR
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Medium Term</CardTitle>
              <CardDescription>12 Month Investment</CardDescription>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold text-red-600">13%</span>
                <span className="ml-1 text-xl text-gray-500">Interest</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Minimum investment: ₹1,000</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>₹250 cashback on ₹5,000+ investment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Quarterly interest payout option</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Secured by premium assets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Priority customer support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => {
                  window.open(
                    "https://wa.me/message/YSQEBEJ5QGICA1?text=I'm interested in the 12-month investment plan with FlashFund.",
                    "_blank",
                  )
                }}
              >
                Invest Now
              </Button>
            </CardFooter>
          </Card>

          {/* 24 Month Plan */}
          <Card className="border-2 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Long Term</CardTitle>
              <CardDescription>24 Month Investment</CardDescription>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold">15%</span>
                <span className="ml-1 text-xl text-gray-500">Interest</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Minimum investment: ₹1,000</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>₹250 cashback on ₹5,000+ investment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Flexible interest payout options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Secured by premium assets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Exclusive investment opportunities</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => {
                  window.open(
                    "https://wa.me/message/YSQEBEJ5QGICA1?text=I'm interested in the 24-month investment plan with FlashFund.",
                    "_blank",
                  )
                }}
              >
                Invest Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
