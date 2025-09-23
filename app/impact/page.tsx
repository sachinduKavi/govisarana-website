import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Heart,
  Leaf,
  Package,
  Award,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-20 min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/impact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay for better text readability  bg-gradient-to-t */}
        <div className="absolute inset-0 bg-black/35 from-primary/50 via-primary/50 to-transparent"></div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-xs bg-white/20 p-8 rounded-2xl shadow-2xl border border-white/30">
            
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-gray-900 leading-tight">
              Transforming Lives, <span className="text-primary">Measuring Success</span>
            </h1>
            
            
            <p className="text-xl text-white font-semi-bold text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
              Real results from our commitment to empowering farmer families across Sri Lanka through sustainable agriculture and community development.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-primary border-primary hover:bg-primary/10">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>



      

      {/* Key Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Impact by Numbers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quantifiable results that demonstrate the effectiveness of our programs and the positive change we're
              creating in rural communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 text-center">
              <CardHeader>
                <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mb-2">500+</CardTitle>
                <CardDescription className="text-base font-medium">Farmer Families Empowered</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Across 25+ villages in Sri Lanka</p>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 text-center">
              <CardHeader>
                <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mb-2">60%</CardTitle>
                <CardDescription className="text-base font-medium">Average Income Increase</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Within first year of participation</p>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 text-center">
              <CardHeader>
                <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mb-2">95%</CardTitle>
                <CardDescription className="text-base font-medium">Loan Repayment Success</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Demonstrating financial responsibility</p>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 text-center">
              <CardHeader>
                <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mb-2">50+</CardTitle>
                <CardDescription className="text-base font-medium">Export Inquiries</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">From 15+ countries worldwide</p>
              </CardHeader>
            </Card>
          </div>

          {/* Additional Statistics */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">120+</div>
              <div className="text-sm text-muted-foreground">Village Ventures</div>
            </div>

            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">300+</div>
              <div className="text-sm text-muted-foreground">Organic Farmers</div>
            </div>

            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Savings Groups</div>
            </div>

            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">80%</div>
              <div className="text-sm text-muted-foreground">Women Leadership</div>
            </div>

            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Villages Reached</div>
            </div>

            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program-Specific Impact */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Impact Across Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each of our programs contributes to the overall transformation of farming communities in unique and
              measurable ways.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Savings & Lending Impact */}
            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Financial Services Impact</CardTitle>
                </div>
              </CardHeader>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Active Savings Groups</span>
                  <span className="text-lg font-bold text-primary">200+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Total Savings Accumulated</span>
                  <span className="text-lg font-bold text-primary">LKR 50M+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Loans Disbursed</span>
                  <span className="text-lg font-bold text-primary">1,200+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Repayment Success Rate</span>
                  <span className="text-lg font-bold text-primary">95%</span>
                </div>
              </div>
            </Card>

            {/* Organic Farming Impact */}
            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Agricultural Support Impact</CardTitle>
                </div>
              </CardHeader>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Certified Organic Farmers</span>
                  <span className="text-lg font-bold text-primary">300+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Organic Land Coverage</span>
                  <span className="text-lg font-bold text-primary">2,500 acres</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Premium Price Increase</span>
                  <span className="text-lg font-bold text-primary">40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Chemical Reduction</span>
                  <span className="text-lg font-bold text-primary">85%</span>
                </div>
              </div>
            </Card>

            {/* Village Industries Impact */}
            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Market Linkage Services Impact</CardTitle>
                </div>
              </CardHeader>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Active Ventures</span>
                  <span className="text-lg font-bold text-primary">120+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Women Entrepreneurs</span>
                  <span className="text-lg font-bold text-primary">350+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Monthly Revenue Generated</span>
                  <span className="text-lg font-bold text-primary">LKR 8M+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Job Creation</span>
                  <span className="text-lg font-bold text-primary">800+</span>
                </div>
              </div>
            </Card>

            {/* Value-Added Products Impact */}
            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Value-Added Products Impact</CardTitle>
                </div>
              </CardHeader>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Products Developed</span>
                  <span className="text-lg font-bold text-primary">75+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Export Inquiries</span>
                  <span className="text-lg font-bold text-primary">50+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Countries Reached</span>
                  <span className="text-lg font-bold text-primary">15+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm font-medium">Value Addition Increase</span>
                  <span className="text-lg font-bold text-primary">200%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto ">
              The success of the Govisarana Project is best reflected in the voices of its members. Through their experiences, we can see how collective strength, financial empowerment, and sustainable farming practices have transformed lives across our farming villages. These testimonials highlight the true impact of Govisarana.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Mrs. Kamala Perera </CardTitle>
                    <CardDescription className="text-sm">Govigama 3</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed text-justify">
                  "As a mother of three, I struggled to earn a steady income. Through Govisarana’s women empowerment initiatives, I received training in food processing and was provided with raw materials to start a small-scale industry. Today, I not only earn enough to support my family but also employ two other women from my village."
                </CardDescription>
                <div className="flex items-center space-x-4 mt-4 text-xs text-muted-foreground">
                  <span>• 70% income increase</span>
                  <span>• 3 export markets</span>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Mr. Sunil Fernando </CardTitle>
                    <CardDescription className="text-sm">Govigama 5</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed text-justify">
                  "I used to depend on money lenders and fell into debt often. Govisarana Bank gave me access to microfinance at affordable rates and also guided me on financial discipline. With this support, I was able to buy seeds, harvest a better yield, and repay my loans on time. Now, I am debt-free and confident about my future."
                </CardDescription>
                <div className="flex items-center space-x-4 mt-4 text-xs text-muted-foreground">
                  <span>• 12 jobs created</span>
                  <span>• International sales</span>
                </div>
              </CardHeader>
            </Card>
            

            

          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Youth Group </CardTitle>
                    <CardDescription className="text-sm">Govigama 8</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed text-justify">
                  "A group of us young farmers joined Govisarana’s youth entrepreneurship initiative. We received training in modern farming techniques and support to establish a collective farming project. This has given us a stable income and renewed hope to stay in our village without migrating to cities for work."
                </CardDescription>
                <div className="flex items-center space-x-4 mt-20 text-xs text-muted-foreground">
                  <span>• 25 families helped</span>
                  <span>• LKR 2M saved</span>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Women’s Savings Circle  </CardTitle>
                    <CardDescription className="text-sm">Govigama 10</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed text-justify">
                  "Before Govisarana, we had no habit of saving. With the introduction of group savings programmes, we now contribute a small amount every month. Over time, these savings helped us build a fund that we use for emergencies, education, and small investments. It has brought us financial security and unity as a community.
                  These stories represent only a small part of Govisarana’s journey. Every farming family has a unique story of progress, resilience, and empowerment, showing how the Govisarana Project continues to transform rural Sri Lanka."
                </CardDescription>
                <div className="flex items-center space-x-4 mt-4 text-xs text-muted-foreground">
                  <span>• 25 families helped</span>
                  <span>• LKR 2M saved</span>
                </div>
              </CardHeader>
            </Card>
            </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Environmental Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to sustainable agriculture creates positive environmental outcomes alongside economic
              benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-primary/20 text-center p-6">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">85%</CardTitle>
                <CardDescription className="font-medium">Chemical Reduction</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Across participating farms</p>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 text-center p-6">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">2,500</CardTitle>
                <CardDescription className="font-medium">Acres Organic</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Certified organic farmland</p>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 text-center p-6">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">100%</CardTitle>
                <CardDescription className="font-medium">Safe Food</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Chemical-free production</p>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 text-center p-6">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">50+</CardTitle>
                <CardDescription className="font-medium">Biodiversity Projects</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Conservation initiatives</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Future Goals & Targets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our vision for the next phase of growth and the ambitious targets we're working toward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-primary/20 p-8">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl mb-6">2025 Targets</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>1,000 farmer families empowered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>50 villages covered across Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>5,000 acres under organic cultivation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>200 village industries established</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Export to 25+ countries</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 p-8">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl mb-6">Long-term Vision</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Self-sustaining agricultural communities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Zero dependency on external subsidies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Global recognition for Sri Lankan organic products</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Model replication in other developing countries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Complete digital integration of rural agriculture</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Be Part of Our Growing Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
              Join us in creating lasting change in rural Sri Lanka. Whether as a farmer, supporter, or partner, your
              involvement helps us reach more families and create greater impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/programs">
                  Join Our Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/contact">Support Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}