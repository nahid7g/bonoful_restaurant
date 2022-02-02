import React, { Component } from "react";
import DISHES from "./../../data/dishes";
import "./Menu.css";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
    };
    onDishSelect = (dish) => {
        this.setState({ selectedDish: dish });
    };
    render() {
        let dishDetail = null;
        if (this.state.selectedDish !== null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {this.state.dishes.map((dish) => (
                            <MenuItem
                                onDishSelect={this.onDishSelect}
                                dish={dish}
                                key={dish.id}
                            />
                        ))}
                    </div>
                    <div className="col-6 dish">
                        <div className="dish-detail">{dishDetail}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
