import SearchBtn from "../elements/SearchBtn";

const SearchPanal = () => {
  return (
    <div className="container">
      <div className="search-panal">
        <SearchBtn label="Google Search" />
        <SearchBtn label="I'm feeling Lucky" />
      </div>
      <div className="search-panal-text">
        <span className="subtext">
          Google offered in:
          <a className="lang-link" href="/">ภาษาไทย</a>
        </span>
      </div>
    </div>
  );
};

export default SearchPanal;
