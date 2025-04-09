import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img src="/images/hnm-logo.svg" width={100} alt="h&m-logo" />
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
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
