import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateCreator, create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'device';
type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeState>(
  persist<ThemeState>(
    set => ({
      theme: 'device',
      setTheme: theme => set({ theme })
    }),
    {
      name: '@themeState',
      storage: createJSONStorage(() => AsyncStorage)
    }
  ) as StateCreator<ThemeState, [], [], ThemeState>
);
