import { useCallback, useMemo } from 'react';

import { useAppColorScheme } from 'twrnc';

import tw from '~/configs/theme/tw';
import { useThemeStore } from '~/stores/useThemeStore';

const useTheme = () => {
  const { theme, setTheme } = useThemeStore();
  const [colorScheme, , setColorScheme] = useAppColorScheme(tw);

  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);

  const toogleTheme = useCallback(() => {
    const theme = colorScheme === 'light' ? 'dark' : 'light';
    setTheme(theme);
    setColorScheme(theme);
  }, [colorScheme, setColorScheme, setTheme]);

  return {
    isDark,
    theme,
    toogleTheme
  };
};

export default useTheme;
