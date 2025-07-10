export function EyewearTypeSection({type}){
    return(
        <section id="eyewear-by-type" className="eyewear-type-section">
        <h2 className="eyewear-section-title">
          THE RIGHT EYEWEAR FOR EVERY NEED
        </h2>
        <div className="eyewear-types-row">
          {type.map((item, index) => (
            <div className="eyewear-type-card" key={index}>
              <img src={item.img} alt={item.name} className="eyewear-img" />
              <p className="eyewear-title">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    )
}