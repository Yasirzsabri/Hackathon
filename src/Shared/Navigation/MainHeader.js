import React from "react";

import "./MainHeader.css";
const MainHeader = (props) => {
  return <header>
    main header under props.
    {props.children}</header>;
};

export default MainHeader;
