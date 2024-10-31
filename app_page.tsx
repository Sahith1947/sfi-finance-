'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft, Bell, CreditCard, Smartphone, Zap, ChevronRight, Eye, EyeOff, Settings, Shield, Percent, Gift, Building, FileText, Briefcase, ShieldCheck, PlusCircle, SendHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function FlashPayApp() {
  const [showDemo, setShowDemo] = useState(false)
  const [balance, setBalance] = useState(100000) // 1 lakh rupees
  const [creditLimit, setCreditLimit] = useState(300000) // 3 lakhs
  const [creditUsed, setCreditUsed] = useState(100000) // 1 lakh
  const [showBalance, setShowBalance] = useState(true)
  const [upiId, setUpiId] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Grocery Store', amount: -1500, date: '2024-03-15', type: 'debit' },
    { id: 2, description: 'Online Shopping', amount: -5000, date: '2024-03-14', type: 'credit' },
    { id: 3, description: 'Restaurant', amount: -2000, date: '2024-03-13', type: 'credit' },
    { id: 4, description: 'Fuel', amount: -3000, date: '2024-03-12', type: 'debit' },
    { id: 5, description: 'Credit Card Cashback', amount: 150, date: '2024-03-14', type: 'credit', cashback: true },
  ])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount)
  }

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
      <header className="bg-teal-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">FlashPay for Merchants</h1>
          <Button onClick={() => setShowDemo(true)} className="bg-yellow-400 text-teal-900 hover:bg-yellow-300">
            Try Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-teal-900 mb-6">
            Empower Your Business with Modern Banking
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-teal-700">
            FlashPay offers cutting-edge financial solutions tailored for merchants and businesses of all sizes.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-teal-700">
                <CreditCard className="mr-2 h-6 w-6" />
                Business Cards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-teal-600">
                Manage your business expenses with our smart debit and credit cards. Enjoy cashback, expense tracking, and customizable limits.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-teal-700">
                <Smartphone className="mr-2 h-6 w-6" />
                Seamless Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-teal-600">
                Accept payments via UPI, cards, and more. Generate dynamic QR codes for instant transactions and streamlined bookkeeping.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-teal-700">
                <Zap className="mr-2 h-6 w-6" />
                Real-Time Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-teal-600">
                Gain valuable insights into your business with real-time transaction data, cash flow analysis, and financial forecasting.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <section className="mt-20">
          <h3 className="text-3xl font-bold text-teal-900 mb-10 text-center">Why Choose FlashPay for Your Business?</h3>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Building className="mr-2 h-6 w-6" />
                  Zero Balance Account
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-teal-600">
                  Open a zero balance current account with no minimum balance requirements. Enjoy full-fledged banking features without the pressure of maintaining a minimum balance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Briefcase className="mr-2 h-6 w-6" />
                  Business Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-teal-600">
                  Access a suite of business tools including invoicing, payroll management, and tax calculation assistance to streamline your operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <ShieldCheck className="mr-2 h-6 w-6" />
                  Enhanced Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-teal-600">
                  Protect your business with advanced fraud detection, real-time alerts, and the ability to instantly freeze/unfreeze your cards for ultimate control.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-20 bg-teal-600 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-6">Open Your Current Account Today</h3>
          <p className="text-lg mb-6">
            To open a current account with FlashPay, you'll need to provide the following KYC documents:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>PAN Card</li>
            <li>Aadhaar Card</li>
            <li>GST Registration Certificate (for businesses with turnover above ₹20 lakhs)</li>
            <li>Company Registration Documents (for registered companies)</li>
            <li>Proof of Business Address</li>
            <li>Passport-sized photographs of authorized signatories</li>
          </ul>
          <p className="mt-6">
            The exact requirements may vary based on your business type. Our team will guide you through the process.
          </p>
        </section>

        <section className="mt-20">
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-teal-900">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="mr-2 h-6 w-6" />
                Business Loans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-teal-900 text-lg">
                <p className="font-semibold mb-2">Coming Soon!</p>
                We're working on bringing you flexible business loan options to fuel your growth. Stay tuned for updates on our upcoming loan products tailored for merchants and small businesses.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="bg-teal-700 text-white hover:bg-teal-600">Get Notified</Button>
            </CardFooter>
          </Card>
        </section>

        <div className="mt-20 text-center">
          <Button size="lg" onClick={() => setShowDemo(true)} className="bg-yellow-400 text-teal-900 hover:bg-yellow-300 text-xl px-8 py-4">
            Experience FlashPay Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </main>

      <footer className="bg-teal-800 text-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="hover:text-yellow-400">
              About
            </a>
            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>
            <a href="#" className="hover:text-yellow-400">
              Privacy
            </a>
            <a href="#" className="hover:text-yellow-400">
              Terms
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base">
              &copy; 2024 FlashPay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )

  const DemoPage = () => {
    const [activeCard, setActiveCard] = useState('debit')
    const [debitCardFrozen, setDebitCardFrozen] = useState(false)
    const [creditCardFrozen, setCreditCardFrozen] = useState(false)
    const [dailyLimit, setDailyLimit] = useState(10000)
    const [showCardDetails, setShowCardDetails] = useState(false)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    const [showAccountDetails, setShowAccountDetails] = useState(false)
    const [upiError, setUpiError] = useState('')
    const [addMoneyAmount, setAddMoneyAmount] = useState('')
    const [sendMoneyAmount, setSendMoneyAmount] = useState('')
    const [sendMoneyTo, setSendMoneyTo] = useState('')

    const accountDetails = {
      accountNumber: '1234567890',
      ifscCode: 'FLPY0001234',
      bankName: 'FlashPay Bank',
      branchName: 'Bangalore'
    }

    const handleCardFreeze = (cardType) => {
      if (cardType === 'debit') {
        setDebitCardFrozen(!debitCardFrozen)
      } else {
        setCreditCardFrozen(!creditCardFrozen)
      }
      alert(`${cardType.charAt(0).toUpperCase() + cardType.slice(1)} card ${debitCardFrozen ? 'unfrozen' : 'frozen'} successfully!`)
    }

    const handleDailyLimitChange = (newLimit) => {
      setDailyLimit(newLimit)
      alert(`Daily limit set to ${formatCurrency(newLimit)}`)
    }

    const handleCreditLimitChange = (newLimit) => {
      setCreditLimit(newLimit)
      setShowSuccessAlert(true)
      setTimeout(() => setShowSuccessAlert(false), 5000)
    }

    const validateAndGenerateQR = (id) => {
      const upiRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/
      if (upiRegex.test(id)) {
        setUpiError('')
        const upiPaymentLink = `upi://pay?pa=${id}&pn=FlashPay&mc=0000&tid=0000&tr=0000&tn=FlashPay%20Payment`
        setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiPaymentLink)}`)
      } else {
        setUpiError('Invalid UPI ID format')
        setQrCode('')
      }
    }

    const handleAddMoney = () => {
      const amount = parseFloat(addMoneyAmount)
      if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount')
        return
      }
      setBalance(prevBalance => prevBalance + amount)
      const newTransaction = {
        id: Date.now(),
        description: 'Added Money',
        amount: amount,
        date: new Date().toISOString().split('T')[0],
        type: 'debit'
      }
      setTransactions(prev => [newTransaction, ...prev])
      setAddMoneyAmount('')
      alert(`${formatCurrency(amount)} added successfully!`)
    }

    const handleSendMoney = () =>   {
      const amount = parseFloat(sendMoneyAmount)
      if (isNaN(amount) || amount <= 0 || amount > balance) {
        alert('Please enter a valid amount')
        return
      }
      setBalance(prevBalance => prevBalance - amount)
      const newTransaction = {
        id: Date.now(),
        description: `Sent to ${sendMoneyTo}`,
        amount: -amount,
        date: new Date().toISOString().split('T')[0],
        type: 'debit'
      }
      setTransactions(prev => [newTransaction, ...prev])
      setSendMoneyAmount('')
      setSendMoneyTo('')
      alert(`${formatCurrency(amount)} sent to ${sendMoneyTo} successfully!`)
    }

    useEffect(() => {
      if (upiId) {
        validateAndGenerateQR(upiId)
      } else {
        setQrCode('')
        setUpiError('')
      }
    }, [upiId])

    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
        <header className="bg-teal-700 text-white shadow-lg sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-4 text-white hover:text-yellow-400" onClick={() => setShowDemo(false)}>
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <h1 className="text-2xl font-bold">FlashPay Demo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400">
                <Bell className="h-6 w-6" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {showSuccessAlert && (
            <Alert className="mb-4 bg-green-100 border-green-400 text-green-700">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your credit limit increase request has been submitted successfully. Our bank team will review it shortly.
              </AlertDescription>
            </Alert>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-2 bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-teal-700">
                  <span>Current Balance</span>
                  <Button variant="ghost" size="icon" onClick={() => setShowBalance(!showBalance)}>
                    {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-teal-900">
                  {showBalance ? formatCurrency(balance) : '••••••'}
                </div>
                <div className="flex justify-between items-center space-x-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex-1 bg-teal-600 text-white hover:bg-teal-700">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Money
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Money</DialogTitle>
                        <DialogDescription>Enter the amount you want to add to your account.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="amount" className="text-right">Amount</Label>
                          <Input
                            id="amount"
                            type="number"
                            value={addMoneyAmount}
                            onChange={(e) => setAddMoneyAmount(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleAddMoney}>Add Money</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex-1 bg-yellow-500 text-teal-900 hover:bg-yellow-600">
                        <SendHorizontal className="mr-2 h-4 w-4" />
                        Send Money
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Send Money</DialogTitle>
                        <DialogDescription>Enter the details to send money.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="sendAmount" className="text-right">Amount</Label>
                          <Input
                            id="sendAmount"
                            type="number"
                            value={sendMoneyAmount}
                            onChange={(e) => setSendMoneyAmount(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="sendTo" className="text-right">To</Label>
                          <Input
                            id="sendTo"
                            value={sendMoneyTo}
                            onChange={(e) => setSendMoneyTo(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleSendMoney}>Send Money</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Smartphone className="mr-2" /> UPI Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Enter UPI ID (e.g., name@upi)"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className={upiError ? 'border-red-500' : ''}
                    />
                    {upiError && <p className="text-red-500 text-sm mt-1">{upiError}</p>}
                  </div>
                  {qrCode && (
                    <div className="flex flex-col items-center">
                      <img src={qrCode} alt="UPI QR Code" className="border-2 border-teal-200 rounded-lg max-w-full h-auto" />
                      <p className="text-sm text-teal-600 mt-2">Scan to pay via UPI</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-teal-700">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {transactions.map(transaction => (
                    <li key={transaction.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium text-teal-900">{transaction.description}</p>
                        <p className="text-sm text-teal-600">{transaction.date} - {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)} Card</p>
                      </div>
                      <span className={`${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                        {formatCurrency(Math.abs(transaction.amount))}
                        {transaction.cashback && ' (Cashback)'}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-teal-700 border-teal-300 hover:bg-teal-50">View All Transactions</Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <CreditCard className="mr-2" /> FlashPay Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="debit" onValueChange={setActiveCard}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="debit">Debit</TabsTrigger>
                    <TabsTrigger value="credit">Credit</TabsTrigger>
                  </TabsList>
                  <TabsContent value="debit">
                    <div className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl p-6 text-white mb-4">
                      <p className="text-sm mb-1">FlashPay Debit</p>
                      <p className="text-lg font-bold mb-4">
                        {showCardDetails ? "5678 1234 9876 5432" : "**** **** **** 5432"}
                      </p>
                      <div className="flex justify-between">
                        <p className="text-sm">Valid Thru: 12/25</p>
                        <p className="text-sm">CVV: {showCardDetails ? "123" : "***"}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Available Balance</span>
                        <span>{formatCurrency(balance)}</span>
                      </div>
                      <Progress value={(balance / 200000) * 100} className="bg-teal-100" />
                    </div>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full text-teal-700 border-teal-300 hover:bg-teal-50" 
                        onClick={() => handleCardFreeze('debit')}
                      >
                        {debitCardFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="Set Daily Limit"
                          value={dailyLimit}
                          onChange={(e) => handleDailyLimitChange(parseFloat(e.target.value))}
                        />
                        <Button onClick={() => alert(`Daily limit: ${formatCurrency(dailyLimit)}`)} className="bg-teal-600 text-white hover:bg-teal-500">
                          Set
                        </Button>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full text-teal-700 border-teal-300 hover:bg-teal-50" 
                        onClick={() => setShowCardDetails(!showCardDetails)}
                      >
                        {showCardDetails ? 'Hide Card Details' : 'View Card Details'}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="credit">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white mb-4">
                      <p className="text-sm mb-1">FlashPay Credit</p>
                      <p className="text-lg font-bold mb-4">
                        {showCardDetails ? "9012 3456 7890 1234" : "**** **** **** 1234"}
                      </p>
                      <div className="flex justify-between">
                        <p className="text-sm">Valid Thru: 06/26</p>
                        <p className="text-sm">CVV: {showCardDetails ? "456" : "***"}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Credit Used</span>
                        <span>{formatCurrency(creditUsed)} / {formatCurrency(creditLimit)}</span>
                      </div>
                      <Progress value={(creditUsed / creditLimit) * 100} className="bg-yellow-100" />
                    </div>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full text-yellow-700 border-yellow-300 hover:bg-yellow-50" 
                        onClick={() => handleCardFreeze('credit')}
                      >
                        {creditCardFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="Request Credit Limit Increase"
                          onChange={(e) => handleCreditLimitChange(parseFloat(e.target.value))}
                        />
                        <Button onClick={() => setShowSuccessAlert(true)} className="bg-yellow-400 text-teal-900 hover:bg-yellow-300">
                          Request
                        </Button>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full text-yellow-700 border-yellow-300 hover:bg-yellow-50" 
                        onClick={() => setShowCardDetails(!showCardDetails)}
                      >
                        {showCardDetails ? 'Hide Card Details' : 'View Card Details'}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="md:col-span-3 bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Building className="mr-2" /> Current Account Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-teal-900">Account Number:</span>
                    <span className="text-teal-700">{showAccountDetails ? accountDetails.accountNumber : '•••• •••• ••90'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-teal-900">IFSC Code:</span>
                    <span className="text-teal-700">{accountDetails.ifscCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-teal-900">Bank Name:</span>
                    <span className="text-teal-700">{accountDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-teal-900">Branch:</span>
                    <span className="text-teal-700">{accountDetails.branchName}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full text-teal-700 border-teal-300 hover:bg-teal-50" 
                  onClick={() => setShowAccountDetails(!showAccountDetails)}
                >
                  {showAccountDetails ? 'Hide Account Number' : 'View Full Account Number'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>

        <footer className="bg-teal-800 text-white mt-16">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <Button variant="ghost" className="text-white hover:text-yellow-400">Help</Button>
              <Button variant="ghost" className="text-white hover:text-yellow-400">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-sm">
                This is a demo version. No real transactions are processed.
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return showDemo ? <DemoPage /> : <HomePage />
}