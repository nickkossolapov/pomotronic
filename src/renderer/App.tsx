import { useState } from 'react';
import './App.module.css';
import Titlebar from './components/Titlebar';

function App(){
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMinimize = () => {
    // TODO: Implement IPC communication with main process
    console.log('Minimize window');
  };

  const handleClose = () => {
    // TODO: Implement IPC communication with main process
    console.log('Close window');
  };

  return (
    <div id="app">
      <Titlebar
        drawerOpen={drawerOpen}
        onToggleDrawer={handleToggleDrawer}
        onMinimize={handleMinimize}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
