import MentorSection from '../components/MentorSection';

export default function MentorsPage() {
  return (
    <div className="space-y-8 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
        Your Mentors
      </h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <MentorSection />
        <MentorSection />
        <MentorSection />
      </div>
    </div>
  );
}
