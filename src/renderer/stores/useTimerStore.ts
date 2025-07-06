import { create } from 'zustand'
import type { TimerState, CurrentRound, globalEvents } from './types'

const defaults = {
  workRounds: 4,
  timeLongBreak: 15,
  timeShortBreak: 5,
  timeWork: 25
}

export const useTimerStore = create<TimerState>((set) => ({
  round: 1,
  workRounds: defaults.workRounds,
  totalWorkRounds: 0,
  tickSounds: true,
  tickSoundsDuringBreak: false,
  timeLongBreak: defaults.timeLongBreak,
  timeShortBreak: defaults.timeShortBreak,
  timeWork: defaults.timeWork,
  currentRound: 'work',
  volume: 100,
  globalShortcuts: {
    'call-timer-toggle': 'Control+F1',
    'call-timer-reset': 'Control+F2',
    'call-timer-skip': 'Control+F3'
  },

  incrementRound: () => set((state) => ({round: state.round + 1})),

  resetRound: () => set({round: 1}),

  incrementTotalWorkRounds: () => set((state) => ({totalWorkRounds: state.totalWorkRounds + 1})),

  resetDefaults: () => set({
    workRounds: defaults.workRounds,
    timeLongBreak: defaults.timeLongBreak,
    timeShortBreak: defaults.timeShortBreak,
    timeWork: defaults.timeWork
  }),

  setCurrentRound: (round: CurrentRound) => set({currentRound: round}),

  setTickSounds: (enabled: boolean) => set({tickSounds: enabled}),

  setTickSoundsDuringBreak: (enabled: boolean) => set({tickSoundsDuringBreak: enabled}),

  setTimeLongBreak: (minutes: number) => set({timeLongBreak: minutes}),

  setTimeShortBreak: (minutes: number) => set({timeShortBreak: minutes}),

  setTimeWork: (minutes: number) => set({timeWork: minutes}),

  setWorkRounds: (rounds: number) => set({workRounds: rounds}),

  setVolume: (volume: number) => set({volume}),

  setGlobalShortcuts: (shortcuts: Record<globalEvents, string>) => set({globalShortcuts: shortcuts})
}))
