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
      <section 
        className="relative py-20 min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/harvest.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 from-primary/50 via-primary/50 to-transparent"></div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-xs bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/30">
            
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-gray-900 leading-tight">
              What is <span className="text-primary">Govisarana </span> 
            </h1>
            
            <p className="text-xl text-white text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
              Govisarana, founded in 2018 by Mr. AWS Kumarathunge, is a transformative initiative under the Digital Village vision, empowering rural communities through technology, entrepreneurship, and self reliance.
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

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
              Founded by Mr. AWS Kumarathunge in 2018, Govisarana is a flagship initiative under the Digital Village vision, born from the pilot project in Trincomalee. It is a transformative movement that reimagines rural life by merging technology, entrepreneurship, and community empowerment.
            </p>
            <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
              Govisarana empowers farming families to take charge of their livelihoods, uplifts village women through income-generating activities, and builds resilient local economies. By leveraging digital tools, it connects communities, facilitates smart agricultural practices, and provides access to markets and financial resources.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              More than a project, Govisarana is a bold step toward creating digitally empowered, self-reliant villages, where innovation meets tradition, and every household has the opportunity to grow, prosper, and lead the way in rural development.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                    <Handshake className="h-7 w-7 text-primary mr-3" />
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
            
            <div className="order-1 md:order-2">
              <img
                src="/sri-lankan-farmers-working-together-in-green-field.jpg"
                alt="Smiling farmer families working together in the field"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Value Chain Section */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">🌿 Govisarana Value Chain</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Govisarana Value Chain is a comprehensive framework that transforms rural agriculture into a thriving, sustainable ecosystem. It begins at the farm level, where smallholder farmers cultivate high-quality crops using modern techniques and scientific guidance. These products are then aggregated through Small Economic Centres, ensuring fair pricing, reducing intermediaries, and opening access to local and regional markets.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Women-led enterprises play a central role, adding value to raw produce through processing, packaging, and innovative products, while digital tools track production, quality, and sales in real-time. At the financial level, the Govisarana Bank ensures that farmers and entrepreneurs have access to secure savings, microloans, and capital for small businesses, fostering financial resilience and independence.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                From production to market, from savings to entrepreneurship, the Govisarana Value Chain integrates technology, community organization, and economic empowerment, creating a seamless system that uplifts farming families, strengthens village economies, and exemplifies the vision of a fully connected Digital Village in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-md transition-shadow">
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

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-md transition-shadow">
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
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">💎 Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our values guide every decision and action we take in empowering farming communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-md">
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

              <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-md">
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

              <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-md">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Innovation</CardTitle>
                  <CardDescription>Introducing modern farming, food processing, and marketing methods.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-md">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Self-Reliance</CardTitle>
                  <CardDescription>Encouraging independence from government subsidies and donations.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-md">
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

              <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-md">
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
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🎯 Our Objectives</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                The Govisarana Project aspires to kindle a renaissance in rural life, where the confluence of tradition, technology, and community enterprise forges resilient and prosperous villages. Our objectives are crafted to elevate both individuals and communities, cultivating a future of sustainable growth and empowerment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Objective 1 */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</div>
                    <CardTitle className="text-xl">Empower Agrarian Households</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    To fortify the foundations of rural livelihoods through enlightened agricultural practices, judicious market access, and sustainable income streams.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Objective 2 */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</div>
                    <CardTitle className="text-xl">Champion Women's Enterprise</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    To enkindle the spirit of entrepreneurship among village women, transforming home-grown produce into ventures of dignity, autonomy, and economic influence.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Objective 3 */}
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</div>
                    <CardTitle className="text-xl">Foster Financial Prudence</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    To instill a culture of saving, prudent borrowing, and judicious financial planning, thereby weaving economic security into the social fabric of each village.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Objective 4 */}
              <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</div>
                    <CardTitle className="text-xl">Harness Digital Connectivity</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    To bridge isolation with timely information, strategic communication, and innovative tools that amplify productivity and community cohesion.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Objective 5 */}
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">5</div>
                    <CardTitle className="text-xl">Cultivate Resilient Communities</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    To nurture collaboration, shared learning, and participatory governance, ensuring that villages flourish as self-reliant and harmonious ecosystems.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Objective 6 */}
              <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">6</div>
                    <CardTitle className="text-xl">Scale a Legacy of Transformation</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    To extend the reach of Govisarana from pioneering pilot projects to tens of thousands of households, creating a replicable paradigm of rural advancement.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-10 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground text-lg italic border-t pt-6">
                Through these objectives, Govisarana does not merely seek development; it endeavors to illuminate a path toward enduring prosperity, dignity, and empowerment, setting a benchmark for the evolution of Digital Villages across the nation.
              </p>
            </div>
          </div>

          {/* Our Promise Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">🌱 Our Promise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              At Govisarana, we are committed to empowering rural communities, fostering entrepreneurship, and advancing digital connectivity to build self-reliant villages. Through our initiatives, women-led enterprises thrive, farmers access fair markets, and households gain financial security.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mt-4 leading-relaxed">
              By supporting Govisarana—through partnerships, donations, volunteering, or spreading awareness—you can actively contribute to uplifting Sri Lanka's rural economy and transforming the lives of thousands of farming families. Together, we can create lasting prosperity and shape a brighter future for the nation.
            </p>
          </div>
         

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-6 md:px-8" asChild>
                <Link href="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-6 md:px-8 bg-transparent" asChild>
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}