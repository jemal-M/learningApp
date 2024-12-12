import ProgressBar from '../components/ProgressBar'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Your Progress</h1>
      <ProgressBar />
      <Card>
        <CardHeader>
          <CardTitle>Completed Lessons</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>✅ Introduction to React</li>
            <li>✅ Components and Props</li>
            <li>⏳ State and Lifecycle</li>
            <li>⏳ Hooks</li>
            <li>⏳ Routing in React</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

