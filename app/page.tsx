"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, TrendingUp, Globe, Heart, Sprout, Package, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"

const heroContent = [
  {
    title: "Empowering Rural Communities",
    description:
      "Supporting farmer families through sustainable agricultural practices and community development programs",
  },
  {
    title: "Women's Empowerment in Agriculture",
    description: "Creating opportunities for women in agriculture through value-added processing and entrepreneurship",
  },
  {
    title: "Knowledge & Training Programs",
    description:
      "Providing modern agricultural training and education to enhance farming productivity and sustainability",
  },
  {
    title: "Financial Empowerment",
    description: "Building financial literacy through savings circles and micro-lending programs for rural development",
  },
  {
    title: "Organic Agriculture Excellence",
    description: "Promoting organic farming methods for healthier produce and sustainable environmental practices",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 4875)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Integrated Carousel */}
      <section className="relative py-20 bg-gradient-to-b  min-h-[73vh] from-card/30 to-background overflow-hidden">
        <div className="absolute inset-0 z-0 ">
          <ImageCarousel />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/15">
              <h1 className="text-3xl md:text-5xl font-bold text-balance mb-6 text-white drop-shadow-2xl transition-all duration-700">
                {heroContent[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-pretty mb-8 max-w-2xl mx-auto drop-shadow-lg leading-relaxed transition-all duration-700">
                {heroContent[currentSlide].description}
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-[#752423] hover:bg-[#752423] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Learn More
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Image Carousel Section */}
      {/* Removed as it's integrated into the Hero Section */}

      {/* Impact Stats */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Farmer Families Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-sm text-muted-foreground">Village Ventures Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Loan Repayment Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Export Inquiries Received</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">🌟 Who We Are</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">About Govisarana Project</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              The Govisarana Project is a community-driven agricultural movement in Sri Lanka. We work to uplift farming
              families by combining tradition with modern technology, empowering women, and building sustainable income
              opportunities.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                We believe true progress comes from empowering communities at every level through sustainable
                agriculture, financial inclusion, and innovative farming practices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-lg">Community Building</span>
                  <p className="text-sm text-muted-foreground">Organizing families into supportive groups</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-lg">Women Empowerment</span>
                  <p className="text-sm text-muted-foreground">Training and micro-loans for household industries</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Sprout className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-lg">Smart Agriculture</span>
                  <p className="text-sm text-muted-foreground">Modern farming and organic cultivation methods</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="mt-6" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive programs designed to support farmer families at every stage of their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Savings & Lending</CardTitle>
                <CardDescription>
                  Community-based financial programs promoting discipline and access to capital.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Organic Farming</CardTitle>
                <CardDescription>
                  Sustainable, eco-friendly practices that benefit farmers and the environment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Village Industries</CardTitle>
                <CardDescription>
                  Small industries for rural women, fostering entrepreneurship and independence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Value-Added Products</CardTitle>
                <CardDescription>
                  Processing and packaging local goods for better markets and increased income.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/programs">
                Explore All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Direct Marketplace Access</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Govisarana connects farmers directly with local and online markets, ensuring fair prices and reducing
                dependency on middlemen.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <span>Fair pricing for farmers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <span>Online and local market access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Package className="h-4 w-4 text-primary" />
                  </div>
                  <span>Quality organic products</span>
                </div>
              </div>
              <Button size="lg">Explore Marketplace</Button>
            </div>
            <div>
              <img
                src="/sri-lankan-farmers-market-stall-with-fresh-organic.jpg"
                alt="Farmers market stall"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Be part of our journey to uplift rural Sri Lanka. Whether as a farmer, entrepreneur, or supporter, your
              contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 shadow-lg" asChild>
                <Link href="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Get Involved Today
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-background/80 backdrop-blur-sm shadow-lg"
                asChild
              >
                <Link href="/impact">View Our Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
