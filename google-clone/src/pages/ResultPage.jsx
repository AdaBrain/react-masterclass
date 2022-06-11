// Assets
import googleLogo from "../assets/img/googlelogo_color.png";

// Internal Components
import ResultCard from "../elements/ResultCard";
import Navbar from "../components/Navbar";
import { TextSearch } from "../components/SearchZone";

// External Components
import { Link } from "react-router-dom";

const ResultPanel = () => {
  return (
    <div className="result-panel">
      <div className="logo-container">
        <Link to="/">
          <img className="logo-sm" src={googleLogo} alt="logo-sm" />
        </Link>
      </div>
      <div className="">
        <TextSearch />
      </div>
      <Navbar isResultPage={true} />
    </div>
  );
};

const RenderResultCards = () => {
  const results = [
    {
      urlText: "https://adabrain.com",
      title: "Adabrain.TV: The best programming training in the WORLD!!!",
      subtitle: `React · Declarative. React makes it painless to create interactive UIs.
      · Component-Based. Build encapsulated components that manage their own
      state, then compose ...`,
    },
    {
      urlText: "https://adabrain.com",
      title: "Google.TV: The best programming training in the WORLD!!!",
      subtitle: `React · Declarative. React makes it painless to create interactive UIs.
      · Component-Based. Build encapsulated components that manage their own
      state, then compose ...`,
    },
    {
      urlText: "https://adabrain.com",
      title:
        "BeBalance Clinic.TV: The best programming training in the WORLD!!!",
      subtitle: `React · Declarative. React makes it painless to create interactive UIs.
      · Component-Based. Build encapsulated components that manage their own
      state, then compose ...`,
    },
  ];

  return results.map((res, idx) => (
    <ResultCard
      key={idx}
      urlText={res.urlText}
      title={res.title}
      subtitle={res.subtitle}
    />
  ));
};

const ResultPage = () => {
  return (
    <div className="result-page">
      <ResultPanel />

      <div className="show-result-zone" style={{ marginLeft: "7.5em" }}>
        <RenderResultCards />
      </div>
    </div>
  );
};

export default ResultPage;
