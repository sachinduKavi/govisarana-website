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
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">📊 Our Impact</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Transforming Lives, <span className="text-primary">Measuring Success</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Real results from our commitment to empowering farmer families across Sri Lanka through sustainable
              agriculture and community development.
            </p>
          </div>
        </div>
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
                  <CardTitle className="text-xl">Savings & Lending Impact</CardTitle>
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
                  <CardTitle className="text-xl">Organic Farming Impact</CardTitle>
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
                  <CardTitle className="text-xl">Village Industries Impact</CardTitle>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from farmers and families whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Kamala's Organic Success</CardTitle>
                    <CardDescription className="text-sm">Kandy District</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  "After joining Govisarana's organic farming program, my family's income increased by 70%. We now
                  export our organic spices to three countries and have become a model farm in our village."
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
                    <CardTitle className="text-lg">Priya's Village Industry</CardTitle>
                    <CardDescription className="text-sm">Matara District</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  "The village industries program helped me start a food processing business. I now employ 12 women from
                  my village and we produce value-added coconut products for local and international markets."
                </CardDescription>
                <div className="flex items-center space-x-4 mt-4 text-xs text-muted-foreground">
                  <span>• 12 jobs created</span>
                  <span>• International sales</span>
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
                    <CardTitle className="text-lg">Sunil's Savings Group</CardTitle>
                    <CardDescription className="text-sm">Galle District</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  "Our savings group has helped 25 families in the village. We've collectively saved over LKR 2 million
                  and provided loans for education, healthcare, and business development without any external debt."
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
