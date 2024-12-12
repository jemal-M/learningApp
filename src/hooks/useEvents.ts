import { useState, useCallback } from 'react';
import { Event } from '../types/calendar';

export function useEvents() {
  const [events, setEvents] = useState<{ [key: string]: Event[] }>({});

  const addEvent = useCallback((date: string, type: string, description: string) => {
    const newEvent: Event = {
      id: Date.now().toString(),
      type,
      description,
      date,
    };

    setEvents((prevEvents) => ({
      ...prevEvents,
      [date]: [...(prevEvents[date] || []), newEvent],
    }));

    return newEvent;
  }, []);

  const getEventsForDate = useCallback((date: string) => {
    return events[date] || [];
  }, [events]);

  return { events, addEvent, getEventsForDate };
}

