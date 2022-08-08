import React from "react";

import Sux from "../../containers/hoc/Sux";
import "./Layout.css";

const layout = (props) => (
  <Sux>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className="Content">{props.children}</main>
  </Sux>
);
export default layout;
