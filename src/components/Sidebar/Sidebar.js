import React from "react";
import { Sidebar } from "primereact/sidebar";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const SidebarComponent = (props) => {
  return (
    <div>
      <div>
        <Sidebar
          visible={props.visibleLeft}
          position="left"
          //   modal={false}
          style={{ width: "280px" }}
          showCloseIcon={false}
        >
          <div className="sidenav__main">
            <div className="sidenav__inner__main">
              <div className="sidenav__scroll ">
                <div className="sidenav__header">
                  <i
                    className="pi pi-times"
                    onClick={() => props.setVisibleLeft(!props.visibleLeft)}
                  ></i>
                </div>
                <NavLink className="sidenav__item first-item" to="/home">
                  HOME
                </NavLink>
                <NavLink className="sidenav__item" to="/about-us">
                  ABOUT US
                </NavLink>
                <NavLink className="sidenav__item" to="/collection">
                  COLLECTION
                </NavLink>
                <NavLink className="sidenav__item" to="/category">
                  CATEGORY
                </NavLink>
                <NavLink className="sidenav__item" to="/contact-us">
                  CONTACT US
                </NavLink>
                <div className="sidenav__items">Login</div>
                <div className="sidenav__items social-media-icons">
                  <i
                    className="pi pi-instagram"
                    style={{
                      border: "1px solid #e6eaea",
                      padding: "20px",
                      borderRight: "none",
                    }}
                  ></i>
                  <i
                    className="pi pi-facebook"
                    style={{
                      border: "1px solid #e6eaea",
                      padding: "20px",
                      borderRight: "none",
                    }}
                  ></i>
                  <i
                    className="pi pi-youtube"
                    style={{ border: "1px solid #e6eaea", padding: "20px" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default SidebarComponent;
