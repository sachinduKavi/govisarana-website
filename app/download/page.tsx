"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DollarSign,
  Wheat,
  Users,
  TrendingUp,
  Download,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"
import LegalDocs from "@/components/LegalDocs"

export default function DownloadPage() {
  const features = [
    {
      icon: DollarSign,
      title: "Money-saving & Loan Management",
      description: "Track your savings, manage loans, and access financial tools designed for rural communities.",
    },
    {
      icon: Wheat,
      title: "Agricultural Value Addition Guides",
      description: "Learn techniques to add value to your agricultural products and increase your income.",
    },
    {
      icon: Users,
      title: "Women-led Initiatives Support",
      description: "Access resources and support specifically designed for women entrepreneurs in rural areas.",
    },
    {
      icon: TrendingUp,
      title: "Track Community Progress",
      description: "Monitor your savings growth and see how your community is progressing together.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-400 via-primary/90 to-amber-400 py-16 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-1/4 -right-10 w-96 h-96 bg-emerald-300/20 rounded-full mix-blend-multiply animate-pulse delay-700"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-300/20 rounded-full mix-blend-multiply animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Logo with enhanced styling */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-white/30 rounded-full animate-ping"></div>
            </div>
            <Image
              src="/logo.png"
              alt="Govisarana Logo"
              width={200}
              height={200}
              className="mx-auto mb-6 rounded-full shadow-2xl border-4 border-white relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent drop-shadow-md">
            Your Community, Your App
          </h1>

          {/* Description with improved readability */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 shadow-xl">
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto text-pretty leading-relaxed">
              Stay connected with the <span className="font-semibold text-amber-100">Govisarana Project</span> through the D-Village app—empowering farmer families and rural communities with tools for growth and sustainable living.
            </p>
          </div>

          {/* Stats with icons and better visual treatment */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <span className="font-medium">4.8 Rating</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Download className="h-5 w-5" />
              <span className="font-medium">1000+ Downloads</span>
            </div>
          </div>

          {/* Call-to-action button */}
          <div className="mt-10">
            <button 
             onClick={() => {
              console.log("Download APK clicked");
              window.location.href = "https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/apk%2Fd-village.apk?alt=media&token=654bd2e7-c5a0-4bfa-aa86-ace65e131545"
            }} 
            className="cursor-pointer bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mx-auto gap-2">
              <Download className="h-5 w-5" />
              Download Now
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-amber-300/30 rounded-lg rotate-45"></div>
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-emerald-300/30 rounded-lg rotate-12"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Rural Communities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your finances, improve your farming, and grow with your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-balance">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Download D-Village App</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get started today and join thousands of families already using D-Village to build a better tomorrow.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://play.google.com/store/apps/details?id=your.app.id"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/app-store.png"
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="h-15"
              />
            </Link>
            <Link href="https://apps.apple.com/app/idyourappid" className="transition-transform hover:scale-105">
              <Image
                src="/playstore.png"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-15"
              />
            </Link>
          </div>

          {/* APK Download */}
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-4">Or download directly for Android devices:</p>
            <Button onClick={() => {
              console.log("Download APK clicked");
              window.location.href = "https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/apk%2Fd-village.apk?alt=media&token=654bd2e7-c5a0-4bfa-aa86-ace65e131545"
            }} variant="outline" size="lg" className="gap-2 bg-transparent">
              Download APK
            </Button>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See D-Village in Action</h2>
            <p className="text-lg text-muted-foreground">
              Simple, intuitive design made for everyone in the community.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative">
              <Image
                src="/mocup-03.png"
                alt="D-Village App Dashboard"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="relative">
              <Image
                src="/mocup-02.png"
                alt="D-Village App Features"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="relative">
              <Image
                src="/mocup-01.png"
                alt="D-Village App Community"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

        <LegalDocs/>


      {/* Footer CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join 50,000+ Families Already Using Govisarana Tools</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">For a better tomorrow, together.</p>

          {/* Social Media & Contact */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@govisarana.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+94 81 223 9995</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
