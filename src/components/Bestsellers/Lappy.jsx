import { Link } from "react-router-dom";
import Product from "./Product";
import mac from "../Productscards/macbook.jpg";
import { useContext } from "react";
import MyContext from "../../Context/MyContext";
// import Testcard from "../../Testcard"

const Lappy = () => {
  const context = useContext(MyContext);
  const { getAllProduct } = context;

  const filteredProducts = getAllProduct.filter(
    (product) => product.category === "Laptop"
  );

  return (
    <div className="mb-10 mx-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 place-items-center">
        {filteredProducts.slice(0, 8).map((item, index) => {
          const { id, Brand, Description, Price, Product_Name, thumbnail_img } =
            item;
          return (
            <div>
              <Product
                _id={id}
                img={thumbnail_img}
                productName={Product_Name}
                price={Price}
                badge={true}
              />
            </div>
          );
        })}

       
      </div>
    </div>
  );
};

export default Lappy;
