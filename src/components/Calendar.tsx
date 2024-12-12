import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar as CalendarComponent } from "../components/ui/calendar";
import { EventForm } from "./EventForm";
import { useEvents } from "../hooks/useEvents";
import { Event } from "../types/event";
import { toast } from "react-toastify";

export function Calendar() {
  const [date, setDate] = useState<Date>(new Date());
  const { addEvent, getEventsForDate } = useEvents();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleAddEvent = (type: string, description: string) => {
    const formattedDate = formatDate(date);
    addEvent(formattedDate, type, description);
    toast('mentor booked Successfully');

  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const selectedDateFormatted = formatDate(date);
  const selectedDateEvents = getEventsForDate(selectedDateFormatted);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="rounded-md border shadow-lg"
            />
            <div className="mt-4 text-center">
              <EventForm onAddEvent={handleAddEvent} />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-xl mb-4">Events for {selectedDateFormatted}</h4>
            <ul className="space-y-2 max-h-80 overflow-y-auto">
              {selectedDateEvents.length > 0 ? (
                selectedDateEvents.map((event: Event) => (
                  <li key={event.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
                    <div className="font-semibold">{event.type}</div>
                    <p>{event.description}</p>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No events for this date.</li>
              )}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

