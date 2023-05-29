import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/Context";
import Product from "../../Products/Product/Product";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item?.id} className="cart-product">
          <div className="img-container">
            <img
              src={
                // process.env.REACT_APP_DEV_URL +
                item?.img?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item?.title}</span>

            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes?.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>

            <div className="text">
              <span>{item.attributes?.quantity}</span>
              <span>:</span>
              <span className="highlight">
                &#8377;{item?.price * item?.attributes?.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
