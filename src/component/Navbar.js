import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [sideSearch, setSideSearch] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearchClose = () => setSideSearch(false);
  const handleSearchShow = () => setSideSearch(true);

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

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="burger-menu hide">
          <div onClick={handleShow}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="svg-inline--fa fa-bars fa-w-14 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </div>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <ul className="side-menu-list">
              {menuList.map((menu, index) => (
                <li key={index}>
                  <a href="#top">{menu}</a>
                </li>
              ))}
            </ul>
          </Offcanvas>
        </div>
        <div className="side-nav">
          <div className="hide search-menu" onClick={handleSearchShow}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <Offcanvas
            show={sideSearch}
            onHide={handleSearchClose}
            placement={"end"}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <div className="side-search-container">
              <FontAwesomeIcon icon={faSearch} className="side-search-icon" />
              <input
                type="text"
                placeholder="제품검색"
                className="product-search"
                onKeyUp={(e) => search(e)}
              />
            </div>
          </Offcanvas>
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>{authenticate === true ? "로그아웃" : "로그인"}</div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="nav-section" onClick={goToHome}>
          <img src="/images/hnm-logo.svg" width={70} alt="h&m-logo" />
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
              onKeyUp={(e) => search(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
