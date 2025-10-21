// Verifica que no haya código extra y que se importe CooperativaPage correctamente
import React from 'react';
import CooperativaPage from './pages/CooperativaPage'; 
import './App.css'; 

function App() {
  return (
    <div className="App"> 
      {/* Esto debe estar bien */}
      <CooperativaPage />
    </div>
  );
}

export default App;