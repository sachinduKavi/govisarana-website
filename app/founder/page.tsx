import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Target, TrendingUp, Award, Globe } from "lucide-react"

export default function FounderPage() {
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Meet the visionary behind Govisarana's mission to transform rural communities across Sri Lanka
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Personal Journey</h2>
            <p className="text-lg text-muted-foreground">
              A path dedicated to rural empowerment and community development
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

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vision & Mission</h2>
            <p className="text-lg text-muted-foreground">
              Transforming rural livelihoods through sustainable empowerment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">The Realization</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Families need help breaking free from harmful borrowing habits and dependency cycles that keep them
                  trapped in poverty.
                </p>
                <p className="text-muted-foreground">
                  The solution lies in encouraging income-generating opportunities and building sustainable savings
                  practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                  <h3 className="text-2xl font-bold text-foreground">Founding Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  Govisarana was created as a comprehensive platform to uplift rural livelihoods and create sustainable
                  financial habits, empowering communities to achieve lasting prosperity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Empowering Women */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Empowering Women</h2>
            <p className="text-lg text-muted-foreground">Recognizing women as the backbone of rural development</p>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Women as Main Beneficiaries</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Support Areas:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Saving money and financial literacy
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Loan repayment strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Value addition to agricultural products
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Ultimate Goal:</h4>
                  <p className="text-muted-foreground">
                    Transform farming from a subsistence activity into a profitable livelihood that provides dignity and
                    financial independence for rural families.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Guiding Principles</h2>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">"Good Foods for Good Life"</h3>
              <p className="text-lg text-muted-foreground">
                Promoting healthy diets and strong communities through sustainable agricultural practices
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
                To become the leading community empowerment model in South Asia, creating an excellent environment for
                poor families to rise with dignity and achieve lasting financial independence.
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
