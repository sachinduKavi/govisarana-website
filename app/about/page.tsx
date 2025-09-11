import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Heart,
  Sprout,
  DollarSign,
  Package,
  Leaf,
  Handshake,
  Lightbulb,
  Shield,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">🌟 Who We Are</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              About <span className="text-primary">Govisarana</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              The Govisarana Project is a community-driven agricultural movement in Sri Lanka, working to uplift farming
              families through sustainable practices, financial empowerment, and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      

      {/* Main About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/sri-lankan-farmers-working-together-in-green-field.jpg"
                alt="Smiling farmer families working together in the field"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Handshake className="h-8 w-8 text-primary mr-3" />
                  Our Approach
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  We believe true progress comes from empowering communities at every level. Our holistic approach
                  combines traditional wisdom with modern innovation to create lasting change.
                </p>
              </div>

              {/* Key Pillars Section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Key Pillars of Our Work:</h3>

                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Farmer Family Groups</span>
                    <p className="text-sm text-muted-foreground">Organizing families into small supportive groups.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Women Empowerment</span>
                    <p className="text-sm text-muted-foreground">
                      Training women in household industries & providing micro-loans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Sprout className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Smart Agriculture</span>
                    <p className="text-sm text-muted-foreground">
                      Introducing modern farming, organic cultivation & technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Financial Inclusion</span>
                    <p className="text-sm text-muted-foreground">
                      Encouraging savings, responsible borrowing & financial literacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Value Addition</span>
                    <p className="text-sm text-muted-foreground">
                      Supporting packaging, branding, marketing & export of organic products.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Leaf className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Safe Food for Safe Life</span>
                    <p className="text-sm text-muted-foreground">
                      Promoting healthy, organic food for healthier families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* History Section */}
     {/* History / Our Journey Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12 shadow-lg">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">🌿 Our Journey</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The Govisarana Project was founded with a vision to uplift rural farming families in Sri Lanka by creating a 
          strong, self-reliant, and prosperous agricultural community. Recognizing the struggles of smallholder farmers—lack of access 
          to markets, financial constraints, outdated farming practices, and exploitation by money lenders—the project was designed 
          to bring practical solutions rooted in community strength. Over time, Govisarana has grown into a structured, people-centered 
          initiative that blends traditional values with modern approaches to agriculture and rural development.
        </p>
      </div>
    </div>
  </div>
</section>


          {/* Vision and Mission Sections */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="text-center">
                <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4">🌍 Our Vision</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  To create a self-reliant, empowered, and sustainable farming community in Sri Lanka, where agriculture
                  becomes a source of prosperity, dignity, and innovation for every farmer family.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="text-center">
                <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4">🎯 Our Mission</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Our mission is to empower farmer families through modern agricultural technology, household
                  industries, and smart farming practices. By enhancing skills, financial literacy, and value-added
                  production, we aim to increase their income, reduce dependency on subsidies, and build a strong
                  foundation for sustainable and organic agriculture.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">💎 Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our values guide every decision and action we take in empowering farming communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Empowerment</CardTitle>
                  <CardDescription>
                    Strengthening farmer families, especially women, with skills and opportunities for income
                    generation.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Sustainability</CardTitle>
                  <CardDescription>
                    Promoting eco-friendly and smart agricultural practices for long-term prosperity.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Innovation</CardTitle>
                  <CardDescription>Introducing modern farming, food processing, and marketing methods.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Self-Reliance</CardTitle>
                  <CardDescription>Encouraging independence from government subsidies and donations.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Integrity</CardTitle>
                  <CardDescription>
                    Maintaining transparency, fairness, and accountability in all activities.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Community Development</CardTitle>
                  <CardDescription>
                    Building strong farmer groups to work collectively and uplift rural communities.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Objectives Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🎯 Our Objectives</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Clear, actionable goals that drive our mission forward and create measurable impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Objective Cards */}
              {/* Repeat your numbered objective cards here as in your original code */}
            </div>
          </div>

          {/* Why Govisarana is Different Section */}
          <div className="bg-card/50 rounded-2xl p-8 mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">💡 Why Govisarana is Different</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Difference Cards */}
            </div>
          </div>

          {/* Our Promise Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-6">🌱 Our Promise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              At Govisarana, we don't just grow crops—we grow people, communities, and futures. By investing in
              knowledge, skills, and modern farming, we are sowing the seeds of prosperity for generations to come.
            </p>
          </div>
          {/* Govigama Structure Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12 shadow-lg">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">🏡 Govigama Structure</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Govisarana is built on a small group system to ensure participation, accountability, and collective progress. 
          1,000 farming families form one <span className="font-medium">'Govigama'</span> (Farmer Village), further divided 
          into 40 small groups of 25 families each.
        </p>

        <div className="space-y-4 text-left">
          <div className="flex items-start space-x-3">
            <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium">Communication Center</span>
              <p className="text-sm text-muted-foreground">For awareness, interaction, and coordination among members.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium">Micro Economic Center</span>
              <p className="text-sm text-muted-foreground">
                For market access, value addition, women-led industries, and modern agricultural knowledge.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Handshake className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium">Govisarana Bank</span>
              <p className="text-sm text-muted-foreground">
                For savings, microfinance, capital for entrepreneurs, and rural financial discipline.
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mt-4">
            Currently, the project works with over 9,000 farming families across 10 villages, with a goal of expanding 
            to 50,000 families in the near future.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
