import Theme from './Theme';

const Header = () => {
  return (
    <header className="mb-5.75 bg-(--COLOR-BG-CARD-PRIMARY) pt-7.5 pr-4 pb-6.75 pl-4 shadow-(--SHADOW-CARD-PRIMARY) motion-safe:transition-[color,background-color,box-shadow] motion-safe:duration-150 motion-safe:ease-in-out md:mb-12 md:py-5.5">
      <div className="mx-auto flex items-center justify-between md:max-w-7xl">
        <h1 className="font-(family-name:--FF) text-[clamp(0.875rem,-1rem+3.90625vw,1.5rem)] font-extrabold text-(--COLOR-TEXT-PRIMARY)">
          Where in the world?
        </h1>
        <Theme />
      </div>
    </header>
  );
};

export default Header;
