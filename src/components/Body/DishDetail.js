import React from "react";
import "./MenuItem.css";
import {
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
} from "reactstrap";
import LoadComments from "./LoadComments";

const DishDetail = (props) => {
    const { image, name, catagory, label, price, description, comments } =
        props.dish;
    return (
        <div className="dish-detail">
            <Card>
                <CardImg
                    className="card-img"
                    width="100%"
                    src={image}
                    alt={name}
                />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>
                        <p>{description}</p>
                        <p>{price} /-</p>
                    </CardText>
                    <hr />
                    <LoadComments comments={comments} />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;
