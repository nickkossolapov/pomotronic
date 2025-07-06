import React from 'react';
import { useUIState, useViewActions } from '../stores';
import styles from './Titlebar.module.css';

// Electron IPC will be available in the renderer process
declare global {
  interface Window {
    electron?: {
      ipcRenderer: {
        send: (channel: string, ...args: unknown[]) => void;
      };
    };
  }
}

const Titlebar: React.FC = () => {
  const { drawerOpen } = useUIState();
  const { toggleDrawer } = useViewActions();

  const handleMinimize = () => {
    if (window.electron?.ipcRenderer) {
      window.electron.ipcRenderer.send('win-minimize');
    }
  };

  const handleClose = () => {
    if (window.electron?.ipcRenderer) {
      window.electron.ipcRenderer.send('win-close');
    }
  };

  const MinimizeIcon: React.FC = () => (
    <svg
      version="1.2"
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 14 2"
      xmlSpace="preserve"
      className={styles.iconMinimize}
    >
      <line
        fill="none"
        stroke="#F6F2EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="1"
        y1="1"
        x2="13"
        y2="1"
      />
    </svg>
  );

  const CloseIcon: React.FC = () => (
    <svg
      version="1.2"
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 12.6 12.6"
      xmlSpace="preserve"
      className={styles.iconClose}
    >
      <line
        fill="none"
        stroke="#F6F2EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="1"
        y1="1"
        x2="11.6"
        y2="11.6"
      />
      <line
        fill="none"
        stroke="#F6F2EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="11.6"
        y1="1"
        x2="1"
        y2="11.6"
      />
    </svg>
  );

  return (
    <nav className={styles.titlebar}>
      {/* Menu toggle button */}
      <div
        className={styles.iconWrapperSingle}
        title="Settings"
        onClick={toggleDrawer}
      >
        <div className={`${styles.menuWrapper} ${drawerOpen ? styles.collapsed : ''}`}>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
        </div>
      </div>

      {/* App title */}
      <h1 className={styles.title}>Pomotroid</h1>

      {/* Window controls */}
      <div className={styles.iconGroup}>
        <div
          className={styles.iconWrapperDoubleLeft}
          onClick={handleMinimize}
        >
          <MinimizeIcon />
        </div>
        <div
          className={styles.iconWrapperDoubleRight}
          onClick={handleClose}
        >
          <CloseIcon />
        </div>
      </div>
    </nav>
  );
};

export default Titlebar;
