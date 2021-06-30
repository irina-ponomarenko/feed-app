import React from "react";
import Column from "../sideBarLeft/SideBarLeft";
import CenterColumn from "../centerColumn/CenterColumn";

import "./body.css";

const Body = () => {
    return(
       <div className="container">
           <Column/>
           <CenterColumn/>
       </div>
    )
};

export default Body;