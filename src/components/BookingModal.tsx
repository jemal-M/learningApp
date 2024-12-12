'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {toast} from   'react-toastify'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  mentorName: string
}

export function BookingModal({ isOpen, onClose, mentorName }: BookingModalProps) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    toast('mentor booked Successfully');
    // Here you would typically send the booking data to your backend
    console.log(`Booking submitted for ${mentorName} on ${date} at ${time}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book a Session with {mentorName}</DialogTitle>
          <DialogDescription>
            Choose a date and time for your mentoring session.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                type="date"
                className="col-span-3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Input
                id="time"
                type="time"
                className="col-span-3"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Book Session</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

