import React from "react";
import { Card,Button } from "react-bootstrap";

{/**utilizing props in the function ProductCard */}

function ProductCard({name,img,price,currency}){

    return(
            <Card style={{width:'18rem'}}>
                <Card.Img variant="top" src={img}  />
                <Card.Body>
                    <Card.Title>
                            {name}
                    </Card.Title>
                    <Card.Text>
                        {price}{currency}
                    </Card.Text>
                    <Button variant="success">Add to Cart</Button>
                </Card.Body>
            </Card>
    )
}
export default ProductCard