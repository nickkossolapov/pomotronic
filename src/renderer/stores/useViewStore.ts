import { create } from 'zustand'
import type { AppState } from './types'

export const useViewStore = create<AppState>((set) => ({
  currentDrawer: 'appDrawerTimer',
  drawerOpen: false,
  autoStartWorkTimer: true,
  autoStartBreakTimer: true,
  alwaysOnTop: false,
  breakAlwaysOnTop: false,
  minToTray: false,
  minToTrayOnClose: false,
  notifications: true,
  os: 'win32',
  theme: 'Pomotroid',

  // Actions
  setCurrentDrawer: (drawer) => set({currentDrawer: drawer}),

  toggleDrawer: () => set((state) => ({drawerOpen: !state.drawerOpen})),

  setAutoStartWorkTimer: (value) => set({autoStartWorkTimer: value}),

  setAutoStartBreakTimer: (value) => set({autoStartBreakTimer: value}),

  setAlwaysOnTop: (value) => set({alwaysOnTop: value}),

  setBreakAlwaysOnTop: (value) => set({breakAlwaysOnTop: value}),

  setMinToTray: (value) => set({minToTray: value}),

  setMinToTrayOnClose: (value) => set({minToTrayOnClose: value}),

  setNotifications: (value) => set({notifications: value}),

  setTheme: (theme) => set({theme}),
}))
