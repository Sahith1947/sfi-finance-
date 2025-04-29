import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-red-600">Investors Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied investors who have experienced the benefits of investing with FlashFund Mortgages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4">
                "I've been investing with FlashFund for 6 months now, and I'm extremely satisfied with the returns. The
                process was simple, and I received my interest payments on time. Highly recommended!"
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold">Dr. Ramesh Kumar</p>
                <p className="text-sm text-gray-600">Government Hospital Doctor</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4">
                "As a government employee, I was looking for safe investment options with better returns than FDs.
                FlashFund Mortgages has been the perfect solution. The 13% returns on my 12-month investment have helped
                me plan my daughter's education."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold">Suresh Reddy</p>
                <p className="text-sm text-gray-600">Government Employee</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4">
                "The SIP option at FlashFund has been a game-changer for me. I'm investing ₹5,000 monthly, and the
                returns are significantly better than any other investment option I've tried. The team is responsive and
                professional."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold">Priya Sharma</p>
                <p className="text-sm text-gray-600">IT Professional</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
