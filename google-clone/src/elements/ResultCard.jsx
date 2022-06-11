const ResultCard = (props) => {
  const { urlText, title, subtitle } = props;
  const resultCardStyle = {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5em",
    width: "48em",
    padding: "2em",
    paddingBottom: "0.2em",
    paddingTop: "0.5em",
  };
  const urlTextStyle = { fontSize: "0.8em" };
  return (
    <div className="result-card" style={resultCardStyle}>
      <div className="url-text" style={urlTextStyle}>        
        {urlText}
      </div>
      <div className="result-title">        
        {title}
      </div>
      <div className="result-subtitle">        
        {subtitle}
      </div>
    </div>
  );
};

export default ResultCard;
