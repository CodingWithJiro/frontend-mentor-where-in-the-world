import ThemeIcon from './ThemeIcon';
import ThemeButton from './ThemeButton';
import useTheme from '../hooks/useTheme';

const Theme = () => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <div className="absolute top-4 right-4 flex items-start justify-center gap-1 motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out">
      <ThemeIcon theme={theme} />
      <ThemeButton onThemeChange={handleThemeChange} theme={theme} />
    </div>
  );
};

export default Theme;
