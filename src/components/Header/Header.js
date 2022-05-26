import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/images/trends_client.png";
import { Image } from "primereact/image";
import WishList from "../WishList/WishList";
import { Button } from "primereact/button";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import SidebarComponent from "../Sidebar/Sidebar";

const Header = () => {
  const navigate = useNavigate();
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");
  const [visibleRight, setVisibleRight] = useState(false);
  const [visibleLeft, setVisibleLeft] = useState(false);
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Share"
          icon="pi pi-share-alt"
          onClick={() => onHide(name)}
          className="p-button-text share-button"
        />
      </div>
    );
  };
  return (
    <div className="header-main page-width">
      <div className="header-search">
        <span>
          <i
            className="pi pi-bars icon-line sidebar-icon"
            onClick={() => setVisibleLeft(!visibleLeft)}
          ></i>
          <SidebarComponent
            visibleLeft={visibleLeft}
            setVisibleLeft={setVisibleLeft}
          />
        </span>
        <i
          className="pi pi-search icon-size user-mobile"
          onClick={() => {
            navigate("/search");
          }}
        ></i>
      </div>
      <div className="header-menu">
        <div className="logo">
          <Image src={logo} alt="LOGO" width={100} />
        </div>
        <div>
          <ul className="menu-data">
            <li
              onClick={() => {
                navigate("/home");
              }}
            >
              HOME
            </li>
            <li
              onClick={() => {
                navigate("/about-us");
              }}
            >
              ABOUT US
            </li>
            <li
              onClick={() => {
                navigate("/collection");
              }}
            >
              COLLECTION
            </li>
            <li
              onClick={() => {
                navigate("/category");
              }}
            >
              CATEGORY
            </li>
            <li
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              CONTACT US
            </li>
          </ul>
        </div>
      </div>
      <div className="header-user">
        <span>
          <i
            className="pi pi-user icon-size user-mobile"
            onClick={() => {
              navigate("/login");
            }}
          ></i>
        </span>
        <i
          className="pi pi-search icon-size search-mobile"
          onClick={() => {
            navigate("/search");
          }}
        ></i>
        <span>
          <i
            className="pi pi-heart icon-size"
            onClick={() => onClick("displayBasic")}
          ></i>
          <WishList
            displayBasic={displayBasic}
            onClick={onClick}
            onHide={onHide}
            renderFooter={renderFooter}
          />
        </span>
        <span>
          <i
            className="pi pi-shopping-bag icon-size"
            onClick={() => setVisibleRight(!visibleRight)}
          ></i>
          <Cart visibleRight={visibleRight} setVisibleRight={setVisibleRight} />
        </span>
      </div>
    </div>
  );
};

export default Header;
