"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

export default function InvestmentCalculator() {
  const [amount, setAmount] = useState(5000)
  const [duration, setDuration] = useState("6")
  const [returns, setReturns] = useState(0)
  const [cashback, setCashback] = useState(0)
  const [totalReturns, setTotalReturns] = useState(0)

  const calculateReturns = () => {
    let interestRate = 0

    switch (duration) {
      case "6":
        interestRate = 0.07
        break
      case "12":
        interestRate = 0.13
        break
      case "24":
        interestRate = 0.15
        break
      default:
        interestRate = 0.07
    }

    // Calculate interest based on simple interest formula
    const interest = amount * interestRate * (Number.parseInt(duration) / 12)

    // Calculate cashback (₹250 for investments ≥ ₹5000)
    const cashbackAmount = amount >= 5000 ? 250 : 0

    setReturns(interest)
    setCashback(cashbackAmount)
    setTotalReturns(amount + interest + cashbackAmount)
  }

  useEffect(() => {
    calculateReturns()
  }, [amount, duration])

  return (
    <section id="calculator" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment <span className="text-red-600">Calculator</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your potential returns based on investment amount and duration. Invest ₹5,000 or more and receive
            an instant cashback of ₹250!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader className="bg-black text-white">
              <CardTitle className="text-2xl">Calculate Your Returns</CardTitle>
              <CardDescription className="text-gray-300">
                Adjust the amount and duration to see your potential earnings
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount" className="text-lg">
                      Investment Amount (₹)
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      min="1000"
                      step="1000"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="text-lg p-6"
                    />
                    {amount < 5000 && (
                      <p className="text-sm text-red-600">Invest ₹5,000 or more to receive ₹250 cashback!</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-lg">Investment Duration</Label>
                    <RadioGroup value={duration} onValueChange={setDuration} className="grid grid-cols-3 gap-4">
                      <div>
                        <RadioGroupItem value="6" id="duration-6" className="peer sr-only" />
                        <Label
                          htmlFor="duration-6"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-red-600 [&:has([data-state=checked])]:border-red-600"
                        >
                          <span className="text-xl font-bold">6 Months</span>
                          <span className="text-sm text-red-600 font-medium">7% Interest</span>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="12" id="duration-12" className="peer sr-only" />
                        <Label
                          htmlFor="duration-12"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-red-600 [&:has([data-state=checked])]:border-red-600"
                        >
                          <span className="text-xl font-bold">12 Months</span>
                          <span className="text-sm text-red-600 font-medium">13% Interest</span>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="24" id="duration-24" className="peer sr-only" />
                        <Label
                          htmlFor="duration-24"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-red-600 [&:has([data-state=checked])]:border-red-600"
                        >
                          <span className="text-xl font-bold">24 Months</span>
                          <span className="text-sm text-red-600 font-medium">15% Interest</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                    size="lg"
                    onClick={calculateReturns}
                  >
                    Calculate Returns
                  </Button>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Your Investment Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Principal Amount:</span>
                      <span className="font-bold">₹{amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Duration:</span>
                      <span className="font-bold">{duration} Months</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Interest Rate:</span>
                      <span className="font-bold text-red-600">
                        {duration === "6" ? "7%" : duration === "12" ? "13%" : "15%"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Interest Earned:</span>
                      <span className="font-bold text-green-600">₹{returns.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Cashback:</span>
                      <span className="font-bold text-green-600">₹{cashback}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-lg font-bold">Total Returns:</span>
                      <span className="text-lg font-bold text-red-600">₹{totalReturns.toFixed(2)}</span>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full bg-black hover:bg-gray-800 text-white">Invest Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
