import type { ThemeMode } from '../types/theme';

type ThemeButtonProps = {
  onThemeChange: () => void;
  theme: ThemeMode;
};

const ThemeButton = ({ onThemeChange, theme }: ThemeButtonProps) => {
  const isLightTheme = theme === 'light';
  const isPressed = !isLightTheme;
  const label = `Switch to ${isLightTheme ? 'dark' : 'light'} theme`;

  return (
    <button
      className="relative flex cursor-pointer items-center rounded-full font-(family-name:--FF) text-[0.75rem] font-semibold text-(--COLOR-TEXT-SECONDARY) motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out"
      type="button"
      aria-label={label}
      aria-pressed={isPressed}
      onClick={onThemeChange}
    >
      {isPressed ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeButton;
