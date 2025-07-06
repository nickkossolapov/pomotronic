// Timer related types
export type TimerType = 'work' | 'shortBreak' | 'longBreak'
export type CurrentRound = 'work' | 'short-break' | 'long-break'

// UI related types
export type DrawerType = 'appDrawerTimer' | 'appDrawerSettings' | 'appDrawerThemes'

export type ThemeType =
  | 'Pomotroid'
  | 'Andromeda'
  | 'Ayu'
  | 'City Lights'
  | 'Dracula'
  | 'DVA'
  | 'GitHub'
  | 'Graphite'
  | 'Gruvbox'
  | 'Monokai'
  | 'Nord'
  | 'One Dark Pro'
  | 'Popping and Locking'
  | 'Solarized Light'
  | 'Spandex'
  | 'Synthwave'
  | 'Tokyo Night Storm'

export type globalEvents =
  | 'call-timer-reset'
  | 'call-timer-toggle'
  | 'call-timer-skip'

// Store state interfaces
export interface AppState {
  // UI State
  currentDrawer: DrawerType
  drawerOpen: boolean

  // Timer Settings
  autoStartWorkTimer: boolean
  autoStartBreakTimer: boolean

  // App Preferences
  alwaysOnTop: boolean
  breakAlwaysOnTop: boolean
  minToTray: boolean
  minToTrayOnClose: boolean
  notifications: boolean

  // System & Theme
  os: string
  theme: ThemeType | string

  // Actions
  setCurrentDrawer: (drawer: DrawerType) => void
  toggleDrawer: () => void
  setAutoStartWorkTimer: (value: boolean) => void
  setAutoStartBreakTimer: (value: boolean) => void
  setAlwaysOnTop: (value: boolean) => void
  setBreakAlwaysOnTop: (value: boolean) => void
  setMinToTray: (value: boolean) => void
  setMinToTrayOnClose: (value: boolean) => void
  setNotifications: (value: boolean) => void
  setTheme: (theme: ThemeType | string) => void
}

export interface TimerState {
  round: number
  workRounds: number
  totalWorkRounds: number
  tickSounds: boolean
  tickSoundsDuringBreak: boolean
  timeLongBreak: number // in minutes
  timeShortBreak: number // in minutes
  timeWork: number // in minutes
  currentRound: CurrentRound
  volume: number
  globalShortcuts: Record<globalEvents, string>

  incrementRound: () => void
  resetRound: () => void
  incrementTotalWorkRounds: () => void
  resetDefaults: () => void
  setCurrentRound: (round: CurrentRound) => void
  setTickSounds: (enabled: boolean) => void
  setTickSoundsDuringBreak: (enabled: boolean) => void
  setTimeLongBreak: (minutes: number) => void
  setTimeShortBreak: (minutes: number) => void
  setTimeWork: (minutes: number) => void
  setWorkRounds: (rounds: number) => void
  setVolume: (volume: number) => void
  setGlobalShortcuts: (shortcuts: Record<string, any>) => void
}

export interface TimerDisplayProps {
  currentTime: number
  totalTime: number
  timerType: TimerType
}

export interface TimerControlsProps {
  isRunning: boolean
  isPaused: boolean
  onStart: () => void
  onPause: () => void
  onReset: () => void
  onStop: () => void
}
