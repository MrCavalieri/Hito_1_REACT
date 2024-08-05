import Header from "./Header";
import CardPasta from "./CardPasta";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <CardPasta
            name="Spaghetti Bolognesa"
            price={7950}
            ingredients={[
              "pasta spaghetti",
              "carne",
              "salsa de tomate",
              "queso parmesano",
            ]}
            img="https://nuestrasrecetas.es/wp-content/uploads/2015/03/espaguetis-bolo%C3%B1esa.jpg"
          />
          <CardPasta
            name="Fettuchini Alfredo"
            price={8950}
            ingredients={[
              "pasta fettuccine",
              "salsa Alfredo",
              "pollo",
              "queso parmesano",
            ]}
            img="https://buenprovecho.hn/wp-content/uploads/2020/10/Pasta_Alfredo2.jpeg.jpg"
          />
          <CardPasta
            name="Penne Arrabiata"
            price={6950}
            ingredients={[
              "pasta penne",
              "salsa arrabiata",
              "tomates",
              "ajo",
              "ají",
            ]}
            img="https://orsararecipes.net/wp-content/uploads/2019/12/Penne-Arrabbiata-1024x683.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
