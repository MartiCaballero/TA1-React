import React from 'react';
import './App.css';  // Aquí mantienes los estilos para la app general
import Card from './Card';  // Importamos el componente Card

function App() {
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <Card 
        title="Desarrollo del Componente Card" 
        description="Crear un componente en React que muestre información con props." 
        assignedTo="Juan Pérez" 
        startDate="2024-09-10" 
        endDate="2024-09-12" 
      />
      <Card 
        title="Estilos en CSS" 
        description="Aplicar estilos a un componente utilizando un archivo CSS separado." 
        assignedTo="Ana García" 
        startDate="2024-09-11" 
        endDate="2024-09-13" 
      />
      <Card 
        title="Pruebas Unitarias" 
        description="Implementar pruebas unitarias para los componentes creados." 
        assignedTo="Carlos Martínez" 
        startDate="2024-09-12" 
        endDate="2024-09-15" 
      />
    </div>
  );
}

export default App;
