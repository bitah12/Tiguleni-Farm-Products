import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams ,Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { buyNow } from "../../store/paymentsSlice";

const ProductBuyNowPage = ({ feedbacks }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
 // const [loading, setLoading] = useState(true);
  const { productId } = useParams();


console.log(productId)
  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_BASE_URL}/products/buy:?productId=${productId}`);
        //if (!response.ok) throw new Error("Failed to fetch product details");

        const data = await response.json();
        console.log("product", data);
        setProduct(data);

        if (data && data.length > 0) {
          setProduct(data); // Assuming the first element in the array is the product
        } else {
          console.error("No product found in the response");
        }
      } catch (error) {
       // console.error("Error fetching product details:", error);
       // setProduct(null); // In case of error, set product to null to show "Product not found"
      } 
    };

    if (productId) fetchProductDetails();
  }, [productId]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleBuyNow = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const accessToken = localStorage.getItem("token");
console.log({ quantity, productId, accessToken })
    dispatch(buyNow({ quantity, productId, accessToken }))
      .unwrap()
      .then((response) => {
        if (response?.checkout_url) {
          window.location.href = response.checkout_url;
        }
      })
      .catch((error) => {
        console.error("Buy Now Error:", error);
        alert("Failed to initiate payment. Please try again.");
      });
  };

  const handleMessageClick = (receiverUserId, receiverUsername) => {
    if (!user) {
      navigate("/login");
      return;
    }

    navigate("/messages", {
      state: { receiverUserId, receiverUsername },
    });
  };

  

  if (!product) {
    return <div className="text-center mt-24 text-red-600">Product not found!</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex mt-24 ml-[230px] items-center bg-white">
        <div className="flex bg-white rounded-lg p-5 max-w-4xl">
          <div className="w-[700px] h-[700px] object-cover">
            <img
              src={product.imageUrl||""}
              alt={product.products_name}
              className="rounded-lg"
            />
          </div>
          <div className="ml-24 mt-8">
            <div className="relative -left-36">
              <h1 className="text-2xl text-black font-bold mb-2">
                {product.products_name}
              </h1>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg mr-2">★★★★☆</span>
              <span className="text-gray-500">(Reviews)</span>
            </div>
            <p className="text-xl text-black mb-2">
              MWK {parseInt(product.price).toLocaleString()}/{product.quantity_metric}
            </p>
            <p className="text-gray-600 mb-4">{product.location}</p>
            <div className="flex items-center mb-6">
              <button
                onClick={handleDecrease}
                className="bg-white border text-black px-3 py-1 border-gray-600 rounded-l"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="text-center w-12 border-gray-600 px-2 py-1"
              />
              <button
                onClick={handleIncrease}
                className="bg-red-600 text-white border px-3 py-1 rounded-r focus:outline-none"
              >
                +
              </button>
              <button
                onClick={handleBuyNow}
                className="ml-4 h-[34px] w-32 bg-red-500 text-white rounded-[4px] hover:bg-red-600 focus:outline-none"
              >
                Buy Now
              </button>
              <button className="ml-4 h-[34px] w-[40px] bg-gray-100 text-black border border-gray-600 rounded-lg hover:bg-red-600 focus:outline-none">
                <FontAwesomeIcon icon={farHeart} />
              </button>
            </div>
            <div className="mt-4">
              <button className="flex text-gray-500 hover:text-gray-700 focus:outline-none">
                <i className="fas fa-comments mr-2"></i>
                Do you have Questions?{" "}
                <button
                  className="ml-1 text-red-500"
                  onClick={() =>
                    handleMessageClick(product?.userId, product?.username)
                  }
                >
                  Message
                </button>
              </button>
            </div>
            <button className="flex text-gray-500 hover:text-gray-700 focus:outline-none">
              <Link to="/FeedbackForm">
                <span className="ml-1 text-blue-500">Rate the product</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <SellerProfile feedbacks={feedbacks} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductBuyNowPage;
