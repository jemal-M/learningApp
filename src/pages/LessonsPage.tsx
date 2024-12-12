import VideoPlayer from '../components/VideoPlayer'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function LessonsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Lessons</h1>
      <VideoPlayer />
      <Card>
        <CardHeader>
          <CardTitle>Lesson List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>1. Introduction to React</li>
            <li>2. Components and Props</li>
            <li>3. State and Lifecycle</li>
            <li>4. Hooks</li>
            <li>5. Routing in React</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

