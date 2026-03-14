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
      className="relative flex cursor-pointer items-center rounded-sm font-(family-name:--FF) text-[clamp(0.75rem,0rem+1.5625vw,1rem)] font-semibold text-(--COLOR-TEXT-SECONDARY) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--COLOR-OUTLINE-PRIMARY)"
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
