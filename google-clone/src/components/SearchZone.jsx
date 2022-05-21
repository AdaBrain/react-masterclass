import googleLogo from "../assets/img/googlelogo_color.png";
import magnifying from "../assets/img/magnifying.svg";
import VoiceIcon from "../elements/VoiceIcon";

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
      <img className="magnifying" src={magnifying} alt="magnifying" />
      <input className="searchbox" type="text" />
      <VoiceIcon />
    </div>
  );
};

const SearchZone = () => {
  return (
    <div className="search-zone">
      <GoogleLogo />
      <TextSearch />
    </div>
  );
};

export default SearchZone;
