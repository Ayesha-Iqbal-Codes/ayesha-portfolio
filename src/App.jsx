// src/App.jsx
import Homepage from './pages/Home';
import { Analytics } from "@vercel/analytics/react";
import ElegantPointerTrail from './components/ElegantPointerTrail';

const App = () => {
  return (
    <div className="relative">
      <ElegantPointerTrail />
      <Homepage />
      <Analytics />
    </div>
  );
};

export default App;