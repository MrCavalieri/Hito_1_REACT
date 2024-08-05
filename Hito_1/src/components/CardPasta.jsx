import "./CardPasta.css";

const CardPasta = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
          <p className="card-text">Precio: ${price.toLocaleString()}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-light text-dark">Ver Más</button>
            <button className="btn btn-dark text-white ml-auto">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPasta;
