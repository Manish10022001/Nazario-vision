import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronsDown, ChevronsUp } from "lucide-react";

export function CollectionCard({
  product,
  cartItems,
  setCartItems,
  favorites,
  setFavorites,
}) {
  const [visibleCount, setVisibleCount] = useState(8);

  function handleShowMore() {
    setVisibleCount(visibleCount + 4);
  }
  function handleShowLess() {
    setVisibleCount(8);
  }

  function handleAddToCart(item) {
    {!cartItems.find((cartItem)=>cartItem.model_no === item.model_no) && setCartItems([...cartItems,item])}
    // if (!cartItems.find((cartItem) => cartItem.model_no === item.model_no)) {
    //   setCartItems([...cartItems, item]);
    // }
  }
  function toggleFavorite(item) {
    {
      favorites.find((fav) => fav.model_no === item.model_no)
        ? setFavorites(
            favorites.filter((fav) => fav.model_no !== item.model_no)
          )
        : setFavorites([...favorites, item]);
    }
    // if (favorites.find((fav) => fav.model_no === item.model_no)) {
    //   setFavorites(favorites.filter((fav) => fav.model_no !== item.model_no));
    // } else {
    //   setFavorites([...favorites, item]);
    // }
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
          onClick={() => {}}
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

      <div
        className="product-collection-row"
        style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
      >
        {product.slice(0, visibleCount).map((item, index) => {
          const isFavorited = favorites.find(
            (fav) => fav.model_no === item.model_no
          );

          return (
            <Card
              className="card"
              key={index}
              style={{ width: "18rem", position: "relative" }}
            >
              {/* Favorite heart */}
              <div
                onClick={() => toggleFavorite(item)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  color: isFavorited ? "var(--royal-blue)" : "var(--iron)",
                  userSelect: "none",
                  zIndex: 5,
                }}
                title={
                  isFavorited ? "Remove from favorites" : "Add to favorites"
                }
              >
                {isFavorited ? "❤️" : "🤍"}
              </div>

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
                <div
                  className="button-container"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <Button
                    variant="primary"
                    className="action-button"
                    onClick={() => handleAddToCart(item)}
                  >
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
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          cursor: "pointer",
          color: "var(--royal-blue)",
          fontSize: "1.3rem",
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
