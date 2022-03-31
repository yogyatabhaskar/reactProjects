function Card({ data, handleClick }) {
  return data.map((person) => {
    <div className="card">
      <img className="card__img" src={person.image} alt={person.name} />

      <div className="card__details">
        <p>{person.name}</p>
        <p>{person.age}</p>
      </div>

      <button onClick={handleClick}>Clear All</button>
    </div>;
  });
}

export default Card;
