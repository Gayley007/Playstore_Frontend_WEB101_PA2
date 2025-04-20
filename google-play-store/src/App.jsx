import { Routes, Route, Navigate } from 'react-router-dom';
import AppSection from './apps_page/apps.jsx';
import KidsSection from './kids_page/KidsSection.jsx';
import Game from './game.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/games" />} />
      <Route path="/apps" element={<AppSection />} />
      <Route path="/kids" element={<KidsSection />} />
      <Route path="/games" element={<Game />} />
    </Routes>
  );
}

export default App;
