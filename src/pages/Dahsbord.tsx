
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../components/ui/chart"
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts'

// Placeholder data - replace with your actual data
const userData = [
  { month: 'Jan', users: 400 },
  { month: 'Feb', users: 600 },
  { month: 'Mar', users: 800 },
  { month: 'Apr', users: 1000 },
  { month: 'May', users: 1200 },
  { month: 'Jun', users: 1500 },
]

const passFailData = [
  { name: 'Pass', value: 750 },
  { name: 'Fail', value: 250 },
]

const mentorData = [
  { category: 'Junior', mentors: 20 },
  { category: 'Mid-level', mentors: 35 },
  { category: 'Senior', mentors: 25 },
  { category: 'Expert', mentors: 15 },
]

const eventData = [
  { month: 'Jan', events: 20 },
  { month: 'Feb', events: 25 },
  { month: 'Mar', events: 30 },
  { month: 'Apr', events: 35 },
  { month: 'May', events: 40 },
  { month: 'Jun', events: 50 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function Dashboard() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription>User growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              users: {
                label: "Users",
                color: "hsl(var(--chart-1))",
              },
            }} className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pass/Fail Ratio</CardTitle>
            <CardDescription>Overall success rate</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              pass: {
                label: "Pass",
                color: "hsl(var(--chart-2))",
              },
              fail: {
                label: "Fail",
                color: "hsl(var(--chart-3))",
              },
            }} className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={passFailData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {passFailData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mentors by Category</CardTitle>
            <CardDescription>Distribution of mentor expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              mentors: {
                label: "Mentors",
                color: "hsl(var(--chart-4))",
              },
            }} className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mentorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="mentors" fill="var(--color-mentors)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Events Over Time</CardTitle>
            <CardDescription>Monthly event trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              events: {
                label: "Events",
                color: "hsl(var(--chart-5))",
              },
            }} className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={eventData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="events" stroke="var(--color-events)" fill="var(--color-events)" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

