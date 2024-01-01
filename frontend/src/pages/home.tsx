import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import dummyImg from "./../assets/banner1.jpg";

const Home = () => {
  // handling add to cart
  const addToCartHandler = () => {};
  return (
    <div className="home">
      {/* banner/Image */}
      <section></section>

      {/* Latest Products */}
      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>

      {/* Display products */}
      <main>
        <ProductCard
          name="MacBook"
          productId="12"
          price={12345}
          stock={12}
          photo={dummyImg}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
