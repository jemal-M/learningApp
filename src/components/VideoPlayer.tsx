import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";

const videos = [
  { id: 1, title: "Lesson 1: Introduction", src: "https://youtu.be/5MgBikgcWnY" },
  { id: 2, title: "Lesson 2: Advanced Concepts", src: "https://www.w3schools.com/html/movie.mp4" },
  { id: 3, title: "Lesson 3: Summary", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];
export default function VideoPlayer() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]); // Default to the first video

  return (
    <Card className="mb-8 max-w-5xl mx-auto p-4 w-3/4 h-3/4">
      <CardHeader>
        <CardTitle className="text-center text-2xl md:text-3xl">Current Lesson</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video  bg-slate-950 flex items-center justify-center text-white mb-6 rounded-md overflow-hidden">
          <video
            className="w-full h-full"
            controls
            src={currentVideo.src}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            
            <div
              key={video.id}
              className={`p-3 cursor-pointer rounded-md text-center transition-all ${
                currentVideo.id === video.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentVideo(video)}
            >

              <h3 className="text-sm font-semibold md:text-base">{video.title}</h3>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
