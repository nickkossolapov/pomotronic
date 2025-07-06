import styles from './Titlebar.module.css';

interface TitlebarProps {
  drawerOpen: boolean;
  onToggleDrawer: () => void;
  onMinimize: () => void;
  onClose: () => void;
}

function Titlebar({ drawerOpen, onToggleDrawer, onMinimize, onClose }: TitlebarProps) {
  return (
    <nav className={styles.titlebar}>
      {/* menu */}
      <div
        className={`${styles.iconWrapper} ${styles.iconWrapperTitlebar} ${styles.iconWrapperSingle}`}
        style={{ position: 'absolute' }}
        title="Settings"
        onClick={onToggleDrawer}
      >
        <div className={`${styles.menuWrapper} ${drawerOpen ? styles.isCollapsed : ''}`}>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
        </div>
      </div>

      <h1 className={styles.title}>Pomotroid</h1>

      <div className={styles.iconGroup} style={{ position: 'absolute', top: 0, right: 0 }}>
        <div
          className={`${styles.iconWrapper} ${styles.iconWrapperTitlebar} ${styles.iconWrapperDoubleLeft}`}
          style={{ paddingLeft: '18px' }}
          onClick={onMinimize}
        >
          {/* minimize */}
          <svg
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 14 2"
            xmlSpace="preserve"
            width="15px"
            height="20px"
            className={`${styles.icon} ${styles.iconMinimize}`}
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
        </div>
        <div
          className={`${styles.iconWrapper} ${styles.iconWrapperTitlebar} ${styles.iconWrapperDoubleRight}`}
          style={{ paddingRight: '18px' }}
          onClick={onClose}
        >
          {/* close */}
          <svg
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 12.6 12.6"
            xmlSpace="preserve"
            height="15px"
            className={`${styles.icon} ${styles.iconClose}`}
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
        </div>
      </div>
    </nav>
  );
}

export default Titlebar;
