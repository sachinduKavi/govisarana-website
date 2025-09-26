"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Target, TrendingUp, Award, Globe, Lightbulb, Shield, Scale, Sparkles } from "lucide-react"
import { useAppSelector } from "@/hooks/useRedux"
import { RootState } from "@/lib/redux/store"
import { redirect } from "next/navigation"
import { useEffect } from "react"


export default function FounderPage() {
  const siteLock = useAppSelector((state: RootState) => state.siteLockSlice);
  if (!siteLock) {
    redirect("/");
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Leadership
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Founder
            </h1>
        
          </div>

          {/* Founder Profile */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
                <Image
                  src="/founder-aws-kumarathunge.png"
                  alt="AWS Kumarathunge - Founder of Govisarana"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">AWS Kumarathunge</h2>
                <h3>BA.Sp (International Politics) </h3>
                <h3>University of Peradeniya </h3>
                <p className="text-xl text-primary font-semibold mb-4">Founder of The Govisarana Project</p>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-lg text-foreground italic">
                    "The Govisarana Project is a people-centered initiative dedicated to empowering farmer families and
                    rural communities in Sri Lanka."
                  </p>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Years of Service</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">50,000+</div>
                    <div className="text-sm text-muted-foreground">Lives Impacted</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About AWS Kumarathunge</h2>
            <p className="text-lg text-muted-foreground">
              Mr. AWS Kumarathunge, the visionary founder of Digital Village and Govisarana, is a graduate of the University of Peradeniya who chose to dedicate his life to transforming Sri Lanka's rural communities. For over 20 years, he has worked directly with farming families, gaining a profound understanding of the challenges they face—poverty cycles, dependency mindsets, limited market access, and reliance on informal moneylenders.
As a social entrepreneur, Mr. Kumarathunge has pioneered innovative initiatives that empower farmers, women, and youth, creating sustainable livelihoods, promoting financial inclusion, and strengthening local economies. Through his tireless work, he has reached and inspired more than 67,000 rural households across Sri Lanka, raising awareness about opportunities, technology adoption, and self-reliance.
His approach combines hands-on field experience, strategic vision, and community-driven solutions, earning him recognition as one of Sri Lanka's leading champions of rural development. Beyond national borders, he draws inspiration from global innovators and seeks to bring lessons from international best practices to Sri Lanka's countryside, shaping a future where rural communities are digitally empowered, economically resilient, and socially vibrant.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Education & Early Career</h3>
                    <p className="text-muted-foreground">
                      Graduate of University of Peradeniya who chose to dedicate his life to working with village
                      communities after graduation, focusing on understanding and addressing rural challenges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Deep Community Engagement</h3>
                    <p className="text-muted-foreground">
                      Over 20 years of direct involvement with rural families, gaining firsthand understanding of
                      struggles including poverty cycles, dependency mentality, and reliance on money lenders.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Govisarana is Different Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Approach</Badge>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Govisarana is Different</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Govisarana stands apart as a revolutionary model in rural development because it fuses community organization, 
              technology, and economic empowerment into a single, holistic framework.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* Integrated Community Institutions */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Integrated Community Institutions</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Every Farming Village is a living ecosystem with three core institutions: Communications Hub, Small Economic Centre, and Govisarana Bank.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    These institutions operate in tandem to create a self-sustaining village economy.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Digital-First Approach */}
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Digital-First Approach</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Harnesses digital tools to bridge information gaps and facilitate secure transactions.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Provides mobile updates on weather, market prices, and e-commerce opportunities.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Women-Centric Empowerment */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Women-Centric Empowerment</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Women are at the heart of Govisarana, participating in weekly fairs and enterprises.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Fosters financial literacy, confidence, and leadership among rural women.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Financial Inclusion */}
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Financial Inclusion</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Introduces a culture of savings, responsible borrowing, and entrepreneurship support.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Shields families from exploitative moneylenders and enables sustainable financial growth.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Scalable Model */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Scalable Model</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Originated as a pilot in Trincomalee (2018), now a replicable blueprint for nationwide scaling.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Structured small-group system adaptable to diverse rural contexts.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Holistic Development */}
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Holistic Development</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Addresses every link in the rural value chain: from home gardens to markets.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Ensures no aspect of rural life—social, economic, or technological—is left unattended.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Redefining Rural Development</h3>
              <p className="text-lg text-muted-foreground">
                In essence, Govisarana is different because it does not merely aim to develop villages—it seeks to 
                redefine rural development itself, transforming ordinary communities into digitally empowered, 
                economically resilient, and socially vibrant hubs where every household has the opportunity to thrive.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kumarathunge's Guiding Principles </h2>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">"Good Foods for Good Life"</h3>
              <p className="text-lg text-muted-foreground">
                embodies Mr. AWS Kumarathunge's commitment to healthy diets, strong communities, and sustainable agriculture. He champions health and wellness, combating non-communicable diseases through awareness programs, nutrition education, and lifestyle improvements that uplift entire communities.
              </p>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Health & Wellness Focus</h4>
                  <p className="text-muted-foreground">
                    Fighting against non-communicable diseases through comprehensive awareness programs, improved
                    nutrition education, and lifestyle improvements that benefit entire communities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact & Reach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Impact & Reach</h2>
            <p className="text-lg text-muted-foreground">Building a movement that transforms lives across South Asia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">People Connected</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">Dignity</div>
                <div className="text-muted-foreground">Financial Independence</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">Regional</div>
                <div className="text-muted-foreground">Leadership Model</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision for the Future</h3>
              <p className="text-lg text-muted-foreground">
                Our vision is to establish Govisarana as the leading model of community empowerment in South Asia, where rural families can thrive with dignity and achieve lasting financial independence. We aspire to create vibrant, self-reliant villages equipped with modern technology, sustainable agricultural practices, and inclusive economic opportunities.
Through education, digital connectivity, and holistic support, we aim to break cycles of poverty, uplift women and youth, and nurture communities where every household has the tools, knowledge, and confidence to prosper. By expanding this model across Sri Lanka and beyond, Govisarana seeks to inspire a future where rural life is empowered, resilient, and full of opportunity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dedication */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Unwavering Dedication</h2>
              </div>

              <blockquote className="text-xl text-muted-foreground italic leading-relaxed">
                "AWS Kumarathunge continues to dedicate his full time, energy, and vision to ensure farmer families
                stand strong, free from exploitation, and prepared for sustainable prosperity."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}