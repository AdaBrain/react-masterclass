import googleLogo from "../assets/img/googlelogo_color.png";

const GoogleLogo = () => {
  return (
    <div id="logo" className="row">
      <img src={googleLogo} alt="google-logo" />
    </div>
  );
};

const TextSearch = () => {
    return (
        <div id="text-search" className="row">            
            <input className="searchbox" type="text" />
        </div>            
    )
}

const SearchZone = () => {
  return (
    <div className="search-zone">
        <GoogleLogo />
        <TextSearch />
    </div>
  )
};

export default SearchZone;
