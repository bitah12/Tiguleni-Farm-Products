import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const ProductBuyNowPage = () => {
  const [quantity, setQuantity] = useState(1);
  //const { productId } = useParams();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const productId = 100085876;
  const handleBuyNow = async () => {
    const total = quantity * productId;
    console.log(total);
  };
  return (
    <div>
      <Navbar />
      <div className="flex mt-24 ml-[230px] items-center bg-white">
        <div className="flex bg-white rounded-lg  p-5 max-w-4xl">
          <div className="w-[700px] h-[700px] object-cover">
            <img
              src="src/assets/ProductpIs.png"
              alt="Fresh Beef"
              className="rounded-lg"
            />
          </div>

          <div className=" ml-24 mt-8">
            <h1 className="text-2xl font-bold mb-2">Fresh Beef</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg mr-2">★★★★☆</span>
              <span className="text-gray-500">(150 Reviews)</span>
            </div>

            <p className="text-xl text-black mb-2">MWK 6500/kg</p>
            <p className="text-gray-600 mb-4">
              Enjoy premium fresh beef, sourced from local farms.
              <br /> Tender and flavorful, it's perfect for grilling,
              roasting,or stews. Elevate your meals with our quality cuts.
            </p>

            <div className="flex items-center mb-6">
              <button
                onClick={handleDecrease}
                className="bg-white border-l border-t border-b text-black px-3 py-1  border-gray-600 rounded-l "
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="text-center w-12 border-gray-600 border-b  px-2 py-1"
              />
              <button
                onClick={handleIncrease}
                className="bg-red-600 text-white border-b border-r border-t border-gray-600 px-3 py-1 rounded-r focus:outline-none"
              >
                +
              </button>
              <button
                onClick={handleBuyNow}
                className=" ml-4 h-[34px] w-32 bg-red-500 text- text-white rounded-[4px] hover:bg-red-600 focus:outline-none "
              >
                Buy Now
              </button>
              <button className=" ml-4 h-[34px] w-[40px] bg-gray-100 text-black border border-gray-600  rounded-lg hover:bg-red-600 focus:outline-none">
                <i className="fas fa-heart"></i>{" "}
                <FontAwesomeIcon icon={farHeart} />
              </button>
            </div>
            <div className="mt-4">
              <button className="flex text-gray-500 hover:text-gray-700 focus:outline-none">
                <i className="fas fa-comments mr-2"></i>
                Do you have Questions?{" "}
               <Link to='message'> <button className="ml-1 text-red-500">Message</button> </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductBuyNowPage;
