import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight, BookOpen, Brain, Users } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to Your Learning Journey
        </h1>
        <p className="max-w-[42rem] mx-auto text-muted-foreground text-xl">
          Empower your mind with our interactive lessons, challenging quizzes, and expert mentorship.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/lessons">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/mentors">Meet Mentors</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span>Curated Lessons</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Dive into our carefully crafted video lessons designed to accelerate your learning.</p>
              <Button asChild variant="secondary">
                <Link to="/lessons" className="flex items-center">
                  Explore Lessons <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <span>Interactive Quizzes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Test your knowledge and reinforce your learning with our engaging quizzes.</p>
              <Button asChild variant="secondary">
                <Link to="/quizzes" className="flex items-center">
                  Take a Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                <span>Expert Mentorship</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Get personalized guidance from industry experts to accelerate your growth.</p>
              <Button asChild variant="secondary">
                <Link to="/mentors" className="flex items-center">
                  Meet Mentors <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Adventure?</h2>
        <p className="mb-6 text-lg">Join thousands of learners who have transformed their careers with our platform.</p>
        <Button asChild size="lg" variant="secondary">
          <Link to="/lessons">Get Started Now</Link>
        </Button>
      </section>
    </div>
  );
}

export default Home;
