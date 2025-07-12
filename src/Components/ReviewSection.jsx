import image from "../assets/person.png";

export function ReviewSection() {
  return (
    <section className="review-section">
      <h2>Customer Reviews</h2>
      <div className="review-summary">
        <div className="rating">
          <span className="stars">★★★★☆</span>
          <span className="rating-count">(120 reviews)</span>
        </div>
        <button className="write-review-btn">Write a Review</button>
      </div>

      <div className="review-list">
        <div className="review">
          <div className="review-header">
            <img
              src= {image}
              alt="John Doe"
              className="review-image"
            />
            <span className="reviewer-name">John Doe</span>
            <span className="review-date">July 10, 2025</span>
          </div>
          <div className="review-rating">★★★★☆</div>
          <p className="review-text">
            Great product! The quality exceeded my expectations, and it fits perfectly.
          </p>
        </div>
        {/* Add more reviews here */}
      </div>
    </section>
  );
}
