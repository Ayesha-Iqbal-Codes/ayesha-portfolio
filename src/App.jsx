// src/App.jsx
import Homepage from './pages/Home';
import { Analytics } from "@vercel/analytics/react";


const App = () => {
  return (
    <div className="relative">
      
      <Homepage />
      <Analytics />
    </div>
  );
};

export default App;