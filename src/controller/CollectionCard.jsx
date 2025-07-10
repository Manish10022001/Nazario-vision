import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { ChevronsDown, ChevronsUp } from "lucide-react";

import React, { useState } from "react";
export function CollectionCard({ product }) {
  const [visibleCount, setVisibleCount] = useState(8);
  function handleShowMore() {
    setVisibleCount(() => visibleCount + 4);
  }
  function handleShowLess() {
    setVisibleCount(8);
  }

  return (
    <div
      className="product-collection"
      style={{ padding: "20px", marginTop: "20px" }}
    >
      <h2 className="eyewear-section-title">OUR COLLECTION</h2>
      <div className="product-collection-row">
        {product.slice(0, visibleCount).map((item, index) => (
          <Card className="card" key={index} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{
                height: "150px",
                width: "90%",
                objectFit: "cover",
                paddingLeft: "30px",
              }}
              src={item.image_paths[0]}
            />
            <Card.Body style={{ backgroundColor: "#c8e7f2" }}>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>
                <strong>Model: </strong> {item.model_no} <br />
                <strong>Price: </strong> {item.product_price} <br />
                <strong>Product Type: </strong> {item.product_type} <br />
                <strong>Frame Type: </strong> {item.frame_type} <br />
              </Card.Text>
              <div className="button-container">
                <Button variant="primary" className="action-button">
                  Add to Cart
                </Button>
                <Button variant="danger" className="action-button">
                  Buy Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          marginTop: "20px",
        }}
      >
        {visibleCount < product.length ? (
          <ChevronsDown onClick={handleShowMore} />
        ) : (
          <ChevronsUp onClick={handleShowLess} />
        )}
      </div>
    </div>
  );
}

{
  /* </div>
<div className="product-collection" style={{padding:"20px"}}>
      <h2 className="eyewear-section-title">OUR COLLECTION</h2>
      <div className="product-collection-row">
        {product.map((item,index) =>(
          <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{
            height: "150px",
            width: "90%",
            objectFit: "cover",
            paddingLeft: "30px",
          }}
          src={product[0].image_paths[0]}
        />
        <Card.Body style={{ backgroundColor: "#c8e7f2" }}>
          <Card.Title>{product[0].brand}</Card.Title>
          <Card.Text>
            <strong>Model: </strong> {product[0].model_no} <br />
            <strong>Price: </strong> {product[0].product_price} <br />
            <strong>Product Type: </strong> {product[0].product_type} <br />
            <strong>Frame Type: </strong> {product[0].frame_type} <br />
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
          <Button variant="primary" style={{ marginLeft: "10px" }}>
            Buy Now
          </Button>
        </Card.Body>
      </Card>
        ))}
      </div> */
}

{
  /* // <div className="product-collection" style={{ padding: "20px" }}>
    //   <h2 className="eyewear-section-title">Our Collection</h2>
    //   <div className="product-collection-row">
    //     {product.map((item, index) => ( */
}
{
  /* //       <Card key={index} style={{ width: "18rem", margin: "10px" }}>
    //         <Card.Img variant="top" src={item.image} />
    //         <Card.Body>
    //           <Card.Title>{item.name}</Card.Title>
    //           <Card.Text>{item.description}</Card.Text>
    //           <Button variant="primary">View Details</Button>
    //         </Card.Body>
    //       </Card>
    //     ))}
    //   </div> */
}
{
  /* // </div> */
}
