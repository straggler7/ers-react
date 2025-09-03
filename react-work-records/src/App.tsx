import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WorkRecordsPage } from './pages/WorkRecordsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WorkRecordsPage />} />
          <Route path="/work-records" element={<WorkRecordsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
