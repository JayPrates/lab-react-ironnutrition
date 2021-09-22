import React from 'react'
import { Card, Col, Divider, Button, Row } from "antd";

function FoodBox({ food }) {

    return (
            <Col>
                <Card
                    title={food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                    <img src={food.image} height={60} />
                    <p>Calories: {food.calories}</p>
                    <p>Servings: {food.servings}</p>
                    <p>
                        <b>Total Calories: {food.calories * food.servings} </b> kcal
                    </p>
                </Card>
            </Col>
    )
}

export default FoodBox;