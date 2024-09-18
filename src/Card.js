import React from 'react';
import './Card.css';
const Card = ({ title, description, assignedTo, startDate, endDate }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p><strong>Descripción:</strong> {description}</p>
      <p><strong>Persona asignada:</strong> {assignedTo}</p>
      <p><strong>Fecha de inicio:</strong> {startDate}</p>
      <p><strong>Fecha de fin:</strong> {endDate}</p>
    </div>
  );
};

export default Card;
