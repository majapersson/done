import React from "react";
import "./styles/Header.css";

const Header = props => {
  return (
    <header className="Header">
      <h1>
        {props.location !== "/" ? (
          <span onClick={props.goBack}>&lsaquo;</span>
        ) : (
          ""
        )}
        {props.title}
      </h1>
    </header>
  );
};

export default Header;
