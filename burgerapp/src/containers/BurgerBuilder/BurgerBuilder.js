import React, { Component } from "react";

import Sux from "../../containers/hoc/Sux";
class BurgerBuilder extends Component {
  render() {
    return (
      <Sux>
        <div>Burger</div>
        <div>Build controls</div>
      </Sux>
    );
  }
}
export default BurgerBuilder;
