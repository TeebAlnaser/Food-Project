interface HeaderProps {}

const Header = () => {
  return (
    // flex will make it horizontal items-center will center all elements in the nav horizontally
    // justify-between will separate the children of this div to the far ends now it has two children
    <div className="flex items-center justify-between py-4">
      {/* first child of the flex */}
      <div className="flex gap-4">
        <div className="hover:scale-105">home</div>
        <div className="hover:scale-105">contact us </div>
        <div className="hover:scale-105">foods</div>
      </div>
      {/* second child of the flex */}
      <div>
        <div className="rounded-full bg-sky-400 h-12 w-12 text-center flex items-center justify-center">
          <p className="text-white">T</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
