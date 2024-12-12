import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from './ui/button';

export default function EventDetailsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState('');

  const openModal = (event: string) => {
    setEventDetails(event);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => openModal('Event details here')}>View Event</Button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Event Details</h2>
        <p>{eventDetails}</p>
        <Button onClick={closeModal}>Close</Button>
      </Modal>
    </>
  );
}
