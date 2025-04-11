import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const goToLogin = () => {
    if (authenticate !== true) {
      navigate("/login");
    } else {
      setAuthenticate(false);
    }
  };

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="nav-container">
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate === true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-section" onClick={goToHome}>
        <img src="/images/hnm-logo.svg" width={100} alt="h&m-logo" />
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="제품검색"
            className="product-search"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
