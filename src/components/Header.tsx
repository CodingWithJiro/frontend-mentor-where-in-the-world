import Theme from './Theme';

const Header = () => {
  return (
    <header>
      <h1 className="font-(family-name:--FF) text-[0.865rem] font-extrabold text-(--COLOR-TEXT-PRIMARY) motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out">
        Where in the world?
      </h1>
      <Theme />
    </header>
  );
};

export default Header;
