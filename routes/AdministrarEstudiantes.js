import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdministrarEstudiantes from './AdministrarEstudiantes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/estudiantes" element={<AdministrarEstudiantes />} />
        {/* Otras rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
