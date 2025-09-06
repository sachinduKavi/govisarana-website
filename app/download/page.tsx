import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DollarSign,
  Wheat,
  Users,
  TrendingUp,
  Download,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"

export default function DownloadPage() {
  const features = [
    {
      icon: DollarSign,
      title: "Money-saving & Loan Management",
      description: "Track your savings, manage loans, and access financial tools designed for rural communities.",
    },
    {
      icon: Wheat,
      title: "Agricultural Value Addition Guides",
      description: "Learn techniques to add value to your agricultural products and increase your income.",
    },
    {
      icon: Users,
      title: "Women-led Initiatives Support",
      description: "Access resources and support specifically designed for women entrepreneurs in rural areas.",
    },
    {
      icon: TrendingUp,
      title: "Track Community Progress",
      description: "Monitor your savings growth and see how your community is progressing together.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Govisarana Logo"
              width={120}
              height={120}
              className="mx-auto mb-6 rounded-full shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Your Community, Your App</h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Stay connected with the Govisarana Project through the D-Village app—empowering farmer families and rural
            communities with tools for growth and sustainable living.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.8 Rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>100+ Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Rural Communities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your finances, improve your farming, and grow with your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-balance">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Download D-Village App</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get started today and join thousands of families already using D-Village to build a better tomorrow.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://play.google.com/store/apps/details?id=your.app.id"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/app-store.png"
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="h-15"
              />
            </Link>
            <Link href="https://apps.apple.com/app/idyourappid" className="transition-transform hover:scale-105">
              <Image
                src="/playstore.png"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-15"
              />
            </Link>
          </div>

          {/* APK Download */}
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-4">Or download directly for Android devices:</p>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Download APK
            </Button>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See D-Village in Action</h2>
            <p className="text-lg text-muted-foreground">
              Simple, intuitive design made for everyone in the community.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative">
              <Image
                src="/mocup-03.png"
                alt="D-Village App Dashboard"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="relative">
              <Image
                src="/mocup-02.png"
                alt="D-Village App Features"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="relative">
              <Image
                src="/mocup-01.png"
                alt="D-Village App Community"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join 50,000+ Families Already Using Govisarana Tools</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">For a better tomorrow, together.</p>

          {/* Social Media & Contact */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@govisarana.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+94 11 234 5678</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
