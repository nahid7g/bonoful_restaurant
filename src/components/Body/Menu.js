import React, { Component } from "react";
import DISHES from "./../../data/dishes";
import MenuItem from "./MenuItem";

class Menu extends Component {
    state = {
        dishes: DISHES,
    };
    render() {
        return (
            <div className="container">
                {this.state.dishes.map((dish) => (
                    <MenuItem dish={dish} key={dish.id} />
                ))}
            </div>
        );
    }
}

export default Menu;
