import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
const NavLinks = () => {
  const history = useHistory();
  return (
    <ul>
      nav links on navLinks page
      <li>
        <Link to ={{ pathname: "https://www.google.ca/maps/search/atms+near+me" }} target='_blank' >Find Atm Now

        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
// onClick = {
//   () =>{
//     history.push()
//   }
// }
