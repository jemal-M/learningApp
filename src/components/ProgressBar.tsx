import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

export default function ProgressBar() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={33} className="w-full" />
      </CardContent>
    </Card>
  )
}

