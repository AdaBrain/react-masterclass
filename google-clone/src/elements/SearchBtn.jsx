import { Link } from "react-router-dom";

const SearchBtn = (props) => {
  let { label, path } = props;

  return (
    <Link to={path}>
      <button className="search-btn">{label}</button>
    </Link>
  )
  
};

export default SearchBtn;
