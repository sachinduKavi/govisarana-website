"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Users, Heart, Leaf, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-20 min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/farmer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/50 to-transparent"></div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-xs bg-[#cecece34] p-8 rounded-2xl shadow-2xl border border-white/30">
            
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-gray-900 leading-tight">
              Be Part of the <span className="text-primary">Govisarana</span> Journey
            </h1>
            
            <p className="text-xl text-white text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
              Step into a movement that is transforming rural Sri Lanka. By joining the Govisarana journey, you become a catalyst for empowering farming families, uplifting women entrepreneurs, and building self-reliant, digitally connected villages.
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



    
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
  
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Your involvement—whether as a partner, supporter, or advocate—helps create opportunities for sustainable livelihoods, financial inclusion, and community growth. Together, we can change lives, strengthen local economies, and shape a brighter future for thousands of rural households across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-12">
                <Card className="border-primary/20 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-2">094812239995</p>
                      <p className="text-sm text-muted-foreground">Available Monday - Friday, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-primary/20 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground mb-2">info@govisarana.lk</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-primary/20 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-muted-foreground mb-2">No. 164/1, Kotugodella Street</p>
                      <p className="text-muted-foreground mb-2">Kandy, Sri Lanka</p>
                      <p className="text-sm text-muted-foreground">Visit us during office hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-primary/20 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Office Hours</h3>
                      <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground mb-1">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-primary/20 p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl mb-2">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm Interested In *</Label>
                    <Select onValueChange={(value) => handleInputChange("interest", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="farmer">Joining as a Farmer</SelectItem>
                        <SelectItem value="savings">Savings & Lending Programs</SelectItem>
                        <SelectItem value="organic">Organic Farming Training</SelectItem>
                        <SelectItem value="village-industry">Village Industries</SelectItem>
                        <SelectItem value="export">Export Opportunities</SelectItem>
                        <SelectItem value="partnership">Partnership/Collaboration</SelectItem>
                        <SelectItem value="volunteer">Volunteering</SelectItem>
                        <SelectItem value="donation">Supporting/Donation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your interest or how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ways to Get Involved</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              There are many ways to be part of the Govisarana movement, whether you're looking to benefit from our
              programs or support our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors p-6">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Join as a Farmer</CardTitle>
                <CardDescription className="mb-4">
                  Become part of our farmer network and access training, financial support, and market opportunities.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Free training programs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Access to micro-loans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Market linkage support</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors p-6">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Support Our Mission</CardTitle>
                <CardDescription className="mb-4">
                  Help us expand our reach and impact by supporting our programs through donations or partnerships.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Sponsor farmer families</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Fund training programs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Support infrastructure</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors p-6">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Partner with Us</CardTitle>
                <CardDescription className="mb-4">
                  Collaborate with Govisarana as an organization, business, or institution to create greater impact.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Corporate partnerships</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Research collaborations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Technology integration</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about joining Govisarana and participating in our programs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-lg mb-3">How can I join Govisarana as a farmer?</CardTitle>
                <CardDescription>
                  Contact us through phone, email, or visit our office. We'll assess your needs and match you with
                  suitable programs. Most of our programs are free, and we provide ongoing support throughout your
                  journey.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-lg mb-3">What are the requirements to participate?</CardTitle>
                <CardDescription>
                  We welcome farmers of all sizes and experience levels. The main requirements are commitment to
                  learning, willingness to work in groups, and dedication to sustainable farming practices. No
                  educational qualifications are required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-lg mb-3">Do you charge fees for your programs?</CardTitle>
                <CardDescription>
                  Most of our training and support programs are provided free of charge. For loans through our savings
                  circles, we charge reasonable interest rates that are much lower than commercial banks. All fees are
                  transparent and discussed upfront.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-lg mb-3">How long does it take to see results?</CardTitle>
                <CardDescription>
                  Results vary by program and individual commitment. Many farmers see improvements in their practices
                  within 3-6 months, with significant income increases typically occurring within the first year of
                  participation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-lg mb-3">Can I support Govisarana if I'm not a farmer?</CardTitle>
                <CardDescription>
                  We welcome supporters, volunteers, and partners from all backgrounds. You can contribute through
                  donations, volunteering your skills, purchasing our products, or helping us connect with potential
                  farmers and partners.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join thousands of farmers and supporters who are already part of the Govisarana movement. Together, we're
              building a more prosperous and sustainable future for rural Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
