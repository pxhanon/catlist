import "./topbar.css";
import { Adb } from '@mui/icons-material';

import { Link } from "react-router-dom";

export default function Topbar() {
  return (
      <div className="top">
      <div className="topLeft">
          <img class="w-6 mr-3" src="assets/icon/cat.png" alt="" />
          <Link className="link" to="/intro">
            <span className="brand">catlist</span>
          </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <a href="#header" className="topListItem">home</a>
          <a href="#feature" className="topListItem">feature</a>
          <a href="#howto" className="topListItem">manual</a>
        </ul>
        </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">Log In</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
