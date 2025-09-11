import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  Leaf,
  Users,
  Package,
  Heart,
  Sprout,
  TrendingUp,
  Globe,
  BookOpen,
  Handshake,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">🌱 Our Programs</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Empowering <span className="text-primary">Communities</span> Through Action
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              The Govisarana Project implements a wide range of programmes, services, and initiatives to empower 
              farming families, strengthen rural communities, and promote sustainable agricultural development.
              These programmes are designed to address economic, social, and technological needs of member families.
            </p>
          </div>
        </div>
      </section>

      {/* Services Description */}
<div className="mb-12 text-center">
  <h2 className="text-3xl font-bold mb-4">Services</h2>
  <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
    Govisarana provides essential services to its members, ensuring that farming families receive the necessary 
    support to improve their livelihoods and become self-reliant. Key services include:
  </p>
</div>


      {/* Main Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Financial Services */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors p-8">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4">Financial Services</CardTitle>
                <CardDescription className="text-base mb-6">
                   Savings schemes, micro-finance programmes, and affordable loans through the Govisarana Bank.
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Key Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Group-based savings with regular contributions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Low-interest loans for agricultural and household needs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Financial literacy training and management skills</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Transparent record-keeping and accountability</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-xs text-muted-foreground">Repayment Success</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-xs text-muted-foreground">Active Groups</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Agricultural Support Services */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors p-8">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4">Agricultural Support Services</CardTitle>
                <CardDescription className="text-base mb-6">
                  Access to scientific knowledge, modern farming technology, and training programmes for farmers
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Program Components:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Organic certification support and guidance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Natural pest control and soil management training</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Composting and bio-fertilizer production</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium market access for organic products</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">300+</div>
                      <div className="text-xs text-muted-foreground">Certified Farmers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-xs text-muted-foreground">Income Increase</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Market Linkage Services */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors p-8">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4">Market Linkage Services</CardTitle>
                <CardDescription className="text-base mb-6">
                  Creating reliable markets for farmer products and supporting value-added industries, particularly for rural
                   women
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Industry Types:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Food processing and preservation</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Handicrafts and traditional arts</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Textile and garment production</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Herbal and cosmetic products</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">120+</div>
                      <div className="text-xs text-muted-foreground">Active Ventures</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">80%</div>
                      <div className="text-xs text-muted-foreground">Women Led</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Value-Added Products */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors p-8">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4">Value-Added Products</CardTitle>
                <CardDescription className="text-base mb-6">
                  Processing and packaging local agricultural goods for better markets, increased farmer income, and
                  global export opportunities.
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Services Provided:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Product development and quality enhancement</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Branding and packaging design</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Market linkage and distribution support</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Export facilitation and international marketing</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-muted-foreground">Export Inquiries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-xs text-muted-foreground">Countries Reached</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Supporting Programs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Supporting Initiatives</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Additional programs that complement our core initiatives and strengthen community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Training & Education</CardTitle>
                  <CardDescription>
                    Comprehensive training programs covering modern farming techniques, financial literacy, and
                    entrepreneurship skills.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Sprout className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Smart Agriculture</CardTitle>
                  <CardDescription>
                    Introduction of modern cultivation methods, harvesting techniques, and technology integration for
                    improved productivity.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Market Linkage</CardTitle>
                  <CardDescription>
                    Connecting farmers directly with buyers, reducing middleman dependency, and ensuring fair pricing
                    for agricultural products.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Women Empowerment</CardTitle>
                  <CardDescription>
                    Specialized programs focusing on women's leadership development, skill building, and economic
                    independence within farming families.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Digital Integration</CardTitle>
                  <CardDescription>
                    Creating digital databases and systems for better agricultural planning, management, and market
                    access.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Community Building</CardTitle>
                  <CardDescription>
                    Strengthening social bonds through group activities, collective decision-making, and mutual support
                    systems.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Program Impact */}
          <div className="bg-card/50 rounded-2xl p-8 mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Program Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Measurable results from our comprehensive approach to community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground mb-2">Families Empowered</div>
                <div className="text-xs text-muted-foreground">Across all programs</div>
              </div>

              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground mb-2">Income Increase</div>
                <div className="text-xs text-muted-foreground">Average across participants</div>
              </div>

              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground mb-2">Program Completion</div>
                <div className="text-xs text-muted-foreground">High engagement rate</div>
              </div>

              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground mb-2">Villages Covered</div>
                <div className="text-xs text-muted-foreground">Expanding reach</div>
              </div>
            </div>
          </div>

          {/* How to Join */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-6">How to Join Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
              Getting started with Govisarana is simple. We work with individuals, families, and entire communities to
              create customized program approaches that meet specific needs and goals.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-background rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  Reach out through phone, email, or visit our office to express your interest.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  We'll assess your needs and match you with the most suitable programs.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Started</h3>
                <p className="text-sm text-muted-foreground">
                  Begin your journey with training, support, and access to our network.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Agricultural Journey?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/contact">
                  Join Our Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/impact">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
