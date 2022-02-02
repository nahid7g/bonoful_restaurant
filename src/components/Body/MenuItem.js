import React from "react";
import "./MenuItem.css";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = (props) => {
    const { image, name } = props.dish;
    return (
        <div className="menu-item">
            <Card>
                <CardBody>
                    <CardImg
                        className="card-img"
                        width="100%"
                        src={image}
                        alt={name}
                    />
                    <CardImgOverlay>
                        <CardTitle
                            className="card-title"
                            onClick={() => props.onDishSelect(props.dish)}
                        >
                            {name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;
