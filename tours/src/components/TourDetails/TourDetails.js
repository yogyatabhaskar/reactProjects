function TourDetails({ tour, handleClick }) {
  return (
    <div className="tour">
      <img className="tour__img" src={tour.image} alt={tour.name} />

      <div className="tour__details">
        <h4 className="tour__name">{tour.name}</h4>
        <h4 className="tour__price">$ {tour.price}</h4>
      </div>

      <p className="tour__info">{tour.info}</p>

      <button onClick={handleClick} className="tour__btn">
        Not Intersted
      </button>
    </div>
  );
}

export default TourDetails;
