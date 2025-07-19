import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Icon from "@/components/ui/icon"
import { useState } from "react"

export default function Index() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-montserrat">
              Your Students Are About to Fall in 
              <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> Love</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Three piano pieces that speak their language. No more "boring classical stuff" – 
              just pure Instagram-worthy musical moments that make lessons unforgettable.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Send me the free pieces ✨
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-pink-50 to-transparent"></div>
      </section>

      {/* Why These Pieces Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Why These Pieces Hit Different
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-0 shadow-lg transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon name="Lightbulb" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">The Insight</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    That moment when everything clicks. Mysterious, contemplative, 
                    like scrolling through deep thoughts at 2am.
                  </p>
                  <div className="mt-4 text-center text-sm text-pink-600 font-medium">
                    "This sounds like my thoughts when I can't sleep"
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-0 shadow-lg transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon name="Heart" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Living in the Moment</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Pure joy captured in notes. Uplifting, present, like that perfect 
                    golden hour selfie that needs no filter.
                  </p>
                  <div className="mt-4 text-center text-sm text-purple-600 font-medium">
                    "It feels like summer vacation vibes"
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-100 to-indigo-200 border-0 shadow-lg transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon name="MessageCircle" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Unanswered Message</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    That bittersweet feeling of waiting. Melancholic, relatable, 
                    like leaving someone on read but in musical form.
                  </p>
                  <div className="mt-4 text-center text-sm text-indigo-600 font-medium">
                    "OMG this is literally my life right now"
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Perfect for teenagers and Late Beginning to Intermediate students (2-4 years experience). 
                Each piece tells a story they'll actually want to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Preview Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              See What You're Getting
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="overflow-hidden shadow-2xl">
                  <CardContent className="p-0">
                    <img 
                      src="https://cdn.poehali.dev/files/22e61011-6175-4e4f-9b3d-4bb99c913818.png" 
                      alt="Piano Vibes Collection - Etudes in Instagram Style" 
                      className="w-full h-auto rounded-sm object-contain"
                    />
                  </CardContent>
                </Card>
                <p className="text-center mt-4 text-gray-600 font-medium">
                  Beautifully designed PDFs that your students will want to frame
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Icon name="Play" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Audio Examples</h4>
                        <p className="text-sm text-gray-600">Hear how each piece should sound</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Icon name="BookOpen" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Teaching Notes</h4>
                        <p className="text-sm text-gray-600">Tips to make lessons engaging</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <Icon name="Download" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Instant Download</h4>
                        <p className="text-sm text-gray-600">Ready to print and teach today</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              This Is For You If...
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-700">You're tired of boring method books that make students yawn</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-700">You want pieces that match Gen Z's world and emotions</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-700">You love giving your students aesthetic, meaningful repertoire</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-700">You teach teenagers who think classical music is "too old"</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-700">You want lessons that feel like discovering cool new music</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-700">You believe music should inspire, not just educate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              What's Inside the Package
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <Icon name="FileText" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">3 Printable PDF Scores</h3>
                  <p className="text-gray-600">Professionally designed sheet music that doesn't look like it's from the 90s</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Practice Notes for Teachers</h3>
                  <p className="text-gray-600">Teaching tips to help your students connect emotionally with each piece</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                    <Icon name="Hash" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Titles Your Students Will Talk About</h3>
                  <p className="text-gray-600">Finally, repertoire that makes them excited to practice</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <Icon name="Sparkles" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Aesthetic Design</h3>
                  <p className="text-gray-600">Beautiful layouts that look as good as they sound</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Ready to Transform Your Lessons?
            </h2>
            <p className="text-xl mb-12 text-white/90">
              Get instant access to all three pieces. No spam, just beautiful music for inspiring teachers.
            </p>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/90 border-white/30 text-gray-800 placeholder:text-gray-600 text-lg py-3"
                  />
                  <Button 
                    size="lg" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Send Me The Free Pieces ✨
                  </Button>
                </div>
                <p className="text-sm text-white/80 mt-4">
                  Free download. No credit card required. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Quick Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Is this really free?</h3>
                  <p className="text-gray-600">Yes! Just enter your email and download immediately. No hidden costs, no trials.</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Can I use these in my lessons?</h3>
                  <p className="text-gray-600">Absolutely! That's exactly what they're designed for. Print and teach away.</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">What skill level are these pieces?</h3>
                  <p className="text-gray-600">Perfect for Late Beginning to Intermediate students (2-4 years of lessons).</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Do adult students like these too?</h3>
                  <p className="text-gray-600">Some do! But they're specifically written with teenagers' emotional world in mind.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Let's Make Piano Lessons Inspiring Again
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Your students deserve music that speaks their language. Give them pieces they'll actually want to learn.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Yes, I Want These Pieces ✨
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}