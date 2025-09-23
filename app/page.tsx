"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, TrendingUp, Globe, Heart, Sprout, Package, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"
import { redirect } from "next/navigation"


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
      <section className="relative py-20 bg-gradient-to-b min-h-[73vh] from-card/30 to-background overflow-hidden">
        <div className="absolute inset-0 z-0 ">
          <ImageCarousel />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl mx-auto backdrop-blur-xs bg-black/10 p-8 rounded-2xl shadow-2xl border border-white/30">
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
                Digital Village Initiative
              </Badge>
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

      {/* About Govisarana */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Digital Village Initiative
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Govisarana Project</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              A flagship project designed to strengthen rural farming families by combining digital tools, 
              community organization, local market development, and financial inclusion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Structure of a Farming Village</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">1,000 farming families</h4>
                    <p className="text-muted-foreground">Living in one geographic area</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">40 small groups</h4>
                    <p className="text-muted-foreground">25 families each for effective participation and peer learning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Current reach & target</h4>
                    <p className="text-muted-foreground">Currently working with 10 Farming Villages (9,000+ families) and targeting 50,000 families</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Digital Village Initiative Aims</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <span>Bridge the rural-urban digital divide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <span>Digitize communication, markets, and financial services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Leaf className="h-4 w-4 text-primary" />
                  </div>
                  <span>Improve agricultural productivity through smart technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span>Foster inclusive economic growth for women and youth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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


      {/* Programs Preview */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary font-semibold py-1 px-3">
              Our Initiatives
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Under the Digital Village Initiative, Govisarana delivers a suite of integrated programs that strengthen rural farming communities and harness digital tools for inclusive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-primary/15 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group overflow-hidden">
              <CardHeader className="pb-6">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">Community Organization & Capacity Building</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Organizes 1,000-family Farming Villages into 40 small groups for shared learning and cooperation.
                  Trains community leaders and facilitators to manage local institutions effectively.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card className="border-primary/15 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group overflow-hidden">
              <CardHeader className="pb-6">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">Digital Communication & Knowledge Sharing</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Operates Communications Hubs that deliver weather alerts, market prices, and agronomy tips via SMS, apps, and community boards.
                  Hosts virtual workshops and connects farmers with experts and government services.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card className="border-primary/15 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group overflow-hidden">
              <CardHeader className="pb-6">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">Market Access & Value Addition</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Runs Small Economic Centres (SEC) as digitally connected marketplaces.
                  Aggregates produce, negotiates fair prices, and supports women-led value-addition enterprises.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card className="border-primary/15 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group overflow-hidden">
              <CardHeader className="pb-6">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">Financial Inclusion & Entrepreneurship</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Offers secure savings, micro-loans, and youth start-up funding through Govisarana Bank.
                  Provides financial literacy training and protects rural women from predatory lenders.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card className="border-primary/15 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group overflow-hidden">
              <CardHeader className="pb-6">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">Organic Agriculture Excellence</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Promotes organic farming methods for healthier produce and sustainable environmental practices.
                  Provides training and resources for transitioning to organic certification.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card className="border-primary/15 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group overflow-hidden">
              <CardHeader className="pb-6">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">Scaling and Innovation</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Expands to reach 50,000 farming families, replicating successful village models.
                  Integrates emerging digital services such as e-health, e-education, and smart agriculture solutions.
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-full">
              Explore All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>



      {/* Weekly Farmers' Fair Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/farmer-market.jpg"
                alt="Weekly Farmers' Fair"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Women's Empowerment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Weekly Farmers' Fair</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                The Govisarana Weekly Fair is a cornerstone activity in every Farming Village, designed to empower rural women and strengthen household incomes.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span>Women-Led Marketplace: Village women bring fresh produce from their home gardens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <span>Consistent Income: Weekly earnings provide reliable supplementary income</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <span>Financial Inclusion: Linked to Govisarana Bank for savings and micro-loans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <span>Community Spirit: Gathering place for knowledge-sharing and social connection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <span>Digital Integration: Sales tracked via Communications Hub</span>
                </div>
              </div>
              <Button size="lg">Learn About Our Fairs</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Core Digital-Enabled Institutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Under the Digital Village Initiative, Govisarana delivers a suite of integrated programs that strengthen rural farming communities and harness digital tools for inclusive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Communications Hub</CardTitle>
                <CardDescription>
                  Digital platforms (messaging apps, SMS alerts, and community dashboards) connect all households.
                  Shares agronomic advice, weather forecasts, and market price updates.
                  Facilitates virtual training sessions and digital record-keeping.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Small Economic Centre (SEC)</CardTitle>
                <CardDescription>
                  Functions as a digitally connected marketplace and resource center.
                  Uses online tools to aggregate produce, link with buyers, and track transactions.
                  Provides raw materials for women's value-addition industries, and disseminates modern agricultural knowledge.
                  Enables e-commerce pilots for local products.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Govisarana Bank</CardTitle>
                <CardDescription>
                  Employs digital finance solutions to promote savings and responsible borrowing.
                  Offers microfinance and youth entrepreneurship funding through secure mobile transactions.
                  Protects rural women from informal moneylenders by offering fair, transparent credit.
                  Builds financial literacy using interactive apps and digital workshops.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Scaling and Innovation</CardTitle>
                <CardDescription>
                  Expands to reach 50,000 farming families, replicating successful village models.
                  Integrates emerging digital services such as e-health, e-education, and smart agriculture solutions to deepen impact.
                </CardDescription>
              </CardHeader>
            </Card>
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
                src="/market-farmer.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Step into the heart of the Digital Village Initiative by supporting Govisarana—a project that empowers farming families, uplifts village women, and strengthens local economies. By joining our journey, you become part of a movement that connects rural communities with modern technology, sustainable markets, and inclusive financial systems. Together, we can expand from our current 9,000+ families to 50,000 thriving households, transforming villages into vibrant hubs of opportunity and resilience. Whether as a partner, supporter, or advocate, your involvement helps build a future where every farming family can grow, prosper, and lead with confidence.
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