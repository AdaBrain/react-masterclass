import "../assets/css/google.css";
import appsGrid from "../assets/img/grid_icon.svg";
import avatar from "../assets/img/avatar.jpeg";
import { MdOutlineSettings } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

const MenuItem = (props) => {
  return (
    <a href="/">
      <div className="menu-item">{props.content}</div>
    </a>
  );
};

const RenderMenuItems = (props) => {
  const { isResultPage } = props;

  let menu = [];

  const iconStyle = { fontSize: "1.5em" };
  const mainMenu = [
    { content: "Gmail" },
    { content: "Images" },
    {
      content: <TbGridDots style={iconStyle} />,
    },
    { content: <img className="avatar" src={avatar} alt="avatar" /> },
  ];

  const resultMenu = [
    {
      content: <MdOutlineSettings style={iconStyle} />,
    },
    {
      content: <TbGridDots style={iconStyle} />,
    },
    { content: <img className="avatar" src={avatar} alt="avatar" /> },
  ];

  menu = isResultPage ? resultMenu : mainMenu;

  return menu.map((m, idx) => <MenuItem key={idx} content={m.content} />);
};

// ES6 - Arrow function
const Navbar = (props) => {
  const { isResultPage } = props;

  return (
    <div className="navbar-comp">
      <RenderMenuItems isResultPage={isResultPage} />
    </div>
  );
};

export default Navbar;
