import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Team() {
  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-red-600">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced team of finance professionals is dedicated to providing secure and high-yield investment
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Bokkisam Sahith"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Bokkisam Sahith</h3>
                <p className="text-red-600 font-medium mb-3">CEO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  With extensive experience in finance and real estate, Sahith leads our vision to revolutionize
                  mortgage investments.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="A. Guna"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">A. Guna</h3>
                <p className="text-red-600 font-medium mb-3">CFO</p>
                <p className="text-gray-600 text-sm">
                  Guna oversees all financial operations, ensuring transparency and maximizing returns for our
                  investors.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Kula Shaker"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Kula Shaker</h3>
                <p className="text-red-600 font-medium mb-3">Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Kula brings his expertise in risk management and mortgage evaluation to ensure secure investments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
