import { useDeviceContext } from 'twrnc';

import tw from '~/configs/theme/tw';
import { useThemeStore } from '~/stores/useThemeStore';

const useDevice = () => {
  const { theme } = useThemeStore();

  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: theme
  });

  return;
};

export default useDevice;
