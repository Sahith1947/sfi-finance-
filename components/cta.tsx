"use client"

import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your <span className="text-red-600">Investment Journey</span>?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of investors who are already earning high returns with FlashFund. Start with as little as
            ₹1,000 and get ₹250 cashback on investments of ₹5,000 or more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white text-lg py-6 px-8"
              size="lg"
              onClick={() => {
                window.open(
                  "https://wa.me/message/YSQEBEJ5QGICA1?text=I want to invest in FlashFund. Please provide more information.",
                  "_blank",
                )
              }}
            >
              Start Investing Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
