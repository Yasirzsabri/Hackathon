import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'; 
const NavLinks = () => {
  const history = useHistory();
  return (
    <ul >
      
      <li className = "AA"  >
        <Link to ={{ pathname: "https://www.google.ca/maps/search/atms+Calgary,+AB" }} target='_blank'  >
        <button type="button"  class="btn btn-outline-dark" >
        nearby ATMs
     </button>

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
