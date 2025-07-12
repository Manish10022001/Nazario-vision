import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { ChevronsDown, ChevronsUp } from "lucide-react";

import React, { useState } from "react";
export function CollectionCard({ product }) {
  //filter and modal states
  const [showFilterModal, setShowFilterModal] = useState(false);
  const handleFilterShow = () => setShowFilterModal(true);
  const handleFilterClose = () => setShowFilterModal(false);

  //products card use stateg
  const [visibleCount, setVisibleCount] = useState(8);
  function handleShowMore() {
    setVisibleCount(() => visibleCount + 4);
  }
  function handleShowLess() {
    setVisibleCount(8);
  }

  return (
    <div
      id="products"
      className="product-collection"
      style={{ padding: "20px", marginTop: "20px" }}
    >
      {/* Title and Filter Button Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <h2 className="eyewear-section-title" style={{ margin: 0 }}>
          OUR COLLECTION
        </h2>
        <Button
          variant="primary"
          onClick={handleFilterShow}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            fontWeight: 500,
            fontSize: "0.97em",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(65,105,225,0.08)",
            marginTop: "0px",
          }}
        >
          Filter
        </Button>
      </div>

      <div className="product-collection-row">
        {product.slice(0, visibleCount).map((item, index) => (
          <Card className="card" key={index} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{
                height: "150px",
                width: "100%",
                objectFit: "cover",
              }}
              src={item.image_paths[0]}
            />
            <Card.Body style={{ backgroundColor: "var(--light-blue-3)" }}>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>
                <strong>Model: </strong> {item.model_no} <br />
                <strong>Price: </strong> {item.product_price} <br />
                <strong>Product Type: </strong> {item.product_type} <br />
                <strong>Frame Type: </strong> {item.frame_type} <br />
                <strong>Rating: </strong>
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    style={{
                      color: "#FB8500",
                      fontSize: "2em",
                      letterSpacing: "3px",
                      verticalAlign: "middle",
                    }}
                  >
                    {i < Math.round(item.rating || 0) ? "★" : "☆"}
                  </span>
                ))}
                {item.rating ? ` (${item.rating})` : " (No rating)"}
              </Card.Text>
              <div className="button-container">
                <Button variant="primary" className="action-button">
                  Add to Cart
                </Button>
                <Button
                  className="action-button"
                  variant="secondary"
                  style={{
                    color: "var(--ebony)",
                    backgroundColor: "var(--iron)",
                  }}
                >
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

      {/* filter modal */}
      <Modal show={showFilterModal} onHide={handleFilterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="filter-category">
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option value="">All</option>
                <option value="Eyeglasses">Eyeglasses</option>
                <option value="Sunglasses">Sunglasses</option>
                <option value="Contact Lens">Contact Lens</option>
                <option value="Reading Glasses">Reading Glasses</option>
                <option value="Computer Glasses">Computer Glasses</option>
                <option value="Accessories">Accessories</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="filter-brand">
              <Form.Label>Brand</Form.Label>
              <Form.Select>
                <option value="">All</option>
                <option value="Ray-Ban">Ray-Ban</option>
                <option value="Oakley">Oakley</option>
                <option value="Titan">Titan</option>
                <option value="Fastrack">Fastrack</option>
                <option value="Vogue">Vogue</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="filter-color">
              <Form.Label>Frame Color</Form.Label>
              <Form.Select>
                <option value="">All</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Blue">Blue</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFilterClose}>
            Reset
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              // filter logic
              handleFilterClose();
            }}
          >
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
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
        <Card.Body style={{ backgroundColor: "var(--light-blue-3)" }}>
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
