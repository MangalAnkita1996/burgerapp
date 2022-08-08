import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BurgerIngredients.css";

class BurgerIngredients extends Component {
  render() {
    let ingerdients = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingerdients = <div className="bread-bottom"></div>;
        break;

      case "bread-top":
        ingerdients = (
          <div className="bread-top">
            <div className="seeds"></div>
            <div className="seeds2"></div>
          </div>
        );
        break;

      case "meat":
        ingerdients = <div className="meat"></div>;
        break;

      case "salad":
        ingerdients = <div className="salad"></div>;
        break;

      case "cheese":
        ingerdients = <div className="cheese"></div>;
        break;

      case "bacon":
        ingerdients = <div className="bacon"></div>;
        break;

      default:
        ingerdients = null;
    }

    return ingerdients;
  }
}

BurgerIngredients.PropTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
