import "./Card.scss";

function Card({ data }) {
  return (
    <>
      {data.map((person) => {
        return (
          <div key={person.id} className="card">
            <img className="card__img" src={person.image} alt={person.name} />

            <div className="card__details">
              <p className="card__name">{person.name}</p>
              <p className="card__age">{person.age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
