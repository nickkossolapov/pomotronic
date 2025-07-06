import React from 'react';
import './App.css';
import Titlebar from "./components/Titlebar.tsx";

const App: React.FC = () => {
  return (
    <div id="app">
      <Titlebar />
      {/* Other components will be added here as they're migrated */}
    </div>
  );
};

export default App;
