import   { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {   BookOpen, Clipboard, BarChart2, Users, Calendar,LayoutDashboard } from "lucide-react"; // Importing icons
import LessonsPage from "./pages/LessonsPage";
import HomePage from "./pages/Home";
import QuizzesPage from "./pages/QuizzesPage";
import ProgressPage from "./pages/ProgressPage";
import MentorsPage from "./pages/MentorsPage";
import CalendarPage from "./pages/CalendarPage";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "./components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { ThemesWitcher } from "./components/themSwitcher";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from "./pages/Dahsbord";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <ToastContainer />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 bg-slate-100 dark:bg-slate-900 dark:text-white z-50 w-64 shadow-lg text-black transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:translate-x-0`}
        >
          <div className="p-4 flex justify-between z-50 items-center">
            <Link to="/" className="text-2xl font-bold">
              Learning App
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="mt-8 space-y-2">
            <Button variant="ghost" asChild className="w-full justify-start">

              <Link to="/dashboard" onClick={() => setIsSidebarOpen(false)}>
            <LayoutDashboard className="mr-2 h-5 w-5" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link to="/lessons" onClick={() => setIsSidebarOpen(false)}>
                <BookOpen className="mr-2 h-5 w-5" />
                Lessons
              </Link>
            </Button>
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link to="/quizzes" onClick={() => setIsSidebarOpen(false)}>
                <Clipboard className="mr-2 h-5 w-5" />
                Quizzes
              </Link>
            </Button>
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link to="/progress" onClick={() => setIsSidebarOpen(false)}>
                <BarChart2 className="mr-2 h-5 w-5" />
                Progress
              </Link>
            </Button>
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link to="/mentors" onClick={() => setIsSidebarOpen(false)}>
                <Users className="mr-2 h-5 w-5" />
                Mentors
              </Link>
            </Button>
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link to="/calendar" onClick={() => setIsSidebarOpen(false)}>
                <Calendar className="mr-2 h-5 w-5" />
                Calendar
              </Link>
            </Button>
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex flex-col bg-slate-100 dark:bg-slate-900 flex-grow ml-0 md:ml-64 ">
          {/* Navbar */}
          <header className="shadow-lg  p-4 flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              aria-label="Open sidebar"
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-bold hidden md:block">Learning App</h1>
            <div className="flex">

            <ThemesWitcher/>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="/path-to-avatar.jpg" alt="User Avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white dark:bg-slate-900 dark:bg-slate-950 text-gray-800">
                <DropdownMenuItem>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button onClick={() => alert("Logging out...")}>Logout</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </header>
          {/* Main Content */}
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/quizzes" element={<QuizzesPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/mentors" element={<MentorsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
