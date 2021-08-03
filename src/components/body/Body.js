import React from "react";

import Column from "../sideBarLeft/SideBarLeft";
import CenterColumn from "../centerColumn/CenterColumn";
import ColumnRight from "../sideBarRight/ColumnRight";

import "./body.css";

const Body = () => {
    return(
       <div className="container">
           <Column/>
           <CenterColumn/>
           <ColumnRight/>
       </div>
    )
};

export default Body;