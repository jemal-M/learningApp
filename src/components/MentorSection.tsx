
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { BookingModal } from './BookingModal'
const mentors = [
  {
    name: "John Doe",
    expertise: "React Development",
    avatar: "/placeholder-avatar.jpg", // Replace with the actual avatar URL
    fallback: "JD",
  },
  {
    name: "Jane Smith",
    expertise: "UI/UX Design",
    avatar: "/placeholder-avatar.jpg",
    fallback: "JS",
  },
  {
    name: "Alex Johnson",
    expertise: "Backend Development",
    avatar: "/placeholder-avatar.jpg",
    fallback: "AJ",
  },
]

export default function MentorSection() {
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      {mentors.map((mentor, index) => (
        <Card key={index} className="mb-4">
          <CardHeader>
            <CardTitle>Your Mentor</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={mentor.avatar} alt={mentor.name} />
              <AvatarFallback>{mentor.fallback}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{mentor.name}</h3>
              <p className="text-sm text-gray-500">{mentor.expertise}</p>
              <Button className="mt-2" onClick={() => setSelectedMentor(mentor.name)}>
                Book Mentor
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <BookingModal
        isOpen={!!selectedMentor}
        onClose={() => setSelectedMentor(null)}
        mentorName={selectedMentor || ''}
      />
    </div>
  )
}

