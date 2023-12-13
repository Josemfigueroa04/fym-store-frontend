import SliderImagenes from "../../components/SliderImagenes/SliderImagenes.jsx";
import Card from "../../components/Card/Card.jsx";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context/Context";

const Landing = () => {
  const context = useContext(ShoppingCartContext);

  // Llamar a getProducts cuando el componente se monte
  useEffect(() => {
    context.getProducts();
  }, [context]);

  return (
    <div className="flex flex-col">
      <div>
        <SliderImagenes />
      </div>
      <div className="flex justify-center mt-5 ">

      <h1 className= " text-5xl items-center text">Productos Destacados</h1>
      </div>
      <div className="flex gap-5">
        
        {context.products.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
