"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SIPCalculator() {
  // Lump sum calculator state
  const [lumpAmount, setLumpAmount] = useState(5000)
  const [lumpDuration, setLumpDuration] = useState("6")
  const [lumpReturns, setLumpReturns] = useState(0)
  const [lumpCashback, setLumpCashback] = useState(0)
  const [lumpTotalReturns, setLumpTotalReturns] = useState(0)

  // SIP calculator state
  const [sipAmount, setSipAmount] = useState(1000)
  const [sipDuration, setSipDuration] = useState("12")
  const [sipReturns, setSipReturns] = useState(0)
  const [sipTotalInvestment, setSipTotalInvestment] = useState(0)
  const [sipTotalReturns, setSipTotalReturns] = useState(0)

  // Bank FD comparison
  const [fdReturns, setFdReturns] = useState(0)
  const [fdTotalReturns, setFdTotalReturns] = useState(0)

  const calculateLumpSum = () => {
    let interestRate = 0

    switch (lumpDuration) {
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
    const interest = lumpAmount * interestRate * (Number.parseInt(lumpDuration) / 12)

    // Calculate cashback (₹250 for investments ≥ ₹5000)
    const cashbackAmount = lumpAmount >= 5000 ? 250 : 0

    setLumpReturns(interest)
    setLumpCashback(cashbackAmount)
    setLumpTotalReturns(lumpAmount + interest + cashbackAmount)

    // Calculate FD returns (assuming 5.5% annual interest rate for FD)
    const fdInterest = lumpAmount * 0.055 * (Number.parseInt(lumpDuration) / 12)
    setFdReturns(fdInterest)
    setFdTotalReturns(lumpAmount + fdInterest)
  }

  const calculateSIP = () => {
    let interestRate = 0

    switch (sipDuration) {
      case "12":
        interestRate = 0.13
        break
      case "24":
        interestRate = 0.15
        break
      default:
        interestRate = 0.13
    }

    // Calculate total investment
    const months = Number.parseInt(sipDuration)
    const totalInvestment = sipAmount * months

    // Calculate SIP returns using simplified formula
    // This is a simplified calculation - actual SIP returns would use a more complex formula
    let totalValue = 0
    for (let i = 0; i < months; i++) {
      // Each month's contribution grows for (months - i) months
      const monthlyContribution = sipAmount * (1 + interestRate * ((months - i) / 12))
      totalValue += monthlyContribution
    }

    setSipTotalInvestment(totalInvestment)
    setSipReturns(totalValue - totalInvestment)
    setSipTotalReturns(totalValue)

    // Calculate FD SIP returns (assuming 5.5% annual interest rate for FD)
    let fdTotalValue = 0
    for (let i = 0; i < months; i++) {
      const fdMonthlyContribution = sipAmount * (1 + 0.055 * ((months - i) / 12))
      fdTotalValue += fdMonthlyContribution
    }
    setFdReturns(fdTotalValue - totalInvestment)
    setFdTotalReturns(fdTotalValue)
  }

  useEffect(() => {
    calculateLumpSum()
  }, [lumpAmount, lumpDuration])

  useEffect(() => {
    calculateSIP()
  }, [sipAmount, sipDuration])

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
                Compare our high-yield investments with traditional bank FDs
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="lumpsum" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="lumpsum">One-Time Investment</TabsTrigger>
                  <TabsTrigger value="sip">Monthly SIP</TabsTrigger>
                </TabsList>

                {/* Lump Sum Investment Calculator */}
                <TabsContent value="lumpsum">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="lump-amount" className="text-lg">
                          Investment Amount (₹)
                        </Label>
                        <Input
                          id="lump-amount"
                          type="number"
                          min="1000"
                          step="1000"
                          value={lumpAmount}
                          onChange={(e) => setLumpAmount(Number(e.target.value))}
                          className="text-lg p-6"
                        />
                        {lumpAmount < 1000 && (
                          <p className="text-sm text-red-600">Minimum investment amount is ₹1,000</p>
                        )}
                        {lumpAmount >= 1000 && lumpAmount < 5000 && (
                          <p className="text-sm text-red-600">Invest ₹5,000 or more to receive ₹250 cashback!</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label className="text-lg">Investment Duration</Label>
                        <RadioGroup
                          value={lumpDuration}
                          onValueChange={setLumpDuration}
                          className="grid grid-cols-3 gap-4"
                        >
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
                        onClick={calculateLumpSum}
                      >
                        Calculate Returns
                      </Button>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 text-center">Your Investment Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Principal Amount:</span>
                          <span className="font-bold">₹{lumpAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Duration:</span>
                          <span className="font-bold">{lumpDuration} Months</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Interest Rate:</span>
                          <span className="font-bold text-red-600">
                            {lumpDuration === "6" ? "7%" : lumpDuration === "12" ? "13%" : "15%"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Interest Earned:</span>
                          <span className="font-bold text-green-600">₹{lumpReturns.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Cashback:</span>
                          <span className="font-bold text-green-600">₹{lumpCashback}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span className="text-lg font-bold">Total Returns:</span>
                          <span className="text-lg font-bold text-red-600">₹{lumpTotalReturns.toFixed(2)}</span>
                        </div>

                        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                          <h4 className="font-bold text-center mb-2">Comparison with Bank FD</h4>
                          <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">Bank FD (5.5%):</span>
                            <span className="font-bold">₹{fdTotalReturns.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between pt-2">
                            <span className="font-medium">Extra Earnings with FlashFund:</span>
                            <span className="font-bold text-green-600">
                              ₹{(lumpTotalReturns - fdTotalReturns).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Button
                            className="w-full bg-black hover:bg-gray-800 text-white"
                            onClick={() => {
                              window.open(
                                `https://wa.me/message/YSQEBEJ5QGICA1?text=I'm interested in investing ₹${lumpAmount} for ${lumpDuration} months in FlashFund.`,
                                "_blank",
                              )
                            }}
                          >
                            Invest Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* SIP Calculator */}
                <TabsContent value="sip">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="sip-amount" className="text-lg">
                          Monthly SIP Amount (₹)
                        </Label>
                        <Input
                          id="sip-amount"
                          type="number"
                          min="1000"
                          step="500"
                          value={sipAmount}
                          onChange={(e) => setSipAmount(Number(e.target.value))}
                          className="text-lg p-6"
                        />
                        {sipAmount < 1000 && (
                          <p className="text-sm text-red-600">Minimum SIP amount is ₹1,000 per month</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label className="text-lg">SIP Duration</Label>
                        <RadioGroup
                          value={sipDuration}
                          onValueChange={setSipDuration}
                          className="grid grid-cols-2 gap-4"
                        >
                          <div>
                            <RadioGroupItem value="12" id="sip-duration-12" className="peer sr-only" />
                            <Label
                              htmlFor="sip-duration-12"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-red-600 [&:has([data-state=checked])]:border-red-600"
                            >
                              <span className="text-xl font-bold">12 Months</span>
                              <span className="text-sm text-red-600 font-medium">13% Interest</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="24" id="sip-duration-24" className="peer sr-only" />
                            <Label
                              htmlFor="sip-duration-24"
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
                        onClick={calculateSIP}
                      >
                        Calculate SIP Returns
                      </Button>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 text-center">Your SIP Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Monthly SIP Amount:</span>
                          <span className="font-bold">₹{sipAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Duration:</span>
                          <span className="font-bold">{sipDuration} Months</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Interest Rate:</span>
                          <span className="font-bold text-red-600">{sipDuration === "12" ? "13%" : "15%"}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Total Investment:</span>
                          <span className="font-bold">₹{sipTotalInvestment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Interest Earned:</span>
                          <span className="font-bold text-green-600">₹{sipReturns.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span className="text-lg font-bold">Total Returns:</span>
                          <span className="text-lg font-bold text-red-600">₹{sipTotalReturns.toFixed(2)}</span>
                        </div>

                        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                          <h4 className="font-bold text-center mb-2">Comparison with Bank FD</h4>
                          <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">Bank FD SIP (5.5%):</span>
                            <span className="font-bold">₹{fdTotalReturns.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between pt-2">
                            <span className="font-medium">Extra Earnings with FlashFund:</span>
                            <span className="font-bold text-green-600">
                              ₹{(sipTotalReturns - fdTotalReturns).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Button
                            className="w-full bg-black hover:bg-gray-800 text-white"
                            onClick={() => {
                              window.open(
                                `https://wa.me/message/YSQEBEJ5QGICA1?text=I'm interested in starting a SIP of ₹${sipAmount} for ${sipDuration} months in FlashFund.`,
                                "_blank",
                              )
                            }}
                          >
                            Start SIP Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
