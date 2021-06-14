import React from "react";
import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";


const MainNavigiation = (props) => {
  return (
    <React.Fragment>
      <MainHeader>
        
        <nav>
          
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigiation;
