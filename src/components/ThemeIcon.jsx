import ThemeIconLight from "./ThemeIconLight";
import ThemeIconDark from "./ThemeIconDark";

const ThemeIcon = ({ theme }) => {
  const isLightTheme = theme === "light";
  return <>{isLightTheme ? <ThemeIconLight /> : <ThemeIconDark />}</>;
};

export default ThemeIcon;
