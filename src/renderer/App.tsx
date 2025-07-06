import React, { useEffect } from 'react';
import { useViewPreferences } from './stores';
import Titlebar from './components/Titlebar';
import './App.css';

const App: React.FC = () => {
  const { theme } = useViewPreferences();

  // Apply theme on mount and when theme changes
  useEffect(() => {
    if (!theme || theme === 'pomotroid') return;

    // Theme application logic will be implemented later
    // For now, we'll just log the theme change
    console.log('Theme changed to:', theme);
  }, [theme]);

  return (
    <div id="app">
      {/*<Titlebar />*/}
      {/* Other components will be added here as they're migrated */}
    </div>
  );
};

export default App;
