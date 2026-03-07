import ThemeIcon from './ThemeIcon';
import ThemeButton from './ThemeButton';
import useTheme from '../hooks/useTheme';

const Theme = () => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <div className="flex items-center justify-center gap-1">
      <ThemeIcon theme={theme} />
      <ThemeButton onThemeChange={handleThemeChange} theme={theme} />
    </div>
  );
};

export default Theme;
