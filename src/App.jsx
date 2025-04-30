// src/App.jsx
import Homepage from './pages/Home';
import { Analytics } from "@vercel/analytics/react";
import CosmicMouseTrail from './components/CosmicMouseTrail';

const App = () => {
  return (
    <div className="relative">
      <CosmicMouseTrail />
      <Homepage />
      <Analytics />
    </div>
  );
};

export default App;