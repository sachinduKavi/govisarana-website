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
import { useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/lib/redux/store"
import { redirect } from "next/navigation";

export default function ProgramsPage() {
  const siteLock = useAppSelector((state: RootState) => state.siteLockSlice);
  if (!siteLock) {
    redirect("/");
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30">
      {/* Hero Section */}
      <section 
        className="relative py-20 min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/program.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/35 from-primary/50 via-primary/50 to-transparent"></div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-xs bg-white/20 p-8 rounded-2xl shadow-2xl border border-white/30">
            
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-gray-900 leading-tight">
              Empowering  <span className="text-primary">Communities</span> Through Action
            </h1>
           
            <p className="text-xl text-white font-semi-bold text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
              The Govisarana Project implements a wide range of programmes, services, and initiatives to empower 
              farming families, strengthen rural communities, and promote sustainable agricultural development.
              These programmes are designed to address economic, social, and technological needs of member families.
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

      {/* Services Description */}
      <div className="mb-16 text-center mt-20 px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Comprehensive Support for Farming Communities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
          Govisarana offers a suite of integrated programs designed to empower rural communities, 
          strengthen livelihoods, and foster digital inclusion. Each program is carefully crafted to 
          create sustainable impact for farming families, especially women and youth.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
          {/* Community Organization */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-primary text-2xl font-bold mb-2">1</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Community Organization & Small Groups</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Organizes 1,000-household Farming Villages into 40 small groups of 25 families each.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Facilitates peer learning, collaboration, and shared decision-making.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Strengthens community governance and local leadership.
              </li>
            </ul>
          </div>

          {/* Digital Communication */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-primary text-2xl font-bold mb-2">2</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Digital Communication & Knowledge Sharing</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Communications Hubs deliver real-time updates on weather, markets, and modern farming techniques.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Offers virtual training, digital record-keeping, and access to government services.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Connects farmers with experts, enabling informed decisions and improved productivity.
              </li>
            </ul>
          </div>

          {/* Market Access */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-primary text-2xl font-bold mb-2">3</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Market Access & Value Addition</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Small Economic Centres (SEC) aggregate farm produce and provide a platform for fair trade.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Supports women-led enterprises in processing, packaging, and selling value-added products.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Introduces e-commerce and digital marketplaces to expand market reach beyond the village.
              </li>
            </ul>
          </div>

          {/* Financial Inclusion */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-primary text-2xl font-bold mb-2">4</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Financial Inclusion & Entrepreneurship</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Govisarana Bank promotes savings, microloans, and entrepreneurship funding for youth and women.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Encourages responsible borrowing and financial literacy through workshops and digital tools.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Protects families from predatory lending and strengthens economic resilience.
              </li>
            </ul>
          </div>

          {/* Weekly Farmers' Fair */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-primary text-2xl font-bold mb-2">5</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Weekly Farmers' Fair</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                A community marketplace where village women sell produce from home gardens every week.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Generates consistent income and encourages regular savings in Govisarana Bank.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Provides a platform for entrepreneurship, skill development, and community bonding.
              </li>
            </ul>
          </div>

          {/* Scaling & Innovation */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-primary text-2xl font-bold mb-2">6</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Scaling & Innovation</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Pilot-tested in Trincomalee (2018), now expanding to reach 50,000 families.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Integrates digital tools for production tracking, financial transactions, and knowledge dissemination.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Serves as a model for replicable, digitally empowered villages across Sri Lanka.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 max-w-4xl mx-auto mt-8 text-lg leading-relaxed font-medium">
          Through these programs, Govisarana integrates technology, community organization, and economic 
          empowerment to transform rural life, uplift women, and build resilient, self-sufficient villages.
        </p>
      </div>

      {/* Main Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Financial Services */}
            <Card className="border-primary/20 bg-gradient-to-b from-white to-primary/5 hover:border-primary/40 transition-all p-8 shadow-sm hover:shadow-md">
              <CardHeader className="p-0">
                <div className="bg-primary/15 p-4 rounded-lg w-fit mb-6">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4 text-gray-900">Financial Services</CardTitle>
                <CardDescription className="text-base mb-6 text-gray-600">
                   Savings schemes, micro-finance programmes, and affordable loans through the Govisarana Bank.
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Group-based savings with regular contributions</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Low-interest loans for agricultural and household needs</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Financial literacy training and management skills</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Transparent record-keeping and accountability</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg mb-6 border border-primary/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-xs text-primary/80">Repayment Success</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-xs text-primary/80">Active Groups</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Agricultural Support Services */}
            <Card className="border-green-300/30 bg-gradient-to-b from-white to-green-50 hover:border-green-400/50 transition-all p-8 shadow-sm hover:shadow-md">
              <CardHeader className="p-0">
                <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-2xl mb-4 text-gray-900">Agricultural Support Services</CardTitle>
                <CardDescription className="text-base mb-6 text-gray-600">
                  Access to scientific knowledge, modern farming technology, and training programmes for farmers
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">Program Components:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Organic certification support and guidance</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Natural pest control and soil management training</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Composting and bio-fertilizer production</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium market access for organic products</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100/50 p-4 rounded-lg mb-6 border border-green-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-700">300+</div>
                      <div className="text-xs text-green-700/80">Certified Farmers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-700">40%</div>
                      <div className="text-xs text-green-700/80">Income Increase</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Market Linkage Services */}
            <Card className="border-purple-300/30 bg-gradient-to-b from-white to-purple-50 hover:border-purple-400/50 transition-all p-8 shadow-sm hover:shadow-md">
              <CardHeader className="p-0">
                <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
                  <Users className="h-8 w-8 text-purple-700" />
                </div>
                <CardTitle className="text-2xl mb-4 text-gray-900">Market Linkage Services</CardTitle>
                <CardDescription className="text-base mb-6 text-gray-600">
                  Creating reliable markets for farmer products and supporting value-added industries, particularly for rural
                   women
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">Industry Types:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Food processing and preservation</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Handicrafts and traditional arts</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Textile and garment production</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Herbal and cosmetic products</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100/50 p-4 rounded-lg mb-6 border border-purple-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-700">120+</div>
                      <div className="text-xs text-purple-700/80">Active Ventures</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-700">80%</div>
                      <div className="text-xs text-purple-700/80">Women Led</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Value-Added Products */}
            <Card className="border-blue-300/30 bg-gradient-to-b from-white to-blue-50 hover:border-blue-400/50 transition-all p-8 shadow-sm hover:shadow-md">
              <CardHeader className="p-0">
                <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
                  <Package className="h-8 w-8 text-blue-700" />
                </div>
                <CardTitle className="text-2xl mb-4 text-gray-900">Value-Added Products</CardTitle>
                <CardDescription className="text-base mb-6 text-gray-600">
                  Processing and packaging local agricultural goods for better markets, increased farmer income, and
                  global export opportunities.
                </CardDescription>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">Services Provided:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Product development and quality enhancement</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Branding and packaging design</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Market linkage and distribution support</span>
                    </div>
                    <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Export facilitation and international marketing</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100/50 p-4 rounded-lg mb-6 border border-blue-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-700">50+</div>
                      <div className="text-xs text-blue-700/80">Export Inquiries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-700">15+</div>
                      <div className="text-xs text-blue-700/80">Countries Reached</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Supporting Programs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Supporting Initiatives</Badge>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Complementary Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Additional programs that complement our core initiatives and strengthen community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-primary/20 bg-gradient-to-b from-white to-primary/5 hover:border-primary/40 transition-all shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="bg-primary/15 p-3 rounded-lg w-fit mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Training & Education</CardTitle>
                  <CardDescription className="text-gray-600">
                    Comprehensive training programs covering modern farming techniques, financial literacy, and
                    entrepreneurship skills.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-300/30 bg-gradient-to-b from-white to-green-50 hover:border-green-400/50 transition-all shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                    <Sprout className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Smart Agriculture</CardTitle>
                  <CardDescription className="text-gray-600">
                    Introduction of modern cultivation methods, harvesting techniques, and technology integration for
                    improved productivity.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-amber-300/30 bg-gradient-to-b from-white to-amber-50 hover:border-amber-400/50 transition-all shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="bg-amber-100 p-3 rounded-lg w-fit mb-4">
                    <TrendingUp className="h-6 w-6 text-amber-700" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Market Linkage</CardTitle>
                  <CardDescription className="text-gray-600">
                    Connecting farmers directly with buyers, reducing middleman dependency, and ensuring fair pricing
                    for agricultural products.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-purple-300/30 bg-gradient-to-b from-white to-purple-50 hover:border-purple-400/50 transition-all shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                    <Heart className="h-6 w-6 text-purple-700" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Women Empowerment</CardTitle>
                  <CardDescription className="text-gray-600">
                    Specialized programs focusing on women's leadership development, skill building, and economic
                    independence within farming families.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-300/30 bg-gradient-to-b from-white to-blue-50 hover:border-blue-400/50 transition-all shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                    <Globe className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Digital Integration</CardTitle>
                  <CardDescription className="text-gray-600">
                    Creating digital databases and systems for better agricultural planning, management, and market
                    access.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-indigo-300/30 bg-gradient-to-b from-white to-indigo-50 hover:border-indigo-400/50 transition-all shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                    <Handshake className="h-6 w-6 text-indigo-700" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Community Building</CardTitle>
                  <CardDescription className="text-gray-600">
                    Strengthening social bonds through group activities, collective decision-making, and mutual support
                    systems.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Program Impact */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-20 border border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Program Impact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Measurable results from our comprehensive approach to community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/90 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-700 mb-2">Families Empowered</div>
                <div className="text-xs text-primary/80">Across all programs</div>
              </div>

              <div className="text-center p-6 bg-white/90 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-gray-700 mb-2">Income Increase</div>
                <div className="text-xs text-primary/80">Average across participants</div>
              </div>

              <div className="text-center p-6 bg-white/90 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-gray-700 mb-2">Program Completion</div>
                <div className="text-xs text-primary/80">High engagement rate</div>
              </div>

              <div className="text-center p-6 bg-white/90 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-gray-700 mb-2">Villages Covered</div>
                <div className="text-xs text-primary/80">Expanding reach</div>
              </div>
            </div>
          </div>

          {/* How to Join */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 mb-20 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Join Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
              Getting started with Govisarana is simple. We work with individuals, families, and entire communities to
              create customized program approaches that meet specific needs and goals.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-white/90 rounded-lg border border-primary/20">
                <div className="bg-primary/15 p-3 rounded-full w-fit mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Contact Us</h3>
                <p className="text-sm text-gray-600">
                  Reach out through phone, email, or visit our office to express your interest.
                </p>
              </div>

              <div className="p-6 bg-white/90 rounded-lg border border-primary/20">
                <div className="bg-primary/15 p-3 rounded-full w-fit mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Assessment</h3>
                <p className="text-sm text-gray-600">
                  We'll assess your needs and match you with the most suitable programs.
                </p>
              </div>

              <div className="p-6 bg-white/90 rounded-lg border border-primary/20">
                <div className="bg-primary/15 p-3 rounded-full w-fit mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Get Started</h3>
                <p className="text-sm text-gray-600">
                  Begin your journey with training, support, and access to our network.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Ready to Transform Your Agricultural Journey?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Join Our Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-primary border-primary hover:bg-primary/10" asChild>
                <Link href="/impact">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}