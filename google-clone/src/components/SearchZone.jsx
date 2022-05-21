import googleLogo from "../assets/img/googlelogo_color.png";

const SearchZone = () => {
  return (
    <div className="search-zone">
      <div id="logo" className="row">
        <img src={googleLogo} alt="google-logo" />
      </div>
    </div>
  );
};

export default SearchZone;
